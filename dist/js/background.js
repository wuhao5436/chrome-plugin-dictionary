/*
 * @Description: 
 * @Author: snow.wu
 * @Date: 2020-11-20 13:34:24
 * @LastEditors: snow.wu
 * @LastEditTime: 2020-11-20 17:15:31
 */



const host = 'http://localhost:7001';

chrome.contextMenus.create({
  title: '加入笔记：%s', // %s表示选中的文字
  contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
  onclick: function (params) {
    console.log('params', params, '%s');
    const { selectionText } = params;
    return fetch(`${host}/api/sublog`, {
      body: JSON.stringify({ text: selectionText }), // must match 'Content-Type' header
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
});



function test()
{
  // window.dataSource.setData();
	// // alert(JSON.stringify(window.dataSource.getData()));
  // alert(window.aa)
  alert('123')
}

