import { Router } from "express";
import publishRouter from "./publishRouter.js";
import likesRoutes from './likes.Routes.js';
import authRoutes from './auth.Routes.js';

const router = Router();

router.use(publishRouter);
router.use(likesRoutes);
router.use(authRoutes);

export default router;
