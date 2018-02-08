//모듈 등록
const Router = require('koa-router');

//콘트롤러 등록
const goodsCtrl = require('./goods.ctrl');

//인스턴스 생성
const goods = new Router();

goods.post('/', goodsCtrl.create);
goods.get('/', goodsCtrl.list);
goods.get('/:id', goodsCtrl.get);
goods.delete('/:id', goodsCtrl.delete);
goods.patch('/:id', goodsCtrl.update);

module.exports = goods;
