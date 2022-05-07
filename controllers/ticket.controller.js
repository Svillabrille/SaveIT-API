const createError = require('http-errors')
const Ticket = require('../models/Ticket.model')

module.exports.createTicket = (req,res,next) => {
    console.log(req.body)
    Ticket.create({ user: req.currentUser.id, content: req.body.content })
    .then(ticket => {
      res.status(201).json(ticket)
    })
    .catch(e => console.log(e))
}