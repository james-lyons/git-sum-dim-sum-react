import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import NavBar from './components/Layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  return (
    <>
      <NavBar history={ props.history }/>
      <Routes />
    </>
  );
};

export default withRouter(App);
