import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{color: "tomato"}}>
    <h1>Hi Derik!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/counter/">Counter</Link>
  </div>
)

export default IndexPage
