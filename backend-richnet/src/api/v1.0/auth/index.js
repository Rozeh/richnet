//모듈 등록
const Router = require('koa-router');

//콘트롤러 등록
const authCtrl = require('./auth.ctrl');

//인스턴스 생성
const auth = new Router();

auth.get('/', ctx => {
  ctx.body = '인증 라우터 생성 완료';
});
auth.get('/exists/email/:email', authCtrl.checkEmail);
// auth.get('/exists/display-name/', authCtrl.checkDisplayName);
// auth.get('/exists/display-name/:displayName', authCtrl.checkDisplayName);
auth.post('/register/local', authCtrl.localRegister);
auth.post('/login/local', authCtrl.localLogin);
auth.get('/check', authCtrl.check);
auth.post('/logout', authCtrl.logout);

module.exports = auth;
