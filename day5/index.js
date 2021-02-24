const express = require('express');
// const EventEmitter=require('events')
const app = express();

const Controller = require('./controller');
const Middleware = require('./middleware');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('registered', () => {
//     //handle event
//     console.log('sending email for verification')
// });

// const middleware = (req, res, next) => {
// next()    
// }

// const userModel = {};

// const controller = async (req, res) => {
//     // await userModel.create({});
//     eventEmitter.emit('registered')
//     return res.json({message:'register success, check your email'})
// }
app.use(express.json())
app.post('/register',Middleware.rules.register, Controller.register)

app.post('/payment/acc',Controller.payment)

const port = 4000;
app.listen(port,()=>console.log(`this app run on port ${port}`))