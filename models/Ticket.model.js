const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema(
    {
    content: {
        type: String,
        required: true
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