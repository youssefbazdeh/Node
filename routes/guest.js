import express from "express";

import {
  
  updataGuest,
  getAllGuestByIdUser,
  getAll,
  getGuestById,
  addguest,
  deleteOnce,
} from "../controllers/guest.js";
const router = express.Router();

router
.route("/")
.get(getAll)
.post(addguest);

router
    .route('/:id')
    .get(getGuestById)

router
    .route('/:idguest')  
    .put(updataGuest)
    .delete(deleteOnce)
router
  .route('/user/:user_id')
  .post(addguest)
  .get(getAllGuestByIdUser)
 
  

export default router;