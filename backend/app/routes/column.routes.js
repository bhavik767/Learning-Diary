module.exports = app => {
    const columns = require("../controllers/column.controller.js");

    var router = require("express").Router();
  
    router.post("/", columns.create);
  
    router.get("/", columns.findAll);

    router.get("/:id", columns.findOne);
 
    router.put("/:id", columns.update);
  
    router.delete("/:id", columns.delete);

    router.delete("/", columns.deleteAll);

    app.use('/api/columns', router);
  };