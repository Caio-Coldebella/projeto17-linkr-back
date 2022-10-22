import { Router } from "express";
import publishRouter from "./publishRouter.js";
import likesRoutes from './likes.Routes.js'
import hashtagRouter from "./hashtagRouter.js";

const router = Router();

router.use(publishRouter);
router.use(likesRoutes);
router.use(hashtagRouter);

export default router;
