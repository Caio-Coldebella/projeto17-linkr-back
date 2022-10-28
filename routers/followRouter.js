import { Router } from "express";
import validationToken from "../middlewares/validationToken.js";
import GetCheckFollow from "../controllers/followController.js/checkFollower.js";
import AddFollower from "../controllers/followController.js/addFollower.js";
import RemoveFollower from "../controllers/followController.js/removeFollower.js";

const router = Router();

router.get('/follow/:userFollowerId',validationToken, GetCheckFollow);
router.post('/follow/:userFollowerId',validationToken, AddFollower);
router.delete('/follow/:userFollowerId',validationToken, RemoveFollower);

export default router;