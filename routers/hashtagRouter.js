import {Router} from 'express';

import {findHashtagController, findHashtagIdController} from '../controllers/hashtagController.js';

const hashtagRouter = Router();

hashtagRouter.get("/hashtag", findHashtagController);
hashtagRouter.get("/hashtag/:hashtag", findHashtagIdController);

export default hashtagRouter;

