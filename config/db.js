const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  } catch (err) {
    console.log('MongoDB Connected...')
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
