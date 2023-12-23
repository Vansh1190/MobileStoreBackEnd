const express = require('express');
const MobileSchema = require('../Schema/MobileSchema');
const router = express.Router();

router.get('/', (req,res)  => {
    const MobileID = req.headers.mobileid;
    MobileSchema.findById(MobileID).then((e) => {

        res.status(200).send({response: 'Mobile Found', mobileDetails: e})
    })
})

module.exports = router;