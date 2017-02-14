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

  constructor(props) {
    super(props)
    this.state = {
      looks: Array(9).fill(null)
    }
  }

  handleClick() {
    //TODO: If current array is L>5 copy array into new array of 1 shorter 
    //      else retrieve 5 new pics from DB and copy contents of old array into new.
    return fetch(`api/looks`, {
      accept: 'application/json'
    }).then((res) => {
      return res.json();
    }).then((a) => {
      console.log(a)
    })
  }

  render() {
    return(
        <div className="Switcher"> 
          <div className="midd">
            <InfoLook look={this.state.looks[0]}></InfoLook>
          </div>
          <div className="buttonBox">
            <div className="left">
              <button className="dislike" onClick={() => this.handleClick()}><img src={ex} alt=""/></button>
            </div>
            <div className="right">
              <button className="like" onClick={() => this.handleClick()}><img src={heart} alt=""/></button>
            </div>
          </div>
        </div>
    )
  }
}

export default Switcher;