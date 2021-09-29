/*
 * @Description:
 * @Author: snow.wu
 * @Date: 2020-11-20 11:14:03
 * @LastEditors: snow.wu
 * @LastEditTime: 2020-11-20 17:59:36
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  /** 字典相关 */
  router.get('/api/dictionary/words/get', controller.dictionary.get);
  router.post('/api/dictionary/words/set', controller.dictionary.set);
  router.post('/api/dictionary/words/delete', controller.dictionary.delete);
  router.post('/api/dictionary/words/upate', controller.dictionary.upate);
};
