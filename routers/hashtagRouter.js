import {Router} from 'express';

import {findHastagController, findHashtagIdController} from '../controllers/hashtagController.js;'

const hashtagRouter = Router();

hashtagRouter.get("/hashtag", findHastagController);
hashtagRouter.get("/hashtag/:hashtag", findHashtagIdController);

export default hashtagRouter;

