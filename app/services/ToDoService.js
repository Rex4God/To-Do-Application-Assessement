"use strict"
const toDoValidator = require("../validators/ToDoValidator");
const toDoRepository = require("../repositories/ToDoRepository")
const{StatusCodes}= require("http-status-codes")


exports.createTask =async(body)=>{
 try{
    const validatorError = await toDoValidator.createTask(body);
    if(validatorError) return{
        error: validatorError,
        statusCode:StatusCodes.UNPROCESSABLE_ENTITY
    }
    
    const task = await toDoRepository.create(body)

    return{
        data: task.id,
        statusCode: StatusCodes.CREATED
    }

 }catch(e){
    console.log("Error occurred while trying to create a task", e)
    return{
        error:e.message,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR
    };
 }
};

exports.getTask = async(taskId)=>{

    const task = toDoRepository.findById(taskId);

    if(!task)return{
        error: "This task is not found in the database",
        statusCode: StatusCodes.NOT_FOUND
    };
    return{
        data:taskId,
        statusCode:StatusCodes.OK
    };

};

exports.fetchTasks = async (query) => {

    const tasks = await toDoRepository.findAll(query);

    return {
        data: tasks,
        statusCode:StatusCodes.OK
    };
};

exports.updateTask=async(body,taskId)=>{
    try{
       
       let task = await toDoRepository.findOne({id: taskId})
    
       if(!task)return{
        error:"Oops! This task details could not be found on this platform",
        statusCode: StatusCodes.NOT_FOUND
       };
       const update ={
         label:body.label || task.label,
         completed: body.completed ||task.completed,
         createdAt:body.createdAt || task.createdAt,
         updatedAt:body.updatedAt || task.updatedAt
         }
    await toDoRepository.update({id: taskId},update);
    
    return{
     data: taskId,
     statusCode: StatusCodes.ACCEPTED
    }
    
    
    }catch(e){
    console.log("Error occurred while trying to update task", e);
    
    return{
        error: e.message,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR
      };
     }
    };

    exports.deleteTask =async(taskId)=>{

        let task = await toDoRepository.findOne({id:taskId})
    
        if(!task) return{
         error: "Oop! This task details could not found non this platform, hence it cannot be deleted",
         statusCode: StatusCodes.NOT_FOUND
        };
    
        await toDoRepository.destroy({id:taskId});
        return{
            data: taskId,
            statusCode: StatusCodes.OK
        };
    };
