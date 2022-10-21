import { Router } from "express";
import { getPublish, postPublish } from "../controllers/publishController.js";
import validationSchema from "../middlewares/validationSchema.js";
import validationToken from "../middlewares/validationToken.js";
import publishSchema from "../schemas/publishSchema.js";

const router = Router();

router.post("/publish", validationToken, validationSchema(publishSchema), postPublish);
router.get('/publish',validationToken, getPublish);

export default router;