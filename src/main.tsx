import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { MainWrapper } from './components/main-wrapper';
import './nullstyle.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MainWrapper>
            <App />
        </MainWrapper>
    </StrictMode>
);
