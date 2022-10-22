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

async function deleteLikes(req, res) {

    const { id: userId } = res.locals.user[0];
    const postId = res.locals.postId;

    try {

        const response = await repository.deletePostLike(postId, userId);

        if (response.rowCount) {
            return helper.noContentResponse(res);
        }

        return helper.badRequest(res);


    } catch (error) {
        return helper.serverError(res, error);
    }
}

async function getLikesUsers(req, res) {


    const postId = res.locals.postId;

    try {

        const response = await repository.selectLikesUsers(postId);

        if (response.rowCount) {
            return helper.okResponseBody(res, response.rows.map(res => res.username));
        }

        return helper.badRequest(res);

    } catch (error) {
        return helper.serverError(res, error);
    }

}
async function getLikesCount(req, res) {


    const postId = res.locals.postId;

    try {

        const response = await repository.selectCountLike(postId);

        if (response.rowCount) {
            return helper.okResponseBody(res, response.rows[0].count);
        }

        return helper.badRequest(res);

    } catch (error) {
        return helper.serverError(res, error);
    }

}



export {
    postLikes,
    deleteLikes,
    getLikesUsers,
    getLikesCount
};