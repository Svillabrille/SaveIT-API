const createError = require('http-errors')
const User = require('../models/User.model')
const Stripe = require('stripe')

module.exports.getUserById = (req, res, next) => {
  User.findById(req.params.id)
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

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.currentUser)
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
  const stripe = new Stripe("sk_test_51KtEdeC0aC75uQ581Q2lk4YYehvE40fm6IPopraOWOXesvl2mYyPr")

  const { id, amount } = req.body

  stripe.paymentIntents.create({
    amount,
    currency: "USD",
    description: "id del producto",
    payment_method: id,
    confirm: true
  })
  .then(result => res.status(200).json({ message: "confirmed!", result }))
  .catch(next)

}