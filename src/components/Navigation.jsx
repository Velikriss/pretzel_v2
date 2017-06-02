import React from 'react';
import AppBar from 'material-ui/AppBar';
import CustomNavigation from './CustomNavigation.jsx';

const Navigation = () => (
  <AppBar
    title={<CustomNavigation />}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={{ backgroundColor: 'black' }}
  />
);

export default Navigation;
