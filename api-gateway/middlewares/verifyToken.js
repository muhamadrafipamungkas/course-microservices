const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env

module.exports = async (req, res, next) => {
    const token = req.headers.authorization
    jwt.verify(token, JWT_SECRET, (error, decoded) => {
        if (error) {
            return res.status(400).json({ message: error.message })
        }

        req.user = decoded
        return next()
    })
}