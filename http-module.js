const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Welcome to Callerstudios");
    res.end();
  } else {
    res.end(
      `
            <h1> Oops! </h1>
            <p> Page does not exist </p>
            `
    );
  }
});

server.listen(2300);
