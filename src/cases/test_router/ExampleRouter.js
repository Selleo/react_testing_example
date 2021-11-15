import React from 'react'
import { Router } from "@reach/router"
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import Home from './Home'
import NestedRouter from './NestedRouter'

const ExampleRouter = () => (
  <Router>
    <Home path="/" >
      <FirstPage path="first"/>
      <SecondPage  path="second"/>
      <NestedRouter path="nested/*"/>
    </Home>
  </Router>
)

export default ExampleRouter
