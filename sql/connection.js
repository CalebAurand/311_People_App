// sql/connection.js file

//import mysql
const mysql = require('mysql');
//import the dotenv package for usage
require('dotenv').config();

//store in variables for multiple use if needed
const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;



class Connection {
  constructor() {
    if (!this.pool){
      console.log('creating connection pool...');
      this.pool = mysql.createPool({ //create the connection using the createPool mysql method
      connectionLimit: 100,
      host: host, //where to connect to the database
      user: user, //the user that has permission to access the database
      password: password, //the credentials for that user
      database: database //the database this connection should be made for
    })
    //return the newly made connection
    return this.pool;
    };
    //or return the existing connection
    return this.pool;
  };
};

//assign the new connection to a variable named instance
const instance = new Connection();

//export instance for use elsewhere in the app/files
module.exports = instance;