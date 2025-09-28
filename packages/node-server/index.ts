import {MOCK_SERVER} from "@pinecore/common/constants/request.const";
import {SafeAny} from "@pinecore/common/models/common.model";


const express = require('express');
const app = express(); //创建一个express应用
const expressWs = require('express-ws'); //websocket连接
expressWs(app);
app.listen('1234');
app.on('listening', () => {
  console.log('http://127.0.0.1:1234 服务器创建成功！');
});

/**
 * 解决跨域
 */
const cors = require('cors');
app.use(
  cors({
    origin(origin: SafeAny, callback: SafeAny) {
      callback(null, origin);
    },
    credentials: true, //允许携带cookie
  }),
);

/**
 * 解决vue的history的问题
 */
// const history = require("connect-history-api-fallback");
// app.use(history());
// const history = require("./middle/history");
// app.use(history());

/**
 * 封装post请求的body
 */
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/**
 * api
 */
app.use('/test', require('./route/test'));
app.use(MOCK_SERVER, require('./route/mock'));  // umi-mock服务


/**
 * 静态资源
 */
const path = require('path');
const staticRoot = path.resolve(__dirname, './public');
app.use(express.static(staticRoot));


/**
 * 找不到
 */
app.use('*', (req: SafeAny, res: SafeAny) => {
  res.send('404 NOT FOUND!');
});


export {};