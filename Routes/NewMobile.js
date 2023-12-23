const express = require('express');
const MobileSchema = require('../Schema/MobileSchema');

const router = express.Router();

router.post('/', (req,res) => {
    console.log(req.body)
    const details = new MobileSchema(req.body);
    details.save().then((e) => {
        console.log(e);
        res.send('Added New Mobike')

    })
    console.log(details)
})

module.exports = router;