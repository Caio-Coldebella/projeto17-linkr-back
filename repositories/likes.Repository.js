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
                    "${TABLES_NAMES.LIKES_USERS}"
                  WHERE
                    "postId" = $1
                    AND "userId" = $2;`,
    [postId, userId]);

}

async function selectLikeMe(postId, userId) {

  return db.query(`SELECT * FROM
                   "${TABLES_NAMES.LIKES_USERS}"
                  WHERE
                    "postId" = $1 AND "userId" = $2
                  limit 1;`,
                  [postId, userId]);

}

async function selectLikesUsers(postId) {

  return db.query(`SELECT
                    ${TABLES_NAMES.USERS}.username
                  from
                    users
                    INNER JOIN "likesUsers" as lu ON  lu."userId" = users.id
                  WHERE
                    lu."postId" = $1;`, [postId]);

}

async function selectCountLike(postId) {

  return db.query(`SELECT
                     COUNT(lu.id)
                   FROM
                     "likesUsers" as lu
                   WHERE
                     lu."postId" = $1;`, [postId]);

}


export {
  selectPost,
  insertPostLike,
  deletePostLike,
  selectLikeMe,
  selectLikesUsers,
  selectCountLike
};