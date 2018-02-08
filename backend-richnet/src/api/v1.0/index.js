//모듈 등록
const Router = require('koa-router');

//로컬 모듈 등록
const auth = require('./auth');
const goods = require('./goods');

//인스턴스 생성
const api = new Router();

//로컬 모듈 라우터 생성
api.use('/auth', auth.routes());
api.use('/goods', goods.routes());

module.exports = api;
