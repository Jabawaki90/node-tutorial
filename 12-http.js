const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome New Guy, to our server");
  }
  if (req.url === "/about") {
    res.end("Welcome to our history");
  }

  res.end(` <h1>OOOPS!</h1>
  <p>we cant seem to find</p>
  <a href="/"> go back Home </a>`);
});

server.listen(4000);
