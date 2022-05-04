/* eslint-disable no-console */
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('useFindAndModify', false)

const uri = process.env.MONGODB_URI

if (!uri && process.env.NODE_ENV !== 'test') {
  throw new Error('Missing MONGODB_URI')
}

mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, unique: true },
  number: { type: String, required: true, minlength: 8 },
  id: Number,
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)