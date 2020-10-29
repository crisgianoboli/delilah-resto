const jwt = require('jsonwebtoken')

authToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (token == null) {
        return res.status(403).send("Forbidden")
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res
                .status(401)
                .send('Token has expired. Please login again')
        }
        req.user = user
        next()
    })
}

module.exports = authToken