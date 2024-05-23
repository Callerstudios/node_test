const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

const write1 = () => {
  const file = readFileSync("./content/first.txt", "utf8");
  readFile("./content/first.txt", "utf8", (err, result) => {
    if(err){
        console.log(err);
        return
    }
    func();
    console.log(result, " yes");
  });
  console.log(file);
  console.log("a");
};
const funcSinAwait = () => {
  const num = func();
  console.log("Yes");
};
const funcConAwait = () => {};

const func = () => {
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
  return 20;
};
// funcSinAwait();
write1();
