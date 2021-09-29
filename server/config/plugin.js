/*
 * @Description:
 * @Author: snow.wu
 * @Date: 2020-11-20 11:14:03
 * @LastEditors: snow.wu
 * @LastEditTime: 2020-11-20 11:18:42
 */
'use strict';


/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // 模板
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  // mysql
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },

  // ORM
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};
