import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

/* const SpecialButton = ({text}) => {
  return (
    <button>{text}</button>
    )
  } */
  

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
)
