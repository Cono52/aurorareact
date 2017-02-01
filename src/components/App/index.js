import React, {Component} from 'react';
import {Link} from 'react-router'
import './style.css';

class Nav extends Component {
  render() {
    return(
      <div>
        <div>
         <Link to="/" activeClassName="active">Home</Link>
        </div> 
        <div>
          <p>Aurora</p>
        </div>
        <div>
          <Link to="/profile" activeClassName="active">Profile</Link>
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
