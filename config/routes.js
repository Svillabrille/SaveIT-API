const express = require("express");
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware')

const usersController = require('../controllers/users.controller')
const authController = require('../controllers/auth.controller')
const ticketController = require('../controllers/ticket.controller')

router.get('/', (req, res, next) => {
  res.status(200).json({ ok: true })
})

/* Auth */

router.post('/login', authMiddleware.isNotAuthenticated, authController.login)

/* Users */

router.post('/register', authMiddleware.isNotAuthenticated, authController.create)
router.get('/users/me', authMiddleware.isAuthenticated, 
usersController.getCurrentUser)
router.get('/users/:id', usersController.getUserById)

/* Tickets */

router.post('/new-ticket', authMiddleware.isAuthenticated, ticketController.createTicket)

/* Shopping Lists */

router.post('/create-your-shopping-list/checkout', authMiddleware.isAuthenticated, usersController.checkout)

module.exports = router