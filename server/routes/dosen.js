const dosenRoute = require("express").Router();
const dosenController = require("../controllers/dosenControllers");
dosenRoute.get("/", dosenController.getDosen);
// dosenRoute.post("/", dosenController.addDosen);
// dosenRoute.delete("/:id", dosenController.deleteDosen);
// dosenRoute.put("/:id", dosenController.updateDosen);

module.exports = dosenRoute;
