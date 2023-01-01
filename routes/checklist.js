import express from "express";

import {
  
  addChecklist,
  getAllChecklistByIdUser,
  getAll,
  getchecklistById,
  updataChecklist,
  deleteOnce,
  getAllChecklistByStatus,
} from "../controllers/checklist.js";
import multer from "../middlewares/multer-config.js";
const router = express.Router();

router
.route("/")
.get(getAll)

router
    .route('/:id')
    .get(getchecklistById)
router
  .route('/:idtask')
  .put(updataChecklist)
  .delete(deleteOnce)
  
router
  .route('/user/:user_id')
  .get(getAllChecklistByIdUser)
  .post(multer,addChecklist)

router.route('/:user_id/:status').get(getAllChecklistByStatus)
  

 
  

export default router;