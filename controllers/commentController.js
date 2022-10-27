import { STATUS_CODE } from "../enums/statusCode.Enum.js";
import {commentsRepository as repo} from "../repositories/commentsRepository.js";

export async function postcommentController(req,res){
    const postid = parseInt(req.params.postid);
    if(isNaN(postid)){
        res.sendStatus(STATUS_CODE.BAD_REQUEST);
        return;
    }
    const user = parseInt(res.locals.user[0].id);
    const comment = req.body.comment;
    try {
        await repo.postComment(user,comment);
        let commentId = await repo.getCommentId();
        commentId = commentId.rows[0].id;
        await repo.postCommentPosts(commentId,postid);
        res.sendStatus(STATUS_CODE.CREATED);
    } catch (error) {
        console.log(error)
        res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }
}

export async function getcommentController(req,res){
    return null;
}