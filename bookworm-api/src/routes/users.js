import express from 'express';
import User from '../models/User';
import parseErrors from "../utils/parseErrors";
import { sendConfirmationEmail } from '../mailer';
import authenticate from '../middleware/authenticate';
const router = express.Router();


router.post('/', (req,res) => {
    const {email, password} = req.body.users;
    const user = new User({email});
    user.setPassword(password);
    user.setComfirmatinToken();
    user.save()
        .then(userRecord => {
        // sendConfirmationEmail(userRecord);
        res.json({ user: userRecord.toAuthJSON() });
      })
      .catch(err =>{
        res.status(400).json({ errors: parseErrors(err.errors) })
      });
});


router.get('/current_user', authenticate, (req, res) => {
  res.json({
    user: req.currentUser
  })
})

export default router;