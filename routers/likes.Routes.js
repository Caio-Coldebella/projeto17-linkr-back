import { Router } from "express";
import * as middleware from '../middlewares/likes.Middleware.js';
import * as controllers from '../controllers/likes.Controller.js';

const router = Router();

router.post('/post/:id/like',
    middleware.postLikes,
    controllers.postLikes
);

export default router;
