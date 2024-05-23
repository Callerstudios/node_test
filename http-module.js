const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Welcome to this place");
    console.log("Good");
    res.end();
  }
  else if(req.url == "/about"){
    res.write("I have started again");
    for(let i = 0; i < 20000; i++){
      console.log(i)
    }
    res.end("I am done")
  } else {
    res.end(
      `
            <h1> Oops! </h1>
            <p> Page does not exist </p>
            `
    );
  }
});

server.listen(2300, ()=>{
  console.log("Server listening on port 2300");
});
