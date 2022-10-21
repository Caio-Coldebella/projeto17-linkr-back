import { Router } from "express";
import * as middleware from '../middlewares/likes.Middleware.js';
import * as controllers from '../controllers/likes.Controller.js';
import validationToken from '../middlewares/validationToken.js';

const router = Router();

router.post('/post/:postId/like',
    validationToken,
    middleware.likes,
    controllers.postLikes
);

router.delete('/post/:postId/like',
    validationToken,
    middleware.likes,
    controllers.deleteLikes
);


export default router;
