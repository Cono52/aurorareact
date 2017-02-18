import React, {Component} from 'react';
import './index.css'
import heart from './heart.svg'
import ex from './ex.svg'
import {encode} from 'base64-arraybuffer'

function InfoLook(props) {
		return (
			<div className="InfoLook">
				<img src={"data:image/jpeg;base64,"+encode(props.look.img.data.data)} alt="missing"/>
				<div className="stats">
					<div>{props.look.price}</div>
					<div>{props.look.rating}</div>
					<div>{props.look.skill}</div>
				</div>
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
		if (this.state.looks.length === 0) {
				fetch(`api/looks`, {
						accept: 'application/json'})
				.then(res => res.json())
				.then(a => this.setState({ looks: a }))
		}
	}


	handleClick() {
		this.setState({looks: this.state.looks.splice(1)	})
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