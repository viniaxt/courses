import React from "react"
// High order component
import { withRouter } from 'react-router-dom'

import "./menu-item.styles.scss"

// access to history came from withRouter
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (   
  <div 
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}  
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
    </div>
)


export default withRouter(MenuItem)
