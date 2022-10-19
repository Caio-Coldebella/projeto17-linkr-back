import db from "../database/database.js";

async function postPublishPostByUserId(userId, link, content) {
  return db.query(
    "INSERT INTO posts (userId, link, content) VALUES ($1, $2, $3)",
    [userId, link, content]
  );
}

const publishRepository = { postPublishPostByUserId } ;
export default publishRepository;
