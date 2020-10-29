const sequelize = require('../../database/db.config')
const Sequelize = require('sequelize')

module.exports = sequelize.define('Orders', {
    order_id: {
        field: 'order_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_time: {
        field: 'order_time',
        type: Sequelize.STRING,
        allowNull: false
    },
    estimated_delivery_time: {
        field: 'estimated_delivery_time',
        type: Sequelize.STRING,
        allowNull: false
    },
    total: {
        field: 'total',
        type: Sequelize.FLOAT,
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
}, )