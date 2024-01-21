import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import ThemeProvider from 'Components/Provider/ThemeProvider';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from 'Components/Layout/MainLayout';
import { AnimatePresence } from 'framer-motion';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route>
            <Route path="/*" element={<App />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
);
