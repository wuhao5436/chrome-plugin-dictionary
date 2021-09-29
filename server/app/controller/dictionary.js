/*
 * @Description:
 * @Author: snow.wu
 * @Date: 2020-11-20 11:14:03
 * @LastEditors: snow.wu
 * @LastEditTime: 2020-11-20 17:59:52
 */
'use strict';

const Controller = require('egg').Controller;
const tool = require('../utils/tool');

class DictionaryController extends Controller {

  async get() {
    const { ctx } = this;
    const req = ctx.request.body;
    console.log('ctx.request.body', req);
    const res = await this.service.dictionary.get(req);
    console.log('res', res);
    ctx.body = tool.wrapperSuccess(res);
    ctx.status = 200;
  }

  async set() {
    try {
      const { ctx } = this;
      const req = ctx.request.body;
      console.log('ctx.request.body', req);
      const res0 = await this.service.dictionary.traslate('hello');
      console.log('res0', res0);
      tool.checkRequiredParams([ 'words', 'explain', 'position' ], req);
      const res = await this.service.dictionary.set(req);
      this.ctx.body = tool.wrapperSuccess(res);
      this.ctx.status = 200;
    } catch (error) {
      console.log('error', error);
      this.ctx.body = tool.wrapperFail(error);
      this.ctx.status = 200;
    }
  }

  async delete() {
    const res = await this.service.dictionary.delete();
    this.ctx.body = res;
    this.ctx.status = 200;
  }

  async upate() {
    const { ctx } = this;
    const req = ctx.request.body;
    const res = await this.service.dictionary.upate(req);
    this.ctx.body = res;
    this.ctx.status = 200;
  }
}

module.exports = DictionaryController;
