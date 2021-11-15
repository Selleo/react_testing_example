import React from 'react'
import { Router } from "@reach/router"
import NestedFirst from './NestedFirst'
import NestedSecond from './NestedSecond'
import NestedHome from './NestedHome'

const NestedRouter = () => (
  <Router>
    <NestedHome path="/">
      <NestedFirst path='first'/>
      <NestedSecond path='second'/>
    </NestedHome>
  </Router>
)


export default NestedRouter
