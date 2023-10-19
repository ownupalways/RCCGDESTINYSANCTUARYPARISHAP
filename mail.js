const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')




const auth = {
    auth: {
        api_key: PROCESS.ENV.API_KEY,
        domain:'sandboxe0269188a1484f04aa9b0d680c2f1711.mailgun.org'
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