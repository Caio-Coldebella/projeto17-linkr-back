import { Router } from 'express';
import { validationToken } from "../middlewares/validationToken.js";
import * as middleware from "../middlewares/update.Middleware.js";

const router = Router();

router.update('/post/:id',
    validationToken,
    middleware.validPost,
    
);

export default router;

