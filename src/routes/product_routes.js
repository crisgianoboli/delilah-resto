const express = require('express');
const Product = require('../models/products.model')

const router = express.Router();

//ENDPOINTS

router

    .post('/products', authAdmin, (req, res) => {
        Product.create({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description
            })
            .then((product) => {
                res
                    .status(201)
                    .send('Product created successfully')
            })
            .catch(err => {
                res
                .status(400)
                .send('error:' + '' + err)
            })
    })

    .get('/products', authToken, (req, res) => {
        Product.findAll()
            .then((product) => {
                if (product) {
                    res.json(product)
                } else {
                    res
                    .status(404)
                    .send('Not Found')
                }
            })
    })

    .get('/products/:id', authToken, (req, res) => {
        let {
            id
        } = req.params
        Product.findByPk(id).then((product) => {
            if (product) {
                res.json(product)
            } else {
                res
                    .status(404)
                    .send('Not Found')
            }
        })
    })

    .put('/products/:id', authAdmin, (req, res) => {
        let {id} = req.params
        if (isNaN(id)) {
            return res
                .status(400)
                .json({
                    error: 'Id should be a number'
                })
        }
        Product.update({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description
        },  { where: { product_id: id}})
            .then(() =>
                res
                .status(202)
                .send('The product was updated')
            )
            .catch(err => {
                res.send('error:' + '' + err)
            })
    })

    .delete('/products/:id', authAdmin, (req, res) => {
        let {id } = req.params
        if (isNaN(id)) {
            return res
                .status(400)
                .json({
                    error: 'Id should be a number'
                })
        }
        Product.findByPk(id).then((product) => {
                product.destroy().then(() => {
                    res
                        .status(200)
                        .send('the product was deleted')
                })
        })
        .catch(err => {
            res
            .status(400)
            .send('error:' + '' + err)
        })
    })

    
module.exports = router