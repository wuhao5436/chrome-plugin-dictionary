/// <reference path="../typing.d.ts" />


import { getWordsList } from './apis/dictionary';

class Store {
    data: any[] = [];

    async setData () {
        const { data } = await getWordsList({});
        console.log(`background data`, data)
        this.data = data;
    };

    getData () {
        return this.data
    }

    public async updateData () {
        const { data } = await getWordsList({});
        this.data = data;
    }
}

window.dataSource = new Store();

window.dataSource.setData();

window.test = function () {
    setTimeout(() => {
        console.log(`window.dataSource`, window.dataSource.getData())
    }, 1000);
}