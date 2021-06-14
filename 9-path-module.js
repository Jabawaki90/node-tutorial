const path = require("path");

const newFolder = path.join("/content", "subfolder", "test.txt");
console.log(newFolder);

const base = path.basename(newFolder);

console.log(base);

const absolute = path.resolve(__dirname, "/content", "subfolder", "test.txt");
console.log(absolute);
