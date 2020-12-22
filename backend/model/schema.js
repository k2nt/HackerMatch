const mongoose = require('mongoose');
const { use } = require('../route/register');
const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}



const userSchema = mongoose.Schema({
        _id: { 
            type: mongoose.Schema.Types.ObjectId, 
            auto: true 
        },

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
        skill : {
            type: [String],
            max: 20,
        },
        pitch: String,
    });
           
    // userSchema.path('name').index({ unique: true });

    // userSchema.pre('save', function(next) {
    //     this.user.personal.password = getHashedPassword(this.user.personal.password);
    //     next();
    //   });
      




     
module.exports = mongoose.model('User', userSchema);
     