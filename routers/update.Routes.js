import { Router } from 'express';
import validationToken from "../middlewares/validationToken.js";
import * as middleware from "../middlewares/update.Middleware.js";
import * as controller from "../controllers/update.Contoller.js";

const router = Router();

router.put('/post/:id',
    middleware.validPost,
    controller.updatePost
);

export default router;

