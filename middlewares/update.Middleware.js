import * as helper from './middleware.Helper.js';
import * as repository from '../repositories/update.Reposity.js';



async function validPost(req, res, next) {

    const { id } = req.params;
    const { content, userId } = req.body;

    try {

        if (!content || !userId) {
            helper.badRequest(res);
        }



        const confirmPost = await repository.selectPost(id);

        if (!confirmPost.rowCount) {
            helper.notFound(res);
        }


        res.locals.edit = { id, userId, content };
        next();
    } catch (error) {
        return helper.serverError(res, error);
    }
}

export { validPost };