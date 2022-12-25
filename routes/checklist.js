import express from "express";

import {
  
  addChecklist,
  updateChecklist,
  getAllChecklistByIdUser,
  getAll,
  getchecklistById,
} from "../controllers/checklist.js";
import multer from "../middlewares/multer-config.js";
const router = express.Router();

router
.route("/")
.get(getAll)
.post(
  // Utiliser multer
  multer,
  addChecklist
);
router
    .route('/:id')
    .put(multer,updateChecklist)
    .get(getchecklistById)

router
  .route('/user/:user_id')
  .post(multer,addChecklist)
  .get(getAllChecklistByIdUser)

 
  

export default router;