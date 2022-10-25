import * as helper from './controlers.Helper.js';
import * as repository from '../repositories/likes.Repository.js'


async function postLikes(req, res) {


    const { userId } = req.params;

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


    const { userId } = req.params;

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

async function getLikeMe(req, res) {

    const { userId } = req.params;

    const postId = res.locals.postId;

    try {

        const response = await repository.selectLikeMe(postId, userId);

        if (response.rowCount) {
            return helper.okResponseBody(res, true);
        }

        return helper.okResponseBody(res, false);


    } catch (error) {
        return helper.serverError(res, error);
    }

}

async function getLikesUsers(req, res) {


    const postId = res.locals.postId;

    try {

        const response = await repository.selectLikesUsers(postId);

        if (response.rowCount || response.rowCount === 0) {
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
    getLikeMe,
    getLikesUsers,
    getLikesCount
};