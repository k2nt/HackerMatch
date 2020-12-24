const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
require('dotenv/config');


passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.TOKEN_SECRET,
      jwtFromRequest: ExtractJWT.fromHeader('auth-token')
    },
    async (jwt_payload, done) => {
        try {
        return done(null, jwt_payload._id); //signed with ID 
      } catch (error) {
        done(error);
      }
    }
  )
);