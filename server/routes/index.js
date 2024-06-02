const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Hallo ini halaman utama");
});

const dosenRoute = require("./dosen");
route.use("/dosen", dosenRoute);

module.exports = route;
