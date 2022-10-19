import publishRepository from "../repositories/publishRepository.js";

async function postPublish(req, res) {
  const { url, complement } = req.body;
  const userId = res.locals.user[0].id;
  try {
    const validationURL =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
    if (!url.match(validationURL)) {
      return res.status(422).send("URL invalida!");
    }
    await publishRepository.postPublishPostByUserId(userId, url, complement);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export { postPublish };
