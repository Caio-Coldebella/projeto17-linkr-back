import db from "../database/database.js";

async function postPublishPostByUserId(userId, link, content, idtable) {
  return db.query(
    'INSERT INTO posts ("userId", content, link, "idLikes") VALUES ($1, $2, $3, $4)',
    [userId, content, link, idtable]
  );
}
async function createTableLikes(){
  return db.query('INSERT INTO likes ("numLikes") VALUES (0)');
}
async function idTable(){
  const cnt = await db.query('SELECT COUNT(id) as cnt FROM likes');
  return parseInt(cnt.rows[0].cnt);
}

const publishRepository = { postPublishPostByUserId , createTableLikes, idTable} ;
export default publishRepository;
