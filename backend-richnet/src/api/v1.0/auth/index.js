//모듈 등록
const Router = require('koa-router');

//콘트롤러 등록
const authCtrl = require('./auth.ctrl');

//인스턴스 생성
const auth = new Router();

auth.get('/', ctx => {
  ctx.body = '인증 라우터 생성 완료';
});

module.exports = auth;
