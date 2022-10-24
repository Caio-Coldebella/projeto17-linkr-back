import db from "../database/database.js";
import { TABLES_NAMES } from '../enums/tableNames.Enum.js'

async function selectPost(postId) {

  return db.query(`SELECT
                        *
                      FROM
                        ${TABLES_NAMES.POSTS}
                      WHERE
                        id = $1;`, [postId]);

}

async function updatePost(postId, userId, content) {

  return db.query(`UPDATE
                      ${TABLES_NAMES.POSTS}
                    SET content = $1
                    WHERE
                    id=$2 AND "userId"= $3;`,
                  [content, postId, userId]);

}

export {
  selectPost,
  updatePost
}