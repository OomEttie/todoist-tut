import React from 'react'
import { Header } from './components/layout/Header'
import { Content } from './components/layout/content'

export const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
      <Content />
    </header>
  </div>
)
