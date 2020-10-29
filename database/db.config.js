const Sequelize = require('sequelize');
const user = "root";
const password = "";
const port = "3306";

//settings
const sequelize = new Sequelize(`mysql://${user}:${password}@localhost:${port}/delilahresto`);

//verifying connection  
sequelize.authenticate().then(() => {
    console.log('DB Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

sequelize.sync()
    .then(() => {
        console.log("Tables created.")
    })


    
module.exports = sequelize