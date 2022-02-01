const {Sequelize, DataTypes} = require('sequelize')
require('dotenv').config({path: './config.env'})
const {DB_PORT, HOST_NAME, DB_PASSWORD} = process.env;



// const sequelize = new Sequelize(`postgresql://postgres:${DB_PASSWORD}@${HOST_NAME}:${DB_PORT}/postgres`);
const sequelize = new Sequelize(`postgresql://postgres:||@w3dev||Antar@db.dnqtnfwqzgipacrqxpgi.supabase.co:5432/postgres`,
{
    logging: false
}
);
// console.log(`postgresql://postgres:${DB_PASSWORD}@${HOST_NAME}:${DB_PORT}/postgres`)



 sequelize.authenticate().then(() =>{
    console.log('Connection has been established successfully.');
}).catch(err =>{
    
    console.error('Unable to connect to the database:', err);
    
}) /**/

// Databse Object - Module Scaffolding

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


// syncronus Database
/**/ db.sequelize
.sync({ force: false,  })
    .then(() => {
        console.log('Databse sync successfully');
    })
    .catch((err) => {
        console.log('Error is', err);
        sequelize.close();
    }); 

db.Todo = require('../models/todoModel')(sequelize, DataTypes)

module.exports = db;
