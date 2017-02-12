import React, {Component} from 'react';
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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
    var path = this.props.location.pathname;
    var segment = path.split('/')[1] || 'root';
    return (
      <div className="App">
          <Nav></Nav>
          <ReactCSSTransitionGroup 
            transitionName={segment === 'root' ? 'reverseExample' : 'example'}
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}>
             {React.cloneElement(this.props.children, { key: segment })}
          </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App