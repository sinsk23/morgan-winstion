const logger = require("./winston");

logger.info("hello world");
logger.error("hello world");
logger.warn("hello world");
logger.debug("hello world");
logger.verbose("hello world");
logger.silly("hello world");

/*
실행 테스트 
node index.js
2022-09-02 17:34:37 info: hello world
2022-09-02 17:34:37 error: hello world
2022-09-02 17:34:37 warn: hello world

*/

// 만일 메세지를 여러번 써야할 경우에는 다음과 같이 구성

// console.log('naver profile : ', profile);
// logger.info("naver profile : ", { message: profile }); // console.log와 달리 뒤에 message 객체로 써주어야 함
