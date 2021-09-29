'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dictionary', [{
      words: 'egg',
      explain: '美/eɡ/英/eɡ/ \n n.卵子, 卵细胞, （鸟类的）蛋, （鱼、昆虫等的）卵\n v.煽动, 用蛋制作(食物), 向人扔鸡蛋',
      position: 'https://www.jianshu.com/p/cd5724405f56',
      created_at: '2021-09-24 11:11:23',
      updated_at: '2021-09-27 05:44:50',
    }, {
      words: 'blog',
      explain: `美 /blɒɡ/,英 /blɒɡ/
      n. 【网】博客
      v. 【网】在博客上发布文章
      网络:  部落格, 日志, 网志`,
      position: 'https://developer.mozilla.org/zh-CN/',
      mark: '读书使我快乐',
      created_at: '2021-09-25 12:21:33',
      updated_at: '2021-09-26 06:32:45',
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('dictionary', null, {});
  },
};
