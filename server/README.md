# egg1



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 初始化数据库和 Migrations
**（以下动作已经完成， 不需要再次操作）**
- `.sequelizerc` 为配置文件
- 初始化配置文件夹
```
npx sequelize init:config
npx sequelize init:migrations
npx sequelize init:seeders
```
- 创建user表
```
npx sequelize migration:generate --name=init-users
```
- 填充表
```
npx sequelize seed:generate --name=userSeeder
npx sequelize db:seed:all
```
- 初始化模型
```
npx sequelize model:generate --name User --attributes name:string
```
**新项目需要执行的动作**
```
npm run db:migrate
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org