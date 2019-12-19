/* eslint consistent-return:0 import/order:0 */

const express = require('express');

const setupApi = require('./middlewares/api');
const app = express();

setupApi(app);

export default app;
