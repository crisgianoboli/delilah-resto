const sequelize = require('../../database/db.config')
const Sequelize = require('sequelize')

module.exports = sequelize.define('Payment', {
    payment_id: {
        field: 'payment_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    method: {
        field: 'payment_method',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: 'method is required'
            }
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
})