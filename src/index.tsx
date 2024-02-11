import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageError } from 'widgets/PageError';
import { App } from 'app/App';

import 'shared/config/i18n/i18n';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ErrorBoundary
            fallback={
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            }
        >
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
