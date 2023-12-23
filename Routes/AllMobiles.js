const express = require('express');
const MobileSchema = require('../Schema/MobileSchema');

const router = express.Router();

router.get('/', (req,res)  => {
    (MobileSchema.find({})).then((items) => {
        res.send({AllMobiles:items, success: true})
    })
})

module.exports = router;