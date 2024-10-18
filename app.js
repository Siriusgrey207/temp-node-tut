// local dependancy - use a dep. only in a partivular project
// npm install <dep>

// global dependancy - use it in any project
// npm install -g <dep>

// package.json - manifest file that stores important information about our project
// can be created manually (create package.json in the root, create properties etc)
// using npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
