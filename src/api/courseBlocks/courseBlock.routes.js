// traemos express y router
const express = require ('express');
const controller = require('./courseBlock.controller');

const router = express.Router();

router.get('/', controller.indexGet);

// exportamos router
module.exports = router;