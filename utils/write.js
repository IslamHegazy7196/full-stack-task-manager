const fs = require("fs");
const path = require("path");

const writeFile = (data) => {
  var stringifiedData = JSON.stringify(data);
  fs.writeFileSync(
    path.resolve(__dirname, "../data.json"),
    stringifiedData,
    (err) => {
      if (err) throw err;
    }
  );
};
module.exports = writeFile;
