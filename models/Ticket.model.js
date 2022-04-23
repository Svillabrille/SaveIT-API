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
      // QUEDA VER COMO DAR DE ALTA LOS ARTÍCULOS Y EL NÚMERO DE VECES QUE LO HAS COMPRADO
      email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [EMAIL_PATTERN, 'Email has to be valid']
      },
      name: {
        type: String,
        required: [true, 'Name is required']
      },
      password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must have at least 8 characters']
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