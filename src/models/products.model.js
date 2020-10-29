const sequelize = require('../../database/db.config')
const Sequelize = require('sequelize')

module.exports = sequelize.define('Products', {
    product_id: {
        field: 'product_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        field: 'product_name',
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: 'name is required'
            }
        },
        allowNull: false
    },
    price: {
        field: 'price',
        type: Sequelize.FLOAT,
        allowNull: false
    },
    description: {
        field: 'description',
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})