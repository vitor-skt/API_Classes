import React from 'react'
import ReactDOM from 'react-dom'
import './global.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/homePage'

ReactDOM.render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
  document.getElementById('root')
)
