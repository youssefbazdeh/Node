import express from "express";

import {
  
   
  updataBudget,
  getAllBudgetByIdUser,
  getAll,
  getBudgetById,
  addBudget,
  deleteOnce
  
} from "../controllers/budget.js";
import { addOnce } from "../controllers/user.js";
const router = express.Router();

router
.route("/")
.get(getAll)
.post(addBudget)


router
    .route('/:id')
    .get(getBudgetById)

router
    .route('/:idbudget')  
    .put(updataBudget)
    .delete(deleteOnce)

router
  .route('/user/:user_id')
  //.post(addBudget)
  .get(getAllBudgetByIdUser)
 
  

export default router;