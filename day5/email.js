// const nodemailer=require('nodemailer')
const { required } = require('joi');
const nodemailer = require('nodemailer');


module.exports = {
    emailRegistered: async (req, res) => {
        // const email = res.locals.email
        // console.log(email)
        const transporter = await nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: 'lekturapps@gmail.com',
                pass: 'lektur1234'
            }
        });
          
          const mailOptions = {
            from: 'no-reply@lektur.com',
            to: 'bayu.suryo.a@gmail.com',
            subject: 'Invited',
            text: 'Dudes, you were invited to this course ......'
          };
          
          await transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        // console.log('sending email for verification register')
    },
    emailResetPass: async () => {
        console.log('sending email for reset password')
    },
    emailPaymentAcc: async () => {
        console.log('sending email for payment accepted')
    },
    emailPaymentRej: async () => {
        console.log('sending email for payment reject')
    }
};