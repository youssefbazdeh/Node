import express from "express";

import {
  getWeddingById,
  getAllWedding,
  addWedding,
  updateWedding,
  getWeddingByIdUser,
} from "../controllers/wedding.js";
import multer from "../middlewares/multer-config.js";
const router = express.Router();

router
.route("/")
.get(getAllWedding)
.post(
  // Utiliser multer
  multer,
  addWedding
);

router.route("/:_id")
.put(multer, updateWedding)
.get(getWeddingById);

router
  .route('/user/:user_id')
  .get(getWeddingByIdUser)

export default router;