const express = require("express")
const mysql = require("mysql")



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


exports.register = (req, res) => {
    console.log(req.body)

    const{ name, email, password, confirmPassword} =  req.body

    Connection.query('SELECT email FROM users WHERE  email = ?',  [])
    res.send("Form submitted")
}