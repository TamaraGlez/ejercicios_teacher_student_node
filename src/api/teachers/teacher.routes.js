const express = require("express");
const controller = require("./teacher.controller");

const router = express.Router();

// ruta: /teachers/
router.get("/", controller.indexGet);

// ruta: /teachers/63c588039298264dbf1567a5
router.get("/:id", controller.getById);
router.get("/getbyname/:name", controller.getByName);

// ruta: /teachers/create
router.post("/create", controller.createPost);

// ruta: /teachers/edit/63c588039298264dbf1567a5
router.put("/edit/:id", controller.editPut);

// ruta: /teachers/delete/63c66d185f6812d56a2814e3
router.delete("/delete/:id", controller.deleteTeacher);

module.exports = router;
