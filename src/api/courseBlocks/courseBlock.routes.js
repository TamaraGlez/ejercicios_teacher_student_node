// traemos express y router
const express = require ('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    return res.status(200).json('RUTAS DE COURSE BLOCKS FUNCIONANDO')
});

// exportamos router
module.exports = router;