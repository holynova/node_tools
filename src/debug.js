// import debug from "debug";
const debug = require("debug");

function test() {
  const a = debug("a");
  const b = debug("b");
  const obj = {
    a: 1,
    b: 2,
    c: { ca: 1, cb: 2, c3: [1, 2, 3] },
  };
  // const debugA = debug("a");
  console.log("aaa");
  a("hello %o", obj);
  b("world");
  function sort() {}
  function work() {
    a("doing lots of uninteresting work");
    setTimeout(work, Math.random() * 1000);
  }
  work();
  // setTimeout(work, Math.random() * 1000);
}
function main() {
  test();
}

main();

// var a = require("debug")("worker:a"),
//   b = require("debug")("worker:b");

// function work() {
//   a("doing lots of uninteresting work");
//   setTimeout(work, Math.random() * 1000);
// }

// work();

// function workb() {
//   b("doing some work");
//   setTimeout(workb, Math.random() * 2000);
// }

// workb();
