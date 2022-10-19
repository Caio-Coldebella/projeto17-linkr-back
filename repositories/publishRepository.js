import db from "../database/database.js";

async function postPublishPostByUserId(userId, link, content) {
  return db.query(
    'INSERT INTO posts ("userId", content, link) VALUES ($1, $2, $3)',
    [userId, content, link]
  );
}

const publishRepository = { postPublishPostByUserId} ;
export default publishRepository;
