import React, {Component} from 'react';
import './index.css'

class InfoLook extends Component {
  render() {
    return (
      <div className="InfoLook">
        <img src="http://i.dailymail.co.uk/i/pix/2015/10/14/14/2D676F7400000578-0-image-a-76_1444830931852.jpg" alt="123"/>
        <div>123</div>
        <div>3</div>
        <div>6.5</div>
      </div>
    )
  }
}

class Switcher extends Component {
  render() {
    return(
      <div className="Switcher">
        <div className="left">
          <button className="dislike">{"X"}</button>
        </div> 
        <div className="midd">
          <InfoLook></InfoLook>
        </div>
        <div className="right">
          <button className="like">{"<3"}</button>
        </div>
      </div>
    )
  }
}

export default Switcher;