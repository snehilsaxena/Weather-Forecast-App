import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import WeatherForecastChart from './dashboard/WeatherForecastChart';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Weather Forecast</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <WeatherForecastChart />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
