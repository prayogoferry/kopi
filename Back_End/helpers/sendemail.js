const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'prayogoferry@gmail.com',
        pass: 'epyknezqwvrnhcet'
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter;
