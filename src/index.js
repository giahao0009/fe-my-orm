// eslint-disable-next-line no-unused-vars
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter } from 'react-router-dom';

// scroll bar
import 'simplebar/src/simplebar.css';

// third-party
// eslint-disable-next-line no-unused-vars
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
import 'assets/third-party/apex-chart.css';

// project import
// eslint-disable-next-line no-unused-vars
import App from './App';
import { store } from 'store';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <StrictMode>
        <ReduxProvider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ReduxProvider>
    </StrictMode>
);
