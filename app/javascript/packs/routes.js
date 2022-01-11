import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home'
import Search from './components/search/Search'
import ItemListContainer from './components/items/ItemListContainer'
import PageNotFound from './components/page_not_found/PageNotFound'
import ItemContainer from './components/items/ItemContainer'
import LoginContainer from './components/login/LoginContainer'
import BasketContainer from './components/basket/BasketContainer'

export const routes = (
  <Routes >
    <Route exact path="/" element={<Home />} />
    <Route path="/profile" element={<Search />} />
    <Route path="/sub_categories/:id/items" element={<ItemListContainer />} />
    <Route path="/items/search/:keyword" element={<ItemListContainer />} />
    <Route path="/items/:id" element={<ItemContainer />} />
    <Route path="/basket" element={<BasketContainer />} />
    <Route path="/login" element={<LoginContainer />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);