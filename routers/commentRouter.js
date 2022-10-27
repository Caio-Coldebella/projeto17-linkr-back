import { Router } from "express";
import { getcommentController, postcommentController } from "../controllers/commentController.js";
import validateSchema from "../middlewares/validationSchema.js";
import validationToken from "../middlewares/validationToken.js";
import {commentSchema} from "../schemas/commentSchema.js";

const comment = Router();
comment.post("/comment/:postid",validationToken,validateSchema(commentSchema),postcommentController);
comment.get("/comment/:postid",validationToken,getcommentController);
export default comment;