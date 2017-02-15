import React, {Component} from 'react';
import './index.css'
import heart from './heart.svg'
import ex from './ex.svg'

function InfoLook(props) {
		return (
			<div className="InfoLook">
				{/*TODO: convert image from array buffer to image*/}
				{/*<img src={props.look.img} alt="123"/>*/}
				<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJaV3nGKXiG9jd62LvhU-0MLtNF4gqkcQM99YCtSnDX1oLsIF0a62dDg" alt="123"/>
				<div>{props.look.price}</div>
				<div>{props.look.rating}</div>
				<div>{props.look.skill}</div>
			</div>
		)
}

class Switcher extends Component {

	constructor(props) {
		super(props)
		this.state = {
			looks: []
		}
	}

	componentDidMount() {
		return fetch(`api/looks`, {
			accept: 'application/json'
		}).then((res) => {
			return res.json()
		}).then((a) => {
			this.setState({ looks: a })
			console.log(this.state.looks)
		})
	}

	handleClick() {
		console.log("next pic")
	}

	render() {
		return(
				<div className="Switcher">
					<div className="midd">{
					(this.state.looks.length === 0) ? <div>Loading</div>
						:<InfoLook look={this.state.looks[0]}></InfoLook>
					}
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