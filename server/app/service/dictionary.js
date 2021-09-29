'use strict';

const Service = require('egg').Service;
const request = require('request');
const { v4: uuidv4 } = require('uuid');


class DictionaryService extends Service {
  async set(data) {
    const result = await this.app.mysql.insert('dictionary', {
      created_at: this.app.mysql.literals.now,
      updated_at: this.app.mysql.literals.now,
      ...data,
    });
    if (result.affectedRows === 1) {
      return {};
    }
  }

  async traslate(word) {
    const endpoint = 'https://docs.microsoft.com/azure/cognitive-services/translator/reference/v3-0-translate';
    const options = {
      method: 'POST',
      baseUrl: endpoint,
      url: 'translate',
      qs: {
        'api-version': '3.0',
        to: [ 'de', 'it' ],
      },
      headers: {
        'Ocp-Apim-Subscription-Key': 'subscriptionKey',
        'Ocp-Apim-Subscription-Region': 'region',
        'Content-type': 'application/json; charset=UTF-8',
        'X-ClientTraceId': uuidv4().toString(),
      },
      body: [{
        text: word,
      }],
      json: true,
    };

    return await request(options);
  }

  async get(data) {
    const result = await this.app.mysql.select('dictionary',
      {
        columns: [ 'id', 'words', 'explain', 'position', 'mark', 'updated_at' ],
        orders: [[ 'updated_at', 'desc' ]],
      }
    );
    (result || []).map(item => {
      item.updated_at = this.ctx.helper.formateTime(item.updated_at);
    });
    return result;
  }
  async delete(data) {
    try {
      const row = {
        id: data.id,
        disabled: '1',
        disableddate: this.app.mysql.literals.now,
      };
      const result = await this.app.mysql.update('dictionary', row);
      console.log('result', result);
      if (result.affectedRows === 1) {
        return {
          code: 'success',
          message: '操作成功',
        };
      }
    } catch (error) {
      console.log('error', error);
      return {
        code: 'fail',
        message: '操作失败',
      };
    }
  }
  async update(data) {
    try {
      const row = {
        id: data.id,
        modifydate: this.app.mysql.literals.now,
      };
      const result = await this.app.mysql.update('dictionary', row);
      if (result.affectedRows === 1) {
        return {
          code: 'success',
          message: '操作成功',
        };
      }
    } catch (error) {
      console.log('error', error);
      return {
        code: 'fail',
        message: '操作失败',
      };
    }
  }

}

module.exports = DictionaryService;
