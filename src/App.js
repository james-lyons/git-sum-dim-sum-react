import React from 'react';
import Routes from './config/routes';
import NavBar from './components/Layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes />
    </>
  );
};

export default App;
