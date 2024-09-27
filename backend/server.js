const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routesHandler = require('./routes/handler.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routesHandler);

const PORT = 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const corsOptions = {
    origin: '*',
    credential: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/api', (req, res) => {    
    res.send('Hello World');
})