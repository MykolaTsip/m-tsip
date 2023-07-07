import React from 'react';
import './App.css';

import { Outlet } from 'react-router-dom';

import { Header, Footer } from './common';

import { Provider } from 'mobx-react';

import todoStore from './store/todoStore';
import apiStore from './store/apiStore'

function App() {
  return (
    <Provider todoStore={todoStore} apiStore={apiStore}>
      <div className="wrapper">
        <Header/>
        <div className="content" data-testid="content">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
