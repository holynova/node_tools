import pLimit from "p-limit";
import PQueue from "p-queue";
import pQueue from "p-queue";
const log = console.log.bind(console);
const start = new Date();

const delay = (ms = 1000) => {
  return new Promise((resolve) => {
    // console.time(`delay${ms}}`);
    log(`${ms} delay start ${Date.now() - start}`);
    setTimeout(() => {
      // log(`delay ${ms} done`);
      log(`${ms} delay end ${Date.now() - start}`);
      resolve();
      // console.timeEnd(`delay${ms}`);
    }, ms);
  });
};

function test() {
  const limit = pLimit(3);
  // let arr = [1, 2, 3, 4, 5, 6];
  let arr = [1, 1, 1, 1, 1, 1];
  // let withoutLimit = arr.map((i) => {
  //   // return () => delay(i * 1000);
  //   return delay(i * 1000);
  // });
  let withLimit = arr.map((i) => {
    return limit(() => delay(i * 1000));
  });

  Promise.all(withLimit);
  // Promise.all(withoutLimit.map((f) => f()));
}

function test2() {
  let queue = new PQueue({ concurrency: 5 });
  let arr = [1, 1, 1, 1, 1, 1];

  let functionList = arr.map((i) => {
    return () => delay(i * 1000);
  });
  queue.addAll(functionList);
  queue.pause();
  queue.onEmpty().then(() => log("empty"));
  queue.onSizeLessThan(3).then(() => log("< 3"));
  queue.start();
}

test2();
