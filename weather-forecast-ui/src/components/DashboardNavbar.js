import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 0.5 }} />
        <Hidden lgDown>
          <Typography
            align="center"
            color="#FCF1EF"
            variant="h2"
          >
            VivSoft Technologies
          </Typography>
        </Hidden>
        <Hidden lgUp>
          <Typography
            align="center"
            color="#FCF1EF"
            variant="h2"
          >
            VivSoft Technologies
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
