import { findHashtag, findHashtagId } from '../repositories/hashtagRepository.js';

async function findHashtagController(req, res){
    try {
        const {rows: hashtagId} = await findHashtag();

        return res.status(200).send(hashtagId);
        
    } catch (error) {
        return res.status(500).send(error)
    }
}

async function findHashtagIdController(req,res){
    const {id} = req.params;

    try {
        
        const checkHashtag = await findHashtagId();
        
        if(checkHashtag.rowCount === 0){
            return res.sendStatus(404);
        }

    } catch (error) {
        return res.sendStatus(500);
    }
}

export { findHashtagController, findHashtagIdController }
