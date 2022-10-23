import Sqlstrng from 'sqlstring';

import connectDatabase from '../database/database.js';

export async function findHashtag() {
    const find = connectDatabase.query(`SELECT * FROM topicsPosts;`); 
    return find;
}

export async function findHashtagId(){
    return connectDatabase.query(`SELECT *from topicsPosts WHERE id ${Sqlstrng.escape(id)}`);
}