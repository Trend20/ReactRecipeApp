const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');



const transport = {
    host: 'smtp.example.com',
    port: '587',
    auth:{
        user: creds.USER,
        pass: creds.PASS,
    }
}

let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) =>{
    if(error){
        console.log(error);
    }else {
        console.log('Server is ready to take messages');
    }
});


router.post('./send', (req,res,next) =>{
    const name = req.body.name
    const email = req.body.email
    const message = req.body .message
    const content = ` name: ${name} \n email: ${email} \n message: ${message}`

    const mail={
        from: name,
        to: 'Receiving email', 
        // email you intend to use to receive emails
        subject: 'New message fro contact form',
        text: content
    }

    transporter.sendMail(mail,(err,data) =>{
        if(err){
            res.json({
                status: 'fail'
            })
        }else{
            res.json({
                status: 'success'
            });
        }
    })
})

const app = express();
app.use(cors());
app.use(express.json());
app.use('/',router);
app.listen(3002);