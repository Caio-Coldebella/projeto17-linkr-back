import db from "../database/database.js";

async function selectPost(postId) {

    return db.query(`
                      SELECT
                      *
                    FROM
                      posts
                    WHERE
                      id = $1;`,[postId]);

}

export { selectPost };