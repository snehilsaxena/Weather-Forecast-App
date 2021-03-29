import { Line } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider } from '@material-ui/core';
import weatherForecastFunc from '../../services/weatherForecast'
import { useEffect, useState } from 'react';

const WeatherForecastChart = (props) => {

  const [lineChartData, setLineChartData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      weatherForecastFunc().then(
        (resp) => {
          console.log(resp['data']);

          const weatherData = resp['data'];
          // const weatherData = { "current": { "temp_f": 55.9 }, "forecast": [{ "time": "2021-03-28 13:00", "temp_f": 63.7 }, { "time": "2021-03-28 14:00", "temp_f": 66.4 }, { "time": "2021-03-28 15:00", "temp_f": 66.2 }, { "time": "2021-03-28 16:00", "temp_f": 66 }, { "time": "2021-03-28 17:00", "temp_f": 65.8 }, { "time": "2021-03-28 18:00", "temp_f": 64.6 }, { "time": "2021-03-28 19:00", "temp_f": 63.3 }, { "time": "2021-03-28 20:00", "temp_f": 62.1 }, { "time": "2021-03-28 21:00", "temp_f": 61.3 }, { "time": "2021-03-28 22:00", "temp_f": 60.6 }, { "time": "2021-03-28 23:00", "temp_f": 59.9 }] }

          let labels = ['Current'];
          let data = [];
          if (weatherData) {
            data.push(weatherData.current.temp_f);

            weatherData.forecast.forEach(
              (ele) => {
                labels.push(ele['time'].substr(11, 5));
                data.push(ele['temp_f']);
              }
            );
          }

          setLineChartData(
            {
              labels: labels,
              datasets: [
                {
                  label: "Temperature (f)",
                  data: data,
                  fill: false,
                  backgroundColor: "rgba(75,192,192,0.2)",
                  borderColor: "#5664d2",
                  lineTension: 0
                }
              ]
            }
          );
        }
      ).catch(
        (err) => {
          console.log(err);
        }
      );
    }, 5000)
    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <Card {...props}>
      <CardHeader
        title="Weather Forecast (24 Hours)"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            position: 'relative'
          }}
        >
          <Line
            data={lineChartData}
          />
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default WeatherForecastChart;
