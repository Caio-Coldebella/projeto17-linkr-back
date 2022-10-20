import { Router } from "express";
import publishRouter from "./publishRouter.js";
import likesRoutes from './likes.Routes.js'

const router = Router();

router.use(publishRouter);
router.use(likesRoutes);

export default router;
