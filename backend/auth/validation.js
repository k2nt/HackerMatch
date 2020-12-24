const Joi = require('@hapi/joi');


//register validation 
//data is json payload
const regisValid = (data) => { 

    const regisSchema = Joi.object({  // validate payload with joi 
        // name : joi.string().min(6).required(),
            personal :  Joi.object().keys({
                name : Joi.string().min(6).required(),
                email: Joi.string().min(6).required().email(),
                major : Joi.string().min(2).required(),
                contact : Joi.string().allow(''),
                movie : Joi.string().allow('')
            }), 
            password : Joi.string().min(8).required(),// at least 8 by standard
            
            tags : Joi.object().keys({
                WebApp : Joi.boolean().default(false),
                STEM: Joi.boolean().default(false),
                Security: Joi.boolean().default(false),
                FinTech: Joi.boolean().default(false),
                AIML: Joi.boolean().default(false),
                Funniest:Joi.boolean().default(false),
                ARVR: Joi.boolean().default(false),
                Embedded : Joi.boolean().default(false),
                Mobile: Joi.boolean().default(false)
            }),

            skills : Joi.array().items(Joi.string()).max(20), 
            pitch: Joi.string().allow(''),
        });

    return regisSchema.validate(data);
}

//login validation
const loginValid = (data) => { 

    const loginSchema = Joi.object({  // validate payload with joi 
        // name : joi.string().min(6).required(),
            email: Joi.string().min(6).required().email(),  
            password : Joi.string().min(8).required(),// at least 8 by standard
            
        });

        return loginSchema.validate(data);
    }


module.exports.regisValid = regisValid;
module.exports.loginValid = loginValid;