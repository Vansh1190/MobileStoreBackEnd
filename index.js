const express = require('express');
const app = express();
const port = 80;
const cors = require('cors')
const connectToMongo = require('./connectToMongo')

const Orders = require('./Routes/NewMobile')
const AllMobiles = require('./Routes/AllMobiles')
const PlaceOrder = require('./Routes/PlaceOrder')
const TrackOrder = require('./Routes/TrackOrder')
const MobileDetails= require('./Routes/MobileDetails')

connectToMongo();

app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(port, () => {
    console.log('Exmaple port http://localhost:'+ port);
})

app.use('/addNewMobile', Orders)
app.use('/placeOrder', PlaceOrder)
app.use('/allMobiles', AllMobiles)
app.use('/trackOrder', TrackOrder)
app.use('/mobileDetails', MobileDetails)
