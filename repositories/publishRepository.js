import db from "../database/database.js";

async function postPublishPostByUserId(userId, link, content) {
  return db.query(
    'INSERT INTO posts ("userId", content, link) VALUES ($1, $2, $3)',
    [userId, content, link]
  );
}

async function getPublish(){
  return db.query('SELECT posts.content, posts.link, users.username,users."pictureUrl" FROM posts JOIN users ON posts."userId"=users.id');
}

const publishRepository = { postPublishPostByUserId, getPublish} ;
export default publishRepository;
