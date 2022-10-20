import db from "../database/database.js";

async function selectPost(postId) {

  return db.query(`
                      SELECT
                      *
                    FROM
                      posts
                    WHERE
                      id = $1;`, [postId]);

}

async function insertPostLike(postId, userId) {

  return db.query(`INSERT INTO
                  "likesUsers"("postId", "userId")
                  VALUES
                  ($1, $2);`,
                  [postId, userId]);

}

export { selectPost, insertPostLike };