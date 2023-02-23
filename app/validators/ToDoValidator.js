"use strict";
const Joi = require("joi");
const{validate} = require("../utils/helpers")



exports.createTask =async(body)=>{

 let schema ={
 label:Joi.string(),
 completed:Joi.boolean().default(false). required(),
 }
 return validate(schema, body)
}