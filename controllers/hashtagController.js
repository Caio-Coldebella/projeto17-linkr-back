import { findHashtag, findHashtagByName, findPostWithHashtag } from "../repositories/hashtagRepository.js";

export async function findHashtagController(req, res) {
    try {
        const listHashtags = await findHashtag();
        res.send(listHashtags);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function findHashtagIdController(req, res) {
    const { hashtag } = req.params;

    try {
        const checkHashtag = await findHashtagByName(hashtag);
        if (checkHashtag.length < 1) {
            res.sendStatus(404);
        }

        const postsList = await findPostWithHashtag(checkHashtag[0].id);

        res.status(200).send(postsList);

    } catch (error) {
        res.sendStatus(500);
    }
}
