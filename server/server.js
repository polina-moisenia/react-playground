const express = require('express');
const cors = require('cors');
const request = require('request');
const PORT = 5000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const app = express();

app.use(cors());
app.use(express.json());

//it's a proxy on api gateway without certificate and CORS
app.get('/items', function (req, res) {
    request('https://gy44av6oj6.execute-api.eu-north-1.amazonaws.com/items', function (error, response, body) {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        res.send(body)
    });
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`))