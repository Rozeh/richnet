//모듈 등록
const Router = require('koa-router');

//콘트롤러 등록
const goodsCtrl = require('./goods.ctrl');

//인스턴스 생성
const goods = new Router();

goods.get('/', ctx => {
  ctx.body = "상품 데이터 등록 완료"
});

module.exports = goods;
