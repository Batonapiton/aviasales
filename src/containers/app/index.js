import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import './app.css'

const App = () => (
  <div>
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>

    <main className="main">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
)

export default App
