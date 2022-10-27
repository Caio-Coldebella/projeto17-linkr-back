import db from "../database/database.js";
import { TABLES_NAMES as TB} from "../enums/tableNames.Enum.js";

async function postComment(userid,comment){
    return db.query(`INSERT INTO ${TB.COMMENTS} ("userId","comment") VALUES ($1,$2)`,[userid,comment]);
}

async function getCommentId(){
    return db.query(`SELECT id FROM ${TB.COMMENTS} ORDER BY id DESC LIMIT 1`);
}

async function postCommentPosts(commentid,postid){
    return db.query(`INSERT INTO "${TB.COMMENTSPOSTS}" ("commentId","postId") VALUES ($1,$2)`,[commentid,postid]);
}

async function getCommentOfPost(postid){
    return db.query(`SELECT ${TB.COMMENTS}."userId", ${TB.COMMENTS}.comment FROM "${TB.COMMENTSPOSTS}" JOIN ${TB.COMMENTS} ON "${TB.COMMENTSPOSTS}"."commentId"="${TB.COMMENTS}".id WHERE "${TB.COMMENTSPOSTS}"."postId"=$1`,[postid]);
}

async function getPostExists(postid){
    return db.query(`SELECT * FROM ${TB.POSTS} WHERE id=$1`,[postid])
}

export const commentsRepository = {postComment, getCommentOfPost,getCommentId, postCommentPosts,getPostExists};