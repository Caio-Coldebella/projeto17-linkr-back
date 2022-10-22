import { Router } from "express";
import publishRouter from "./publishRouter.js";
<<<<<<< HEAD:routers/index.js
import likesRoutes from './likes.Routes.js'
import hashtagRouter from "./hashtagRouter.js";
=======
import likesRoutes from './likes.Routes.js';
import authRoutes from './auth.Routes.js';
>>>>>>> 3602b0b8cd6e71a2127656c79c46dc3a11b17514:src/routers/index.js

const router = Router();

router.use(publishRouter);
router.use(likesRoutes);
<<<<<<< HEAD:routers/index.js
router.use(hashtagRouter);
=======
router.use(authRoutes);
>>>>>>> 3602b0b8cd6e71a2127656c79c46dc3a11b17514:src/routers/index.js

export default router;
