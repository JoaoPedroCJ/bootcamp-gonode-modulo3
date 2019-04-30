const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const UserController = require('./app/controllers/UserController')
const SessionControler = require('./app/controllers/SessionController')

routes.post('/users', UserController.store)
routes.post('/sessions', SessionControler.store)

routes.get('/teste', authMiddleware, (req, res) => res.json({ ok: true }))

module.exports = routes
