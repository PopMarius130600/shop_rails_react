// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from './routes';

import store from './store'
import HeaderContainer from './components/header/HeaderContainer'
import Footer from './components/footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <Provider store={store} >
        <Router>
          <div>
            <HeaderContainer />
            { routes }
            <Footer />
          </div>
        </Router>
      </Provider>
    </div>,
    document.body.appendChild(document.createElement('div')),
  )
})
