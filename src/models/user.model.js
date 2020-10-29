const sequelize = require ('../../database/db.config')
const Sequelize = require ('sequelize')

module.exports = sequelize.define('User', {
    user_id: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        field: 'username',
        type: Sequelize.STRING,
        allowNull: false
    },
    fullname: {
        field: 'fullname',
        type: Sequelize.STRING
    },
    email: {
        field: 'email',
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    phone: {
        field: 'phone',
        type: Sequelize.STRING,
        allowNull: false
    },
    delivery_address: {
        field: 'delivery_address',
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        field: 'password',  
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
}, )

