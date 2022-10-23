import { findHashtag, findHashtagByName, findPostWithHashtag } from "../repositories/hashtagRepository.js";

export async function findHashtagController(req, res){
    try {
        const listHashtags = await findHashtag();

        return res.status(200).send(listHashtags);
        
    } catch (error) {
        return res.status(500).send(error)
    }
}

export async function findHashtagIdController(req,res){
    const {hashtag} = req.params;

    try {
        
        const checkHashtag = await findHashtagByName(hashtag);
        
        if(checkHashtag.length < 1){
            return res.sendStatus(404);
        }

        const postsList = await findPostWithHashtag(checkHashtag[0].id);

        return res.status(200).send(postsList);

    } catch (error) {
        return res.sendStatus(500);
    }
}

