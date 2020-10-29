const express = require('express');

const Order = require('../models/orders.model')
const Detail = require('../models/detail.model')
const Product = require('../models/products.model')
const User = require('../models/products.model')
const Status = require('../models/orderStatus.model')
const Payment = require('../models/payment.model')

const router = express.Router();

//ASSOCIATIONS 

Detail.belongsTo(Product, {
    foreignKey: 'product_id'
})

Order.belongsTo(User, {
    foreignKey: 'user_id'
})
User.hasMany(Order, {
    foreignKey: 'user_id'
})

Order.belongsTo(Status, {
    foreignKey: 'status_id'
})

Order.belongsTo(Payment, {
    foreignKey: 'payment_id'
})

Order.hasMany(Detail, {
    foreignKey: 'order_id'
})
Detail.belongsTo(Order, {
    foreignKey: 'order_id'
})


//ENDPOINTS

router

    .post('/orders', authToken, (req, res) => {
        Order.create({
            order_id: req.body.order_id,
            user_id: req.body.user_id,
            status_id: req.body.status_id,
            payment_id: req.body.payment_id,
            order_time: req.body.order_time,
            estimated_delivery_time: req.body.estimated_delivery_time,
            total: req.body.total
        })
        .then((order) => {
            res.status(201).json(order)
        })
        .catch(err => {
            res
            .status(400)
            .send('error:' + '' + err)
        }) 
    })

    .post('/orders/detail', authToken, (req, res) => {
        Detail.create({
            order_id: req.body.order_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity,
            subtotal: req.body.subtotal
        })
        .then((detail) => {
            res.status(201).json(detail)
        })
        .catch(err => {
            res
            .status(400)
            .send('error:' + '' + err)
        })
    })

    .get('/orders', authAdmin, (req, res) => {
        Order.findAll({
            include: [{ all: true }]
        })
        .then((order) => {
            if (order) {
                res
                .json(order)
                .status(200)
            } else {
                res.status(400).send('Not Found')
            }
        })
    })

    .get('/orders/:id', authAdmin, (req, res) => {
        let {id} = req.params
        Order.findByPk(id, {include: [{all: true}]})
            .then((order) => {
                if (order) {
                    res.json(order)
                } else {
                    res
                        .status(404)
                        .send('Not Found')
                }
            })
    })

    .put('/orders/:id', authAdmin, (req, res) => {
        let {id} = req.params
        Order.update({
            status_id: req.body.status_id,
        }, {where: {order_id: id}
        })
        .then(() => 
            res.status(200).send("the status was modified"))
        .catch(err => {
            res
            .status(400)
            .send('error:' + '' + err)
        })
    })

    .delete('/orders/:id', authAdmin, (req, res) => {
        let {id} = req.params
        if (isNaN(id)) {
            return res
                .status(400)
                .json({
                    error: 'Id should be a number'
                })
        }
        Order.findByPk(id).then((order) => {
            order.destroy().then(() => {
                res
                    .status(200)
                    .send('the order was deleted')
            
            })
        })
    })


module.exports = router