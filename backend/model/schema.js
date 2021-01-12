const mongoose = require('mongoose');
// const { use } = require('../route/register');




const userSchema = mongoose.Schema({
        
    personal : {
        type: {
        
            name : {
                type : String,
                required : true
            },
            major : {
                type : String,
                required : true
            },
            email : {
                type : String,
                required : true,
                unique: true
            },
    
            contact: String,
            movie : String,
        },
        required: true,
    },

    password:{
        type: String,
        required : true
    },

    tags : {
        type:
            {
            WebApp : Boolean,
            STEM: Boolean,
            Security: Boolean,
            FinTech: Boolean,
            AIML: Boolean,
            Funniest:Boolean,
            ARVR: Boolean,
            Embedded : Boolean,
            Mobile: Boolean,
            },

            require: function() {
                return this.webApp || this.STEM || this.Security || this.FinTech || this.AIML || 
                this.Funniest || this.ARVR || this.Embedded || this.Mobile;
            },   
        },
    skills : {
        type: [String],
        max: 20,
    },
    pitch: String,
});





           
   
      




     
module.exports = mongoose.model('User', userSchema);
     