import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home'
import Search from './components/search/Search'
import ItemListContainer from './components/items/ItemListContainer'
import PageNotFound from './components/page_not_found/PageNotFound'

export const routes = (
  <Routes >
    <Route exact path="/" element={<Home />} />
    <Route path="/profile" element={<Search />} />
    <Route path="/sub_categories/:id/items" element={<ItemListContainer />} />
    <Route path="/items/:keyword" element={<ItemListContainer />} />
    <Route path="/basket" element={<Search />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);