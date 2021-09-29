/*
 * @Description: 
 * @Author: snow.wu
 * @Date: 2020-11-20 11:44:13
 * @LastEditors: snow.wu
 * @LastEditTime: 2020-11-20 17:22:21
 */



window.onload = function () {
  const lineItemArr = $('.itemLine');
  const img = lineItemArr.find('img')[0];
  const phone = lineItemArr.find('.phone').text();
  const title = lineItemArr.find('.title').text();
  const description = lineItemArr.find('.description').text();
  const perObj = { img, phone, title, description };
  console.log('perObj', perObj);
}