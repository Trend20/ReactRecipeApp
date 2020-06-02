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