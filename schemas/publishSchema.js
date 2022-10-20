import joi from "joi";

const publishSchema = joi.object({
    url: joi.string().required(),
    complement: joi.string()
});

export default publishSchema;