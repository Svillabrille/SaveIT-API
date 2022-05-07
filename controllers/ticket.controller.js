const createError = require('http-errors')
const Ticket = require('../models/Ticket.model')
const User = require('../models/User.model')

module.exports.createTicket = (req,res,next) => {
    console.log(req.body)
    console.log(req.currentUser)

    Ticket.create({ user: req.currentUser, content: req.body.content })
    .then(ticket => {
      res.status(201).json(ticket)
    })
    .catch(e => console.log(e))
}