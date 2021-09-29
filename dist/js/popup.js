/*
 * @Description:
 * @Author: snow.wu
 * @Date: 2020-11-20 11:57:22
 * @LastEditors: snow.wu
 * @LastEditTime: 2020-11-20 15:54:19
 */


// popup.js

const host = 'http://localhost:7003';

// 获取列表
function getList() {
  fetch(`${host}/api/readlog`)
    .then(function (response) {
      var result = response.json();
      return result;
    })
    .then(function (resData) {
      const { code, data } = resData;
      const { list } = data;
      console.log('list', list)
      if (code === 'success') {
        $("#container").html(`<div class="line">
        ${
          (list || []).map(item => {
            return `<div><span class="text">${item.text}</span><span class="time">${item.creatTime}</span><a class="del" item-id=${item.id}>删除</a><a class="top" item-id=${item.id}>置顶</a></div>`
          }).join(' ')
          }
      </div>`)
      }
    });

}

// 删除单条 
function deleteItem(id) {
  return fetch(`${host}/api/dellog`, {
    body: JSON.stringify({ id }), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  }).then(response => response.json()) // parses response to JSON
}

// 置顶单条
function toTheTop(id) {
  return fetch(`${host}/api/updateModifyTime`, {
    body: JSON.stringify({ id }), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  }).then(response => response.json()) // parses response to JSON
}

/** 点击删除 */
$('#container').delegate('.del', 'click', function (e) {
  // console.log('e.target', e.target, $(e.target).attr("item-id"))
  const itemId = $(e.target).attr("item-id");
  console.log('itemId', itemId)
  deleteItem(itemId).then(getList)
});

/** 点击置顶 */
$('#container').delegate('.top', 'click', function (e) {
  // console.log('e.target', e.target, $(e.target).attr("item-id"))
  const itemId = $(e.target).attr("item-id");
  console.log('itemId', itemId)
  toTheTop(itemId).then(getList)
});


// http://localhost:7003/api/readlog

getList();

alert(1);



