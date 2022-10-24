import { Router } from "express";
import * as middleware from '../middlewares/likes.Middleware.js';
import * as controllers from '../controllers/likes.Controller.js';


const router = Router();

router.post('/like/:postId/user/:userId',
    middleware.likes,
    controllers.postLikes
);

router.delete('/like/:postId/user/:userId',
    middleware.likes,
    controllers.deleteLikes
);


router.get('/like/:postId/user/:userId',
    middleware.likes,
    controllers.getLikeMe
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
