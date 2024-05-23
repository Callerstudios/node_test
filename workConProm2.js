const { readFile, writeFile } = require("fs").promises;
const utils = require("util");

const readFilePromise = utils.promisify(readFile);
const writeFilePromise = utils.promisify(writeFile);

const func1 = async () => {
  const file = await readFilePromise("./content/first.txt");
  await writeFilePromise("./content/result.txt", `RESULT: ${file}`);
  console.log("Done");
};

const func2 = async () => {
  const file = await readFile("./content/first.txt");
  await writeFile("./content/result.txt", `RESULT: ${file}`);
  console.log("Done");
};

func2();
