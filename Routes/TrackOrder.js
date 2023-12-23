const express = require('express');
const MobileSchema = require('../Schema/MobileSchema');
const CustomerSchema = require('../Schema/CustomerSchema');

const router = express.Router();

router.get('/', (req,res)  => {
    console.log(req.headers)
    CustomerSchema.findById(req.headers.id).then((e) => {
        if (!e) {
            return res.status(404).json({ error: 'Order not found or Invalid Order ID' });
        }

        console.log(e);
        MobileSchema.find({_id: {$in: e.buyItem}}).then((items) => {
            res.send({CustomerDetails: e, AllOrders: items, status: 200})
        })  
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });

    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
})

module.exports = router; 