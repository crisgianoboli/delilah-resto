// EXPRESS
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//MIDDLEWARES
const authToken = require('./src/middlewares/authenticate')
const authAdmin = require('./src/middlewares/authAdmin')

const {getUsers,register,login} = require('./src/routes/user_routes')
const products = require('./src/routes/product_routes')
const orders = require('./src/routes/orders_routes')

// Server Setup
app.use(bodyParser.json()); 

app.listen("3000", () => {
	console.log(`Server is running`);
})

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to Delilah Restó application."
	});
})


app.use(require('./src/routes/user_routes', register))
app.use(require('./src/routes/user_routes', login))

app.use(require('./src/routes/product_routes', products))
app.use(require('./src/routes/user_routes', getUsers))
app.use(require('./src/routes/orders_routes', orders))