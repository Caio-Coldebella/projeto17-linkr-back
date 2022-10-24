import * as helper from './middleware.Helper.js';
import * as repository from '../repositories/update.Reposity.js';



async function validPost(req, res, next) {

    const { id } = req.params;
    const { content } = req.body;
    
    try {

        if (!content) {
            helper.badRequest(res);
        }

        const confirmPost = await repository.selectPost(id);

        if (!confirmPost.rowCount) {
            helper.notFound(res);
        }

        res.locals.id = id;
        res.locals.content = content;
        next();
    } catch (error) {
        return helper.serverError(res, error);
    }
}

export { validPost };