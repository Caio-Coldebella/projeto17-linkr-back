import { Router } from "express";
import * as middleware from '../middlewares/likes.Middleware.js'

const router = Router();

router.post('/post/:id/like', middleware.postLikes,(req, res) => { res.send('<h1>post/:id/like</h1>') });

export default router;
