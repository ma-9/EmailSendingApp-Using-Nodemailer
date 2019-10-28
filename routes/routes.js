const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('wish');
})

router.post('/send',(req,res)=>{
    const output = `
        <p>Wish You a Happy Diwali From ${req.body.name}</p></br>
        <h3>: Message :</h3>
        <p>${req.body.Message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'badboysecurities@gmail.com', // generated ethereal user
            pass: 'LaW6rXvEguCHB2V' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: `"${req.body.name} 👻" <${req.body.email}>`, // sender address
        to: req.body.email, // list of receivers
        subject: 'Happy Diwali and Happy New Year ✔', // Subject line
        html: output // html body
    });

    res.redirect('/');
})

router.use('/',(req,res)=> {
    res.send('404 PAGE');
})

module.exports = router;