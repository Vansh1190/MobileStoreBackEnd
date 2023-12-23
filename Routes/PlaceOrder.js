const express = require('express');
const MobileSchema = require('../Schema/CustomerSchema');
const CustomerSchema = require('../Schema/CustomerSchema');

const router = express.Router();

router.post('/', (req,res)  => {
    const details = new CustomerSchema(req.body);
    details.save().then((e) => {
        console.log(e);
        res.status(200).send({response: 'Order Placed Successfully', TrackingID: e._id})
    })
})

module.exports = router;