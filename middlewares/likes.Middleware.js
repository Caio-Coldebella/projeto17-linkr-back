import * as helper from './middleware.Helper.js';
import * as repository  from '../repositories/likes.Repository.js'



async function likes(req, res, next) {

    const{postId} = req.params;
    
    
    try {
        
        const confirmPost = await repository.selectPost(postId);

        if(!confirmPost.rowCount){
            helper.notFound(res);
        }

        next();
    } catch (error) {
        return helper.serverError(res, error);
    }
    

}

export { likes };