const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello!'
    })
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
});