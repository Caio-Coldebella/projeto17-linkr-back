import * as helper from './controlers.Helper.js';
import * as repository from '../repositories/update.Reposity.js';

async function updatePost(req, res) {


    const { id, userId, content } = res.locals.edit;

    try {

        const response = await repository.updatePost(id, userId, content);

        if (response.rowCount) {
            return helper.okResponse(res);
        }

        return helper.badRequest(res);


    } catch (error) {
        return helper.serverError(res, error);
    }
}

export { updatePost }