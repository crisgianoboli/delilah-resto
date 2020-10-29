const sequelize = require('../../database/db.config')
const Sequelize = require('sequelize')

module.exports = sequelize.define('Roles', {
    role_id: {
        field: 'role_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    role_name: {
        field: 'role_name',
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
}, )