'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: '张三',
      email: 'abc@qq.com',
      phone: '18888888888',
      username: 'zhangsan',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: '李四',
      email: '123@qq.com',
      phone: '18288888888',
      username: 'lisi',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
