import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import AddBook from './pages/addBook'
import HomeBook from './pages/home'
import PageNoFound from './pages/pageNotFound'
import ViewBook from './pages/viewBook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
)
