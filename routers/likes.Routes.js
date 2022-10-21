import { Router } from "express";
import * as middleware from '../middlewares/likes.Middleware.js';
import * as controllers from '../controllers/likes.Controller.js';
import validationToken from '../middlewares/validationToken.js';

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


router.get('/like/:postId/users',
    middleware.likes,
    controllers.getLikesUsers
);

router.get('/like/:postId/count',
    middleware.likes,
    controllers.getLikesCount
)


export default router;
