const path = require("path");

const filePath = path.join("/content", "text.txt");

const seperator = path.sep;

const baseName = path.basename(filePath);

const absolutePath = path.resolve(__dirname, filePath);

console.log(absolutePath);
