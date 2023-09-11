import React from 'react';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import { StrictMode } from "react";
import {createRoot} from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <AppRouter />
    </StrictMode>,
  );

