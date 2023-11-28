const express = require('express')

const router = express.Router()

const database = require('../database')


router.get('/', (req, res) => {
    res.render('index', {title:'RCCG|Destiny Sanctuary Parish-Home'})
})

router.get('/register', (req, res) => {
    res.render('register', {title:'RCCG-DS|Register'})

    
})

router.get('/login', (req, res) => {
    res.render('login', {title:'RCCG-DS|login'})
})

router.get('/about', (req, res) => {
    res.render('about', {title:'RCCG|DS-About'})
})

router.get('/contact', (req, res) => {
    res.render('contact', {title:'RCCG|DS-Contact'})
})

router.get('/offerings', (req, res) => {
    res.render('offerings', {title:'RCCG|DS-Offering'})
})
router.get('/gallery', (req, res) => {
    res.render('gallery', {title:'RCCG|DS-Gallery'})
})

router.get('/testimony', (req, res) => {
    res.render('testimony', {title:'RCCG|DS-Testimony'})
})

// router.get("/testimony", (req, res, next) => {
//     const query = "SELECT * FROM testimony_users ORDER BY id DESC"
//     database.query(query, function(error, data){
//         if (error) {
//             throw error
//         } else {
//             res.render('testimony', {title: 'Thank You Jesus!', action: 'share'})
//         }
//     })
// })

// router.get('/share', (req, res, next) => {
//     res.render('testimony', {title:'Share Your Testimony'})
// })



module.exports = router