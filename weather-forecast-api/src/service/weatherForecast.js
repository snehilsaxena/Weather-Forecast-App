const request = require('request');

const url = `https://api.weatherapi.com/v1/forecast.json?key=3738897fde7047f0a1822737203011&q=20171&days=2`;

const getWeatherForecast = () => {
    return new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
            
            if(err)
                reject(err);

            let resp = {
                current: {
                    temp_f: body['current']['temp_f']
                },
                forecast: []
            };

            const dt = new Date();
            const final_date = `${dt.getFullYear().toString().padStart(4, '0')}-${(dt.getMonth() + 1).toString().padStart(2, '0')}-${dt.getDate().toString().padStart(2, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;

            for(let element of body['forecast']['forecastday']){
                for(let data of element['hour']){
                    if (data['time'] > final_date) {
                        resp.forecast.push(
                            {
                                time: data['time'],
                                temp_f: data['temp_f']
                            }
                        )

                        if(resp.forecast.length === 24){
                            break;
                        }
                    }
                }
            }

            resolve(resp);
        });

    });
}

module.exports = getWeatherForecast;