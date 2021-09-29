'use strict';


module.exports = {
  // 在执行数据库升级时调用的函数，创建 dictionary 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('dictionary', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      words: STRING(30),
      explain: STRING(2000),
      position: STRING(300),
      mark: STRING(300),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 dictionary 表
  down: async queryInterface => {
    await queryInterface.dropTable('dictionary');
  },
};
