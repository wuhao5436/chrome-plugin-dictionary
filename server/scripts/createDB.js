'use strict';

const mysql = require('mysql2/promise');
const CONSTANT = require('../config/constant');
const dbList = [
  'test',
];

mysql.createConnection({
  host: CONSTANT.DB_HOST,
  port: CONSTANT.DB_PORT,
  user: CONSTANT.DB_USER,
  password: CONSTANT.DB_PASSWORD,
}).then(connection => {
  const createJobs = [];
  for (let i = 0; i < dbList.length; i++) {
    const createJob = connection.query(`CREATE DATABASE IF NOT EXISTS ${dbList[i]};`);
    createJobs.push(createJob);
  }
  Promise.all(createJobs).then(res => {
    console.log('建表过程完成');
    process.exit(0);
  }).catch(err => {
    console.log('建表过程失败');
    console.log('err', err);
    process.exit(0);
  });
});
