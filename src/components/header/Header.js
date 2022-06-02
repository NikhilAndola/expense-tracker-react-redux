import React from 'react'
import "./header.css"

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpenses <i className="fi fi-rr-credit-card"></i>
        </div>
        <div className="header-button">
          <a href="https://github.com/NikhilAndola" target="_blank" rel="nofollow noreferrer">
            <i className="devicon-github-original"></i>Star
          </a>
        </div>
      </div>
    </div>
  )
}