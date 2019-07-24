import React from "react"
import { BrowserRouter } from "react-router-dom"

/**
 * Component is something that we can extract and use in the entire code
 *  - it's a js archive that returns a jsx (html)
 *  - it can be written as a function or class
 *
 */

import Routes from "./routes"
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  )
}

export default App
