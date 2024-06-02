const { dosen } = require("../models");

class dosenController {
  static getDosen(req, res) {
    dosen
      .findAll()
      .then((dosens) => {
        res.json(dosens);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}

module.exports = dosenController;
