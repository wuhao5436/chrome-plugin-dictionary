/*
 * @Description:
 * @Author: snow.wu
 * @Date: 2020-11-20 11:14:03
 * @LastEditors: snow.wu
 * @LastEditTime: 2020-11-20 11:19:51
 */
/* eslint valid-jsdoc: "off" */

'use strict';

const CONSTANT = require('./constant');


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '1111111';

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your middleware config here
  config.middleware = [];

  // view
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // news
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.sequelize = {
    dialect: 'mysql',
    host: CONSTANT.DB_HOST,
    port: CONSTANT.DB_PORT,
    database: CONSTANT.DB_NAME,
    password: CONSTANT.DB_PASSWORD,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // const sequelize = {
  //   dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  //   database: 'test',
  //   host: 'localhost',
  //   port: 3306,
  //   username: 'loger',
  //   password: 'loger9966',
  //   // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
  //   // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
  //   // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
  //   // more sequelize options
  // };

  const mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: CONSTANT.DB_HOST,
      // 端口号
      port: CONSTANT.DB_PORT,
      // 用户名
      user: CONSTANT.DB_USER,
      // 密码
      password: CONSTANT.DB_PASSWORD,
      // 数据库名
      database: CONSTANT.DB_NAME,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,

  };

  return {
    ...config,
    ...userConfig,
    // sequelize,
    mysql,
  };
};
