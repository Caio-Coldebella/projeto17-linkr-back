import db from "../database/database.js";
import { TABLES_NAMES } from '../enums/tableNames.Enum.js'
async function selectPost(postId) {

  return db.query(`
                      SELECT
                      *
                    FROM
                      ${TABLES_NAMES.POSTS}
                    WHERE
                      id = $1;`, [postId]);

}

async function insertPostLike(postId, userId) {

  return db.query(`INSERT INTO
                  "${TABLES_NAMES.LIKES_USERS}"("postId", "userId")
                  VALUES
                  ($1, $2);`,
    [postId, userId]);

}

async function deletePostLike(postId, userId) {

  return db.query(`DELETE FROM
                    "likesUsers"
                  WHERE
                    "postId" = $1
                    AND "userId" = $2;`,
                    [postId, userId]);

}


export {
  selectPost,
  insertPostLike,
  deletePostLike
};