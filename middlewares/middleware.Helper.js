import { STATUS_CODE } from '../enums/statusCode.Enum.js';


function notImplemented(res) {

    //const { id } = res.locals.user;
    return res.sendStatus(STATUS_CODE.NOT_IMPLEMENTED);
}

export { notImplemented };
