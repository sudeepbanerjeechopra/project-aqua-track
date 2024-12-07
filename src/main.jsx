import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.js';
import './shared/style/index.css';
import 'modern-normalize';
import { ModalProvider } from './context/ModalContext.jsx';
import './i18n/config.js';
import { TourProvider } from '@reactour/tour';
import steps from './helpers/steps.js';
import { tourStyles } from './shared/style/tour/tourStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <ModalProvider>
              <TourProvider steps={steps} styles={tourStyles}>
                <App />
              </TourProvider>
            </ModalProvider>
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
