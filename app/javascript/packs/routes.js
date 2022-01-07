import React from 'react';
import { Routes, Route, browserHistory } from 'react-router-dom';

import Home from './components/home/Home'
import Search from './components/search/Search'
import PageNotFound from './components/page_not_found/PageNotFound'

export const routes = (
  <Routes history={browserHistory}>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Search />} />
    <Route path="/sub_categories/:id/items" element={<Search />} />
    <Route path="/basket" element={<Search />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);