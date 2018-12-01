const db = require('./../../database/index.js');
const axios = require('axios');

const credentials = require('./../../../config.js');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const moment = require('moment');
const saltRounds = 6;
const request = require('request')

db.connect();

module.exports = {
  orders: {
    create: (params, callback) =>{
      
    },
    retrieve: ()=>{

    }
  }
}