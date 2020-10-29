require('dotenv').config()
const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const Role = require('../models/role.model')

//ASSOCIATIONS
Role.hasMany(User, {
    foreignKey: 'role_id'
})


//ENDPOINTS
const register = router.post('/users', (req, res) => {
    const userData = {
        username: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        delivery_address: req.body.delivery_address,
        password: req.body.password,
        role_id: req.body.role_id
    }
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (!user) {
                User.create(userData)
                    .then(user => {
                        res
                        .status(201)
                        .send('Account has been successfully created')
                    })
                    .catch(err => {
                        res.status(400).send('error:' + err)
                    })
            } else {
                res
                .status(409)
                .send('Account already exists')
            }
        })
        .catch(err => {
            res
            .status(400)
            .send('error:' + err)
        })
})


const login = router.post('/users/login', (req, res) => {
    User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
        .then(user => {
            if (!user) {
                return res.status(400).send('The username and/or password is incorrect')
            } else {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 4980
                })
                return res.json({
                    accessToken: token
                })
            }
        })
        .catch(err => {
            res
            .status(400)
            .send('error:' + '' + err)
        })
})


const getUsers = router.get('/users', authToken, authAdmin, (req, res) => {
    User.findAll()
        .then((users) => {
            if (users) {
                res
                .status(200)
                .json(users)
            } else {
                res
                .status(404)
                .json(({message: 'Not found'}))
            }
        })
})

module.exports = getUsers, register, login