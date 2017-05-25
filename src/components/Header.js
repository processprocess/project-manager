import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }
  render() {
    return (
      <header>
        <nav className="top-nav">
          <div className="left-items">
            <a href="/" className={this.props.path === "/" ? "active-nav" : null}>Start Hatching</a>
            <a href="/my-projects" className={this.props.path === "/my-projects" ? "active-nav" : null}>My Projects</a>
            <a href="/edit-profile" className={this.props.path === "/edit-profile" ? "active-nav" : null}>Edit Profile</a>
          </div>
          <div className="right-items">
            <a href='/edit-profile'><span>Welcome Project Orphans</span></a>
            <a href='/logged-out'><span>Sign Out</span></a>
          </div>
        </nav>
        <div className="org-banner">
          <div className="image-container"></div>
          <div className="text-container">
            <div className="banner-conent">
              <p className="org-name">Project Orphans</p>
              <p className="org-subtitle">Serving Orphans & Widows in Uganda | Tulsa, OK</p>
            </div>
          </div>
        </div>
        <nav className="project-nav">
          <div className="center-items">
            <span>filter by:</span>
            <a href={`${this.props.path}/all`} className={this.props.location === `${this.props.path}/all` ? "active-nav" : null} >All</a>
            <a href={`${this.props.path}/listed`} className={this.props.location === `${this.props.path}/listed` ? "active-nav" : null} >Listed</a>
            <a href={`${this.props.path}/in-progress`} className={this.props.location === `${this.props.path}/in-progress` ? "active-nav" : null} >In-progress</a>
            <a href={`${this.props.path}/drafts`} className={this.props.location === `${this.props.path}/drafts` ? "active-nav" : null} >Drafts</a>
            <a href={`${this.props.path}/completed`} className={this.props.location === `${this.props.path}/completed` ? "active-nav" : null} >Completed</a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;