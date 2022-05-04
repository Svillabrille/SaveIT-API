const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {

      name: {
        type: String,
        required: true,
      },
      quantity:{
        type: Number,
      },
      price: {
          type: Number,
          required: true
      },
      supermarket: {
          type: String,
          required: true
      },
      description: {
        type: Date,
        required:true
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    },
    {
      timestamps: true,
      toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
          delete ret.password
          delete ret.__v
          return ret
        }
      }
    }
  )



const Ticket = mongoose.model('Ticket', productSchema)

module.exports = Ticket