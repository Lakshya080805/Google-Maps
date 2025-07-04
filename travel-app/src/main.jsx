


// // src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/styles'; // ✅ fixes the compatibility
import { createTheme } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';

// import { LoadScript } from '@react-google-maps/api';


const theme = createTheme(); // You can customize it if needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      

  <App />

    </ThemeProvider>
  </React.StrictMode>
);






