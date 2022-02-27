const fs = require("fs");
const path = require("path");

const readFile = () => {
  const data = fs.readFileSync(path.resolve(__dirname, "../data.json"));
  const parsedData = JSON.parse(data);
  return parsedData;
};
module.exports = readFile;
