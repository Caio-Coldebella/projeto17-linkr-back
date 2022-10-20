import { STATUS_CODE } from '../enums/statusCode.Enum.js';


function notImplemented(res) {

    return res.sendStatus(STATUS_CODE.NOT_IMPLEMENTED);
}

function okResponse(res) {

    return res.sendStatus(STATUS_CODE.OK);

}


function serverError(res, error) {

    console.error(error);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);

}

function badRequest(res){

    return res.sendStatus(STATUS_CODE.BAD_REQUEST);

}


export { 
    notImplemented,
    okResponse,
    serverError,
    badRequest
};
