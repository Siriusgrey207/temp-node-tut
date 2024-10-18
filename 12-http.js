// HTTP MODULE

// Here you can see how to create a very basic server

const http = require("http");

// req - the incoming request (for example a client is request your webpage from a webbrowser)
// res -
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page.");
        return;
    }
    if (req.url === "/about") {
        res.end("Here is our short history.");
        return;
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for.</p>
        <a href="/">Back home</a>
    `);
    return;
});

server.listen(5000); // Tell the server on what port to listen for requests.
