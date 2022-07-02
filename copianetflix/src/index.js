import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PageMovie from './components/PageMovie';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='App'>
        <App></App>
    </div>
);