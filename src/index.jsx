import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { ContractOffer } from './components/contract-offer';
import { TermsOfUse } from './components/terms-of-use';
import { BookPage } from './pages/book';
import { MainPage } from './pages/main';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/books/:id' element={<BookPage />} />
        <Route path='/terms' element={<TermsOfUse />} />
        <Route path='/contract' element={<ContractOffer />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
