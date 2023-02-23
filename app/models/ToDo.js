const { DataTypes, Sequelize, DATE} = require("sequelize");
const sequelize = require("../database/db");

const  ToDo = sequelize.define("ToDo",{

 id:{
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true

    },
label:{
    type:Sequelize.STRING,


    },
    completed:{
        type:Sequelize.BOOLEAN,
        defaultValue: false    
    },
    createdAt:{
        type:DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    updatedAt:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
    
})

module.exports =ToDo