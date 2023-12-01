
const express = require('express')
const sendMail = require('./mail')
const app = express()
const mysql = require("mysql")
const path = require('path')
require('dotenv').config()

const port = 3500


app.listen(port, () => console.info(`Listening on port ${port}`))

// STATIC FILES******************
app.use(express.static(path.join(__dirname, 'public')))


// DATA PARSING
app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())


// SET VIEW TEMPLATE ENGINE*********
app.set('views', './views')
app.set('view engine', 'ejs')


// CONNECT TO ROUTES**************
app.use('/', require('./routes/pages'))
app.use('/auth', require('./routes/auth'))

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
    console.log("Connected to Mysql")
    Connection.query('CREATE DATABASE IF NOT EXISTS destiny_sanctuary_db', (err) => {
        if (err) throw new Error(err)
        console.log("And Database Created")
    Connection.changeUser({ database: 'destiny_sanctuary_db' }, (err) => {
        if (err) throw new Error(err)
        createTable()
    })
    })
})


function createTable() {
    Connection.query(`CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
        name VARCHAR(250), 
        email VARCHAR(250), 
        password VARCHAR(250), 
        confirm_password VARCHAR(250)

    )`, (err) => {
        if (err) throw new Error(err) 
        console.log("Table created")
    })
}
// const Connection = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD
// })




