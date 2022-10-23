import { Router } from 'express';
import { validationToken } from "../middlewares/validationToken.js";

const router = Router();

router.update('/post/:id', 
    validationToken,
    );

export default router;

