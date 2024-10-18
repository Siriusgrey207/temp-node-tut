// Globals - No window! The window object doesn't exists in node because there is no window haha.

// There are still some global variables - can be accessed from anywhere

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about the environment where the program is being executed

// There is a lot more!

console.log(__dirname);
setInterval(() => {
    console.log("hello world");
}, 1000);
