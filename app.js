const express = require('express')
const sendMail = require('./mail')

// const Connection = require('.routes/auth')
const mysql = require("mysql")

const path = require('path')

require('dotenv').config()

const app = express()

const port = 3500


app.listen(port, () => console.info(`Listening on port ${port}`))

// STATIC FILES******************
app.use(express.static(path.join(__dirname, 'public')))

// SET VIEW TEMPLATE ENGINE*********
app.set('views', './views')
app.set('view engine', 'ejs')

// DATA PARSING
app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())

// CONNECT TO ROUTES**************
app.use('/', require('./routes/pages'))

app.post ('/email', (req, res) => {

    const { subject, email, text } = req.body
    console.log('Data: ', req.body)

    sendMail( email, subject, text, (err, data) => {
        if(err) {
            res.status(500).json({ message: 'Internal Error' })
        } else {
            res.json({ message: 'Email sent!!!' })
        }
    })
})

// DATABASE

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'Godwin J. Oluwadipe',
    password: 'my1integrity'
})

Connection.connect((err) => {
    if (err) throw new Error(err)
    console.log("Connected to Database")
})

// const Connection = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD
// })




