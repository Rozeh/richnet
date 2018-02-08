const Goods = require('db/models/Goods');

exports.create = async (ctx) => {
  // request.body 에서 값을 추출함
  const {
    title,
    publishedDate,
    price,
    tags
  } = ctx.request.body;

  // 인스턴스 생성
  const goods = new Goods({
    title,
    publishedDate,
    price,
    tags
  });

  // save()로 데이터베이스에 저장
  try {
    await goods.save();

  }catch(e){
    return ctx.throw(500, e);
  }

  //저장한 결과 보기
  ctx.body = goods;
};

exports.list = async (ctx) => {
  //리스트 담을 변수 선언
  let goods;

  try {
    // 데이터 조회
    // .exec()메서드가 있어야 데이터베이스에 실제로 요청
    // 반환값은 Promise이므로 await사용 가능
    goods = await Goods.find().exec();
  }catch(e){
    return ctx.throw(500, e);
  }

  ctx.body = goods;
}

exports.get = async (ctx) => {
  const { id } = ctx.params;

  let goods;

  try {
    goods = await Goods.findById(id).exec();
  } catch(e){
    if(e.name === 'CastError') {
      ctx.status = 400;
      return;
    }
    return ctx.throw(500, e);
  }

  if(!goods) {
    ctx.status = 404;
    ctx.body = { message: 'Goods not found' };
    return;
  }
  ctx.body = goods;
};

exports.delete = async (ctx) => {
  const { id } = ctx.params;

  try {
    await Goods.findByIdAndRemove(id).exec();
  } catch (e) {
    if(e.name === 'CastErorr') {
      ctx.status = 400;
      return;
    }
  }
  ctx.status = 204;

};

exports.update = async (ctx) => {
  const{ id } = ctx.params;

  let goods;

  try {
    goods = await Goods.findByIdAndUpdate(id, ctx.request.body, {
      new: true
    });
  }catch (e) {
    return ctx.throw(500, e);
  }
  ctx.body = goods;
}


