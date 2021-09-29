module.exports.wrapperSuccess = data => {
  return {
    code: 'success',
    message: '操作成功',
    data,
  };
};

module.exports.wrapperFail = err => {
  return {
    code: 'fail',
    message: '操作失败' + JSON.stringify(err),
    data: null,
  };
};

/** 校验必填参数 */

module.exports.checkRequiredParams = (requires, paramsObj) => {
  if (requires && Array.isArray(requires)) {
    requires.forEach(key => {
      if (paramsObj[key] === undefined) {
        throw `${key}参数不存在`;
      }
    });
  }
  return true;
};
