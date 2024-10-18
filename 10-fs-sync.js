// FS MODULE (Sync)

const { readFileSync, writeFile, writeFileSync } = require("fs");

console.log("start");

// readFileSync - allows you to read files, default encoding is utf-8 but you can use a different one
// writeFileSync - allows you to write in a file or create one and write in it

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// If the file is not throwDeprecation, Node will create a file
// writeFileSync(
//     "./content/result-sync.txt",
//     `Here is the result : ${first}, ${second}`
// );

// By default Node will override the contents of the file

// If the flag: a is give as an option like below, Node will append instead of overwrite

writeFileSync(
    "./content/result-sync.txt",
    `Here is the result : ${first}, ${second}`,
    { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
