import React from "react";
import { createRoot } from 'react-dom/client'

import { QueryClient, QueryClientProvider } from 'react-query';
// import {ReactQueryDevtools} from 'react-query/devtools'

import '../src/index.css';

import App from "./components/App/App";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
);