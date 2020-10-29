const sequelize = require('../../database/db.config')
const Sequelize = require('sequelize')

module.exports = sequelize.define('OrderStatus', {
    status_id: {
        field: 'status_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status_name: {
        field: 'status_name',
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
}, )