import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import RouteComp from "./routing/RouteComp";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouteComp />
    </ThemeProvider>
  );
};

export default App;