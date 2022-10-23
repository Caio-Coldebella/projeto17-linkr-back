import joi from "joi";

const publishSchema = joi.object({
    url: joi.string().required(),
    complement: joi.string().allow(null, '')
});

export default publishSchema;