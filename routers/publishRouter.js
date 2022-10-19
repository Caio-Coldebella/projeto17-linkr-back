import { Router } from "express";
import { postPublish } from "../controllers/publishController.js";
import valitationSchema from "../middlewares/valitationSchema.js";
import valitationToken from "../middlewares/valitationToken.js";
import publishSchema from "../schemas/publishSchema.js";

const router = Router();

router.post("/publish", valitationToken,valitationSchema(publishSchema), postPublish);

export default router;