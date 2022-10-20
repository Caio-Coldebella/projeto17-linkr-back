import * as helper from './controlers.Helper.js';
import * as repository from '../repositories/likes.Repository.js'

async function postLikes(req, res) {


    const { id: userId } = res.locals.user[0];
    const postId = res.locals.postId;

    try {

        const response = await repository.insertPostLike(postId, userId);

        if (response.rowCount) {
            return helper.okResponse(res);
        }

        return helper.badRequest(res);


    } catch (error) {
        return helper.serverError(res, error);
    }

}

async function deleteLikes(req, res, next) {

    return notImplemented(res);

    next();

}

export { postLikes, deleteLikes };