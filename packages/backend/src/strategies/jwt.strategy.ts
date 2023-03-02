import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import User from '../models/User';
import { IJwtPayload } from '../types/user.type';

export const jwtStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  },
  async (jwtPayload: IJwtPayload, done: VerifiedCallback) => {
    try {
      const user = await User.findById(jwtPayload.userId).select('email _id');

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (error) {
      return done(null, false);
    }
  }
);
