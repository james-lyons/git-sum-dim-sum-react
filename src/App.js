import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import NavBar from './components/Layout/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes />
    </>
  );
}

export default App;
