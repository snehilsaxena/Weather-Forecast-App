const express = require('express');
const cors = require('cors');
const router = require('./routes/routing');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', router);

app.listen(8080);
console.log("Server Started at port 8080!");
