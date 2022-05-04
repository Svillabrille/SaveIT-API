const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema(
    {

      supermarket: {
        type: String,
        required: true,
      },
      barcode:{
        type: Number,
        required:true,
      },
      purchasedate: {
        type: Date,
        required:true
      },
      products:{
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
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



const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket