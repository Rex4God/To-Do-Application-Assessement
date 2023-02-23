"use strict";
const Repository = require("./BaseRepository");
const ToDoModel = require("../models/Todo");

class ToDoRepository extends Repository{
    
    constructor() {

        super(ToDoModel);
    }
}


module.exports = (new ToDoRepository());
