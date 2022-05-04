const createError = require('http-errors')
const Product = require('../models/Product.model')

module.exports.create = (req,rex,next) => {
    Product.create(req.body)
    .then(product => {
      res.status(201).json(product)
    })
    .catch(next)
}

