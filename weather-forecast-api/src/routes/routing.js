const express = require('express')
const router = express.Router();
const getWeatherForecast = require('../service/weatherForecast');

//Routing for Weather Forecast
router.get('/weatherForecast', (req, res, next) => {
    getWeatherForecast().then(data => {
        res.send(data);
    }).catch(err => {
        next(err);
    });
})

router.get('*', (req, res, next) => {
    let err = new Error();
    err.status = 404;
    err.message = 'Requested page is not available'
    res.send(err);
});

module.exports = router;
