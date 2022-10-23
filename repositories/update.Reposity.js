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

export { selectPost }