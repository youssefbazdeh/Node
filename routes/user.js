import express from 'express';
import { body } from 'express-validator';
import {  getOnce, login } from '../controllers/user.js';
import { getAll, addOnce , getUserById , updateUser } from '../controllers/user.js';
/**
 * Router est un objet de base sur le module express.
 * Cet objet a des méthodes similaires (.get, .post, .patch, .delete)
 * à l'objet app de type "express()" que nous avons utilisé précédemment.
 */
const router = express.Router();

// Déclarer d'abord la route, puis toutes les méthodes dessus (préfixe spécifié dans server.js)
router
  .route('/signup')
  .get(getAll)
    .post(
        body('fullname').isLength({ min: 5 }),
        body('password').isLength({ min: 8 }),
        body('username').isLength({ min: 4 }),
        addOnce);



  router
  .route('/:user_id')
  .patch(updateUser)
  .get(getUserById)
 


router.route('/login')
  .post(login)
router
  .route('/')
  .get((req, res) => res.status(200).json({ message: 'Hello World!' }))


/**
 * Maintenant que nous avons créé toutes ces routes,
 * exportons ce module pour l'utiliser dans server.js
 * puisque c'est lui notre entrée principale "main".
 */
export default router;