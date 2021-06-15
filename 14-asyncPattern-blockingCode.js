const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home");
  }
  if (req.url === "/about") {
    for (i = 0; i < 1000; i++) {
      for (j = 0; j < 1000; j++) {
        res.end("About");
      }
    }
  }
  res.end("Err ");
});

server.listen(7000, () => {
  console.log("Standby request on host 7000...");
});
