import { Router } from "express";
import { postPublish } from "../controllers/publishController.js";
import valitationSchema from "../middlewares/valitationSchema.js";
import publishSchema from "../schemas/publishSchema.js";

const router = Router();

router.post("/publish/:userId", valitationSchema(publishSchema), postPublish);

export default router;