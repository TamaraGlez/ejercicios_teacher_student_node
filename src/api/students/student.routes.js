const express = require("express");
const controller = require("./student.controller");
const router = express.Router();

router.get("/", controller.indexGet);

router.get("/:id", controller.indexGet);

router.get("/getbyname/:name", controller.getByName);

router.post("/create", controller.createPost);

router.put("/edit/:id", controller.editPut);

module.exports = router;