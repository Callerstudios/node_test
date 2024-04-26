const os = require("os");

let userInfo = os.userInfo();
let upTime = os.uptime();

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
// console.log(upTime);
