import React, {Component} from 'react';
import './index.css'
import heart from './heart.svg'
import ex from './ex.svg'

class InfoLook extends Component {
  render() {
    return (
      <div className="InfoLook">
        <img src="http://i.dailymail.co.uk/i/pix/2015/10/14/14/2D676F7400000578-0-image-a-76_1444830931852.jpg" alt="123"/>
        {/*<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJaV3nGKXiG9jd62LvhU-0MLtNF4gqkcQM99YCtSnDX1oLsIF0a62dDg" alt="123"/>*/}
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
          <div className="midd">
            <InfoLook></InfoLook>
          </div>
          <div className="buttonBox">
            <div className="left">
              <button className="dislike"><img src={ex} alt=""/></button>
            </div>
            <div className="right">
              <button className="like"><img src={heart} alt=""/></button>
            </div>
          </div>
        </div>
    )
  }
}

export default Switcher;