const http = require("http");

const getStatus = () => ({ app: "Digital Kampus", status: "ok", cache: "aktif" });

if (require.main === module) {
  http
    .createServer((req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(getStatus()));
    })
    .listen(3000);
}

module.exports = { getStatus };
