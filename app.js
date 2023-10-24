const express = require('express')
const sendMail = require('./mail')
const expressLayouts = require('express-ejs-layouts')

const path = require('path')

require('dotenv').config()

const app = express()

const port = 3500

// dotenv.config({ path: './.env'})

app.listen(port, () => console.info(`Listening on port ${port}`))

// STATIC FILES******************
app.use(express.static(path.join(__dirname, 'public')))


// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))
// app.set(path.join(__dirname, 'views', './views'))


// SET VIEW TEMPLATE ENGINE*********
app.use(expressLayouts)
app.set('layout', './layouts/full-width.ejs')
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

// ROUTES IN PAGES
// app.get('/', (req, res) => {
//     res.render('index', {title:'RCCG|DS-Home-Page'})
// })
// app.get('/about', (req, res) => {
//     res.render('about', {title:'RCCG|DS-About'})
// })

// app.get('/contact', (req, res) => {
//     res.render('contact', {title:'RCCG|DS-Contact'})
// })

// app.get('/testimony', (req, res) => {
//     res.render('testimony', {title:'RCCG|DS-Testimony'})
// })
// app.get('/offerings', (req, res) => {
//     res.render('offerings', {title:'RCCG|DS-Offering'})
// })
// app.get('/gallery', (req, res) => {
//     res.render('gallery', {title:'RCCG|DS-Gallery'})
// })


