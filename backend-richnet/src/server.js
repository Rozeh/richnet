//환경 설정 불러오기
require('dotenv').config();
//모듈 등록
const Koa = require('koa');
const Router = require('koa-router');

//환경설정 오브젝트 변수 선언
const {
  PORT: port,
  MONGO_URI: mongoURI
} = process.env

//로컬 모듈 등록
const db = require('./db');
const api = require('./api');

//인스턴스 생성
const app = new Koa();
const router = new Router();

//몽고db 연결
db.connect();

//koa라우트 메서드 등록
app.use(router.routes()).use(router.allowedMethods);

router.use('/api', api.routes());
router.get('/', ctx => {
  ctx.body = "start Rich.net"
});

app.listen('4000', () => {
  console.log('Rich.net Server on port 4000');
});
