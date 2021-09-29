/// <reference path="../typing.d.ts" />


import { getWordsList } from './apis/dictionary';

class Store {
    data: any[] = [];

    async setData () {
        const { data } = await getWordsList({});
        this.data = data;
    };

    getData () {
        return this.data
    }
}

window.dataSource = new Store();

window.test = function () {
    setTimeout(() => {
        console.log(`window.dataSource`, window.dataSource.getData())
    }, 1000);
}