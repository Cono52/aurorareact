import React, {Component} from 'react';

class InfoLook extends Component {
  render() {
    return (
      <div>
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
      <div>
        <div>
          <button>{"X"}</button>
        </div> 
        <div>
          <InfoLook></InfoLook>
        </div>
        <div>
          <button>{"<3"}</button>
        </div>
      </div>
    )
  }
}

export default Switcher;