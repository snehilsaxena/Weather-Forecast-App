import axios from 'axios';

const weatherForecastFunc = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:8080/weatherForecast').then(
            (data) => {
                // console.log(data);
                resolve(data);
            }
        ).catch(
            (err) => {
                console.log(err);
                reject(err);
            }
        )
    });
}

export default weatherForecastFunc