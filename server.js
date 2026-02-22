const http = require("http");

const PORT = process.env.PORT || 80;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/hello-world") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, Khoa" }));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
