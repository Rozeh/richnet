//모듈 등록
const Router = require('koa-router');

//로컬 모듈 등록
const versions = {
  '1.0': require('./v1.0')
};

//인스턴스 생성
const api = new Router();

//로컬 모듈 오브젝트형태 라우터 생성
api.use('/v1.0', versions['1.0'].routes());

module.exports = api;

