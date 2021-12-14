import React from 'react'
import { Link } from "@reach/router";

const NestedHome = ({children}) => (
  <div>
    <h2>Nested home</h2>
    <ul>
      <li><Link to="first">First nest</Link></li>
      <li><Link to="second">Second nest</Link></li>
    </ul>
    {children}
  </div>
)

export default NestedHome
