import React from 'react'
import { Link } from "@reach/router";

const Home = ({children}) =>  (
  <div>
    <h1>Home</h1>
    <ul>
      <li><Link to="first">First</Link></li>
      <li><Link to="second">Second</Link></li>
      <li><Link to="nested">Nested</Link></li>
    </ul>
    {children}
  </div>
)

export default Home
