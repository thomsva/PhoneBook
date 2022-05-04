const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.MONGODB_URI

if (!uri && process.env.NODE_ENV !== 'test') {
  throw new Error('Missing MONGODB_URI')
}

mongoose.connect(uri, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
})

const Person = mongoose.model('Person', personSchema)


if (process.argv.length === 5) {

  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
    id: Math.floor(Math.random() * 10000),
  })
  person.save().then(() => {
    mongoose.connection.close()
  })
}