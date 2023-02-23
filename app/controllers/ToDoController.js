"use strict";
const toDOService = require("../services/ToDoService");
const response = require("../utils/responses")


exports.createTask =async(req, res)=>{
    const{
         error,
         data,
         statusCode
         } = await toDOService.createTask(req.body);

         if(error) return response.error(res, error, statusCode);

         return response.success(res, data, statusCode);
};

exports.fetchTasks =async(req, res)=>{
    const{
         error,
         data,
         statusCode
         }= await toDOService.fetchTasks(req.query);

         if(error) return response.error(res, error, statusCode);

         return response.success(res, data, statusCode)
}

exports.getTask=async(req, res)=>{
    const{
        error,
        data,
        statusCode
        } = await toDOService.getTask(req.params.taskId);

        if(error)return response.error(res, error, statusCode);

        return response.success(res, data, statusCode)
};
exports.deleteTask=async(req, res)=>{
    const{
        error,
        data,
        statusCode
        } = await toDOService.deleteTask(req.params.taskId);

        if(error)return response.error(res, error, statusCode);

        return response.success(res, data, statusCode)
};

exports.updateTask=async(req, res)=>{
    const{
         error,
         data,
         statusCode
        } =await toDOService.updateTask(req.body, req.params.taskId);

        if(error) return response.error(res, error, statusCode);

        return response.success(res, data, statusCode)
};

