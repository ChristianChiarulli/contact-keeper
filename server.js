const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

// Init Middleware to parse data from POST request
// app.use(express.json())
// app.use(express.json({ extended: true }))
app.use(express.json({ extended: false }))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

app.get('/', (req, res) => res.json({ msg: 'welcome to app' }))

app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/contacts', require('./routes/contacts'))
