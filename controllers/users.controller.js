const createError = require('http-errors')
const User = require('../models/User.model')
const Stripe = require('stripe')

module.exports.getUserById = (req, res, next) => {
  User.findById(req.params.id)
  .populate('tickets')
  .then(user => {
      if (!user) {
        // not found
        next(createError(404, 'User not found'))
      } else {
        res.status(200).json(user)
        const userTickets = user.map
      }
    })
    .catch(next)
}

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.currentUser)
    .populate('tickets')
    .then(user => {
      if (!user) {
        // not found
        next(createError(404, 'User not found'))
      } else {
        res.status(200).json(user)
      }
    })
    .catch(next)
}

module.exports.checkout = (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  const { paymentId, amount } = req.body

  stripe.paymentIntents.create({
    amount,
    currency: "USD",
    description: "id del producto",
    payment_method: paymentId,
    confirm: true,
    user: req.currentUser.id
  })
  .then(result => res.status(200).json({ message: "confirmed!", result }))
  .catch(next)

}