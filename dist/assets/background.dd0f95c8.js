var t=Object.defineProperty,a=(a,o,e)=>(((a,o,e)=>{o in a?t(a,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[o]=e})(a,"symbol"!=typeof o?o+"":o,e),e);import"./modulepreload-polyfill.b7f2da20.js";import{e as o}from"./vendor.c617aad4.js";const e=t=>{const a="production";return console.log("env",a),"http://localhost:7001"+t},n=o({headers:{"content-type":"application/json","Accept-content":"application/json"}});async function s(t){return await n("/api/dictionary/words/get")}n.interceptors.request.use(((t,a)=>({url:`${e(t)}`,options:a})));window.dataSource=new class{constructor(){a(this,"data",[])}async setData(){const{data:t}=await s();console.log("background data",t),this.data=t}getData(){return this.data}async updateData(){const{data:t}=await s();this.data=t}},window.dataSource.setData(),window.test=function(){setTimeout((()=>{console.log("window.dataSource",window.dataSource.getData())}),1e3)};
