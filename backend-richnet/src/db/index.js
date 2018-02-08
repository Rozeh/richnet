//전역 환경 설정 불러오기
const {
  MONGO_URI: mongoURI
} = process.env;

//모듈 등록
const mongoose = require('mongoose');

//데이터베이스 연결 모듈 만들기
module.exports = ( () => {
  //몽구스 프라미스 오브젝트에 글로벌 프라미스 대입
  mongoose.Promise = global.Promise;
  
  //커넥트 메서드 설정
  return { 
    connect(){
      return mongoose.connect(mongoURI).then(
        () => {
          console.log("몽고 데이터베이스 연결 성공");
        }
      ).catch( e => {
        console.error(e);
      });
    },
    disconnect(){
      return mongoose.disconnect();
    }
  }
})();

