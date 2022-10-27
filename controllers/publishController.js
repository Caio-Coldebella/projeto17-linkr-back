import publishRepository from "../repositories/publishRepository.js";
import { findHashtagByName, createPostWithaHashtag, createNewHashtag } from "../repositories/hashtagRepository.js";


function filterTopics(string){
  const topicList = string.split(" ").filter((tag) => tag[0] === "#" && tag.length>1)
  .map((tag) => tag.slice(1));
  return topicList.filter((tag, index) => topicList.indexOf(tag) === index);
}
export async function postPublish(req, res) {
  const { url, complement } = req.body;
  const userId = res.locals.user[0].id;
  let topics = [];
  if(complement) {
    topics = filterTopics(complement);
  }
  try {

    const validationURL =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
    if (!url.match(validationURL)) {
      return res.status(422).send("URL invalida!");
    }
    const publishConfirm = await publishRepository.postPublishPostByUserId(userId, url, complement);
    const postId = (await publishRepository.getPublish()).rows[0].id;
    if(topics.length>0) {
      await topics.forEach(async (topic)=> {
        let topicId = await findHashtagByName(topic);
        if(topicId?.length === 0){
          topicId = await createNewHashtag(topic);
        }
        await createPostWithaHashtag(postId,topicId[0].id) 
      });
    }
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getPublish(req, res) {
  const user = res.locals.user;
  try {
    const posts = await publishRepository.getPublish();
    res.send({ posts: posts.rows, user: user });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getPublishById(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.sendStatus(STATUS_CODE.BAD_REQUEST)
    return;
  }
  try {
    const posts = await publishRepository.getPublishById(id);
    res.send(posts.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function updatePublish(req, res) {

}
