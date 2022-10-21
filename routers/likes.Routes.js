import { Router } from "express";
import * as middleware from '../middlewares/likes.Middleware.js';
import * as controllers from '../controllers/likes.Controller.js';
import validationToken from '../middlewares/valitationToken.js';

const router = Router();

router.post('/like/:postId',
    validationToken,
    middleware.likes,
    controllers.postLikes
);

router.delete('/like/:postId',
    validationToken,
    middleware.likes,
    controllers.deleteLikes
);


export default router;
