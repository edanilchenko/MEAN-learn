const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Main site page!');
});

app.listen(port, () => {
    console.log('Server was running on port '+ port);
});