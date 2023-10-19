const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')




const auth = {
    auth: {
        api_key: process.env.APPLINK,
        domain: process.env.DOM
    }
}


const transporter = nodemailer.createTransport(mailGun(auth))


const sendMail = (email, subject, text, cb) => {

    const mailOptions = {
        from: email,
        to: 'rccgdestinysanctuaryparish@gmail.com',
        subject,
        text
    }
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err) {
           cb(err, null)
        } else {
            cb(null, data)
        }
    })

}


module.exports = sendMail