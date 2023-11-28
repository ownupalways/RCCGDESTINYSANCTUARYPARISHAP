const express = require('express')

const router = express.Router()

const database = require('../database')


router.get("/", (req, res, next) => {
    const query = "SELECT * FROM testimony_users ORDER BY id DESC"
    database.query(query, function(error, data){
        if (error) {
            throw error
        } else {
            res.render('testimony', {title: 'Thank You Jesus!', action:'share'})
        }
    })
})

router.get('/share', (req, res, next) => {
    res.render('testimony', {title:'Share Your Testimony', action: 'share'})
})


module.exports = router