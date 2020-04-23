// import React from 'react';

const express = require('express');
const bodyParser = require('body-parser');
// let nodeMailer = ;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/form', (req, res) => {
    console.log(req.body);

    // let nodemailer = require('nodemailer');
    // nodemailer.createTestAccount((err,account) => {
    //       const htmlEmail = `
    //         <h3>Contact Details</h3>
    //         <ul>
    //           <li>Name: ${req.body.name}</li>
    //           <li>Email ${req.body.email}</li>
    //         </ul>
    //         <h3>Message:</h3>
    //         <p>${req.body.content}</p>
    //       `
    //     });
    // let transporter = nodemailer.createTransport({
    //     host: 'smtp-ethereal.email',
    //     port: 587,
    //     auth: {
    //         user: 'lysanne.okuneva81@ethereal.email',
    //         pass: 'PsxsrbSasPfDMGbBpM'
    //     }
    // });
    // let message = req.body.content;
    //
    // let mail = {
    //     from: req.body.name,
    //     to: 'digitalwebflex@gmail.com',
    //     subject: 'Contact form request',
    //
    //     html: message
    // };
    //
    // transporter.sendMail(mail, (err, data) => {
    //     if (err) {
    //         res.json({
    //             msg: 'fail'
    //         })
    //     } else {
    //         res.json({
    //             msg: 'success'
    //         })
    //     }
    // })
});

app.get('api/body', (req, res) => {
    console.log("req.body", req, res);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});