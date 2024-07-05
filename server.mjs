import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import home from './routes/home.mjs';
import region from './routes/region-route.mjs';
import province from './routes/province-route.mjs';
import city_municipality from './routes/city-municipality-route.mjs';
import barangay from './routes/barangay-route.mjs';

const PORT = process.env.PORT || 5051;
const app = express();

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/address?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => console.log('Successfully connected to mongo'))

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({extended:true, limit: '10mb'}));

app.use('/', home);
app.use('/region', region);
app.use('/province', province);
app.use('/city-municipality', city_municipality);
app.use('/barangay', barangay);


app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});