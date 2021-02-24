const validator = require('joi');

module.exports = {
    rules:{
        register: async(req, res, next) => {
            try {
                //initiate rules
                const rules = validator.object({
                    username: validator.string().min(3).max(255).required(),
                    password: validator.string().min(8).required(),
                    email:validator.string()
                })                
                await rules.validateAsync(req.body)    
                // res.locals.email=req.body.email
                next()

            } catch (error) {
                console.log(error);
                return res.status(400).json({message:error.message})
            }
        }
    }
}