const { readFileSync, writeFileSync } = require("fs");

const firstText = readFileSync("./content/first.txt", "utf8");
const secondText = readFileSync("./content/second.txt", "utf8");

const textToWrite = "This is the content of the new file now appended.";

writeFileSync("./content/result.txt", textToWrite, { flag: "a" });

console.log(firstText, " and ", secondText);
