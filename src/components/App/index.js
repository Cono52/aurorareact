import React, {Component} from 'react';
import {Link} from 'react-router'

import home from './home.svg';
import profile from './profile.svg'

import './style.css';

class Nav extends Component {
  render() {
    return(
      <div className="Nav">
        <div className="home">
          <Link to="/" activeClassName="active">
            <img src={home} className="home-logo" alt="logo" />
          </Link>
        </div> 
        <div className="titleText">
          <p>Aurora</p>
        </div>  
        <div className="profile">
          <Link to="/profile" activeClassName="active">
            <img src={profile} className="profile-logo" alt="logo" />
          </Link>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav></Nav>
          <div className="content">
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default App
