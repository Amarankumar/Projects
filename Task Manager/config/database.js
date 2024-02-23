const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize=new Sequelize({
    dialect:'mysql',
    host:process.env.HOST,
    port:process.env.PORT,
    username:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});

sequelize.authenticate()
.then(() =>{
    console.log('Database Connected Successfully');
}).catch((err) =>{
    console.log("Database Connection Error");
});

const db={}
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.task=require('../models/task_model')(sequelize,DataTypes)
db.user=require('../models/user_model')(sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(() =>{
    console.log('yes re-sync done')
});

module.exports=db;