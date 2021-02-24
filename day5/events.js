const EventEmitter = require('events');
const Middleware=require('./middleware')
const eventEmitter = new EventEmitter();
const email=require('./email');
const { emailRegistered, emailResetPass, emailPaymentAcc, emailPaymentRej } = require('./email');
//register all events

//on register event
eventEmitter.on('registered',emailRegistered)
    // const email = res.locals.email
    // console.log(email)
 
// });

//on reset password
eventEmitter.on("resetPassword",emailResetPass)

//on payment accepted
eventEmitter.on("paymentAccepted",emailPaymentAcc);

//on payment rejected
eventEmitter.on("paymentRejected", emailPaymentRej);

module.exports = eventEmitter;