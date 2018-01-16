// import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'

// import Header from '../components/Header'
// import './index.css'

// const TemplateWrapper = ({ children }) => (
//   <div>
//     <Helmet
//       title="Gatsby Default Starter"
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     <Header />
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '0px 1.0875rem 1.45rem',
//         paddingTop: 0,
//       }}
//     >
//       {children()}
//     </div>
//   </div>
// )

// TemplateWrapper.propTypes = {
//   children: PropTypes.func,
// }

// export default TemplateWrapper

import React from 'react';
import Link from 'gatsby-link';

const ListLink = props => 
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({children}) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children()}
  </div>
)