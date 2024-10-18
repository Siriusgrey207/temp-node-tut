// Modules

// Your whole application is not in one file but only one file is executed.

// Modules - Encapsulated Code (only share minimum)
// In NODE every file is a module by default

// To get any shared modules or variables we use the require function
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
// You need to select where the module is located

// Using require this way runs the relevant file
require("./7-mind-granade");

sayHi("Susan");
sayHi(john);
sayHi(peter);
