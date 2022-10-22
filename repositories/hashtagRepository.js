import Sqlstrng from 'sqlstring';

import {connectDataBase} from '../database/database.js';

export async function findHashtag() {
    const find = connectDataBase.query(`SELECT * FROM topicsPosts;`); 
    return find;
}

export async function findHashtagId(){
    return connectDataBase.query(`SELECT *from topicsPosts WHERE id ${Sqlstrng.escape(id)}`);
}