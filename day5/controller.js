const event = require("./events")

module.exports = {
    register: (req, res) => {
        try {
            // data+=1
            // const email = res.locals.email
            // console.log(email)
            event.emit("registered");
            res.json({message:"success register"})
        } catch (error) {
            console.log(error)
            res.json({message:error.message})
        }
        
    },
    payment: (req, res) => {
        res.json({message:'success payment'})
    }
}