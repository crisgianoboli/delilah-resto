const sequelize = require('../../database/db.config')
const Sequelize = require('sequelize')

module.exports = sequelize.define('Detail', {
    order_detail_id: {
        field: 'order_detail_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        field: 'quantity',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    subtotal: {
        field: 'subtotal',
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
}, )