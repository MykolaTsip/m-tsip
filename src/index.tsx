import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Components
import { ErrorPage } from './common';
import { HomePage } from './pages/homePage/Home';


// Lazy
const todoPage = () => import('./pages/todoPage/todoPage').then(file => ({Component: file.default}))
const userPage = () => import('./pages/userPage/Users').then(file => ({Component: file.Users}))
const postPage = () => import('./pages/postPage/Posts').then(file => ({Component: file.Posts}))
const commentPage = () => import('./pages/commentPage/Comments').then(file => ({Component: file.Comments}))


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: '',
        Component: HomePage
      },
      {
        path: '/todos',
        lazy: todoPage
      },
      {
        path: '/users',
        lazy: userPage
      },
      {
        path: '/posts',
        lazy: postPage
      },
      {
        path: '/comments',
        lazy: commentPage
      },
    ]
  },
  {
    path: "*",
    Component: ErrorPage
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
