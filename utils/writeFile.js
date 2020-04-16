const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function writeToFile(fileName, data) {
    writeFileAsync(fileName, data)
    console.log("Successfully wrote to damn.md");
}

module.exports = writeToFile;