import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer'
import  jwt  from 'jsonwebtoken';
import { signAccessToken,signRefreshToken} from '../middlewares/auth.js';


var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true, // use SSL
    auth: {
      user: "bazdeh.youssef@esprit.tn",
      pass: "191JMT2047",
    },
  });
  
  
  const SendEmail = async (req, res, next) => {
  
      var mailOptions = {
        from: "bazdeh.youssef@esprit.tn",
        to: "youssefbazdeh99@gmail.com",
        text: "Hello Welcome to .....................",
        subject: "Welcome",
        
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          res.json({ message: "error sending" });
          console.log(error);
        } else {
          res.status(205).json({
            message: "Email Has Sent!",
          });
        }
      });
    
  };

  login: async (req, res, next) => {
    try {
      const result = await authSchema.validateAsync(req.body)
      const user = await User.findOne({ email: result.email })
      if (!user) throw createError.NotFound('User not registered')

      const isMatch = await user.isValidPassword(result.password)
      if (!isMatch)
        throw createError.Unauthorized('Username/password not valid')

      const accessToken = await signAccessToken(user.id)
      const refreshToken = await signRefreshToken(user.id)

      res.send({ accessToken, refreshToken })
    } catch (error) {
      if (error.isJoi === true)
        return next(createError.BadRequest('Invalid Username/Password'))
      next(error)
    }
  }

// ! /login
export async function login(req, res) {
    var password = req.body.password

    User.findOne({"email":req.body.email})
    .then(user => {
        if(user){
          

            bcrypt.compare(password,user.password,async function(err,result){
                if(err){
                    res.json({
                        error : err
                    })
                }
                if(result){
                    const accessToken = await signAccessToken(user.id)
                  // const refreshToken = await signRefreshToken(user.id)
                    res.status(200).json({
                        message: 'Login succesfull',
                        accessToken ,
                       // refreshToken,
                        user
                    
                    })
                }else {
                    res.status(401).json({
                        message: 'Password does not matched'
                    })
                }
            })
            
        }else{
            res.status(401).json({
                message : 'no user found !!'
            })
        }
    })
}

export function getAll(req, res) {
    User
        .find({})
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export async function addOnce(req, res) {
    // Invoquer la m�thode create directement sur le mod�le
    console.log(req.body)
        User
            .create({
                username: req.body.username,
                fullname: req.body.fullname,
                role: req.body.role,
                email: req.body.email,
                datedenaissance: req.body.datedenaissance,
                password: await bcrypt.hash(req.body.password,10), 
            })
        .then(newUser => {
            res.status(200).json(newUser);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
    

}
export function getUserById(req, res) {
    User
    .findOne({ "_id": req.params._id })
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
}

export function getOnce(req, res) {
    User
        .findOne({ "username": req.params.username })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

/**
 * Mettre � jour plusieurs documents
 * Remarque : renommez putOnce par putAll
 */
export function putAll(req, res) {
    User
        .updateMany({}, { "name": "" })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}
/**
 * Updates all fields
 */
export function putOnce(req, res) {
    User
        .findOneAndUpdate({ "username": req.params.username },
            {"username": req.body.username
            ,"fullname": req.body.fullname,
             "password": req.body.password })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}
/**
 * Mettre � jour un seul document
 */
export function patchOnce(req, res) {
    User
        .findOneAndUpdate({ "username": req.params.username }, { "fullname": req.body.fullname })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

/**
 * Supprimer un seul document
 */
export function deleteOnce(req, res) {
    User
        .findOneAndRemove({ "username": req.params.username })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

// /**
//  * Supprimer plusieurs documents
//  */
// export function deleteOnce(req, res) {
//     User
//     .remove({ "onSale": false })
//     .then(doc => {
//         res.status(200).json(doc);
//     })
//     .catch(err => {
//         res.status(500).json({ error: err });
//     });
// }