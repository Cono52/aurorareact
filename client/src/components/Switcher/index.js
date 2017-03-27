import React, {Component} from 'react'
import {Link} from 'react-router'
import './index.css'
import heart from '../heart.svg'
import ex from '../ex.svg'
import arrow from '../arrow.svg'
import {encode} from 'base64-arraybuffer'

function InfoLook(props) {
		return (
			<div className="InfoLook">
				<div>
					<img src={"data:image/jpeg;base64,"+encode(props.look.img.data.data)} alt="missing"/>
					<div className="nope">EWW!</div>
					<div className="yep">YEP</div>
				</div>
				<div className="stats">
					<div className="row">
						<div>${props.look.price}</div>
						<div>{props.look.rating}</div>
					</div>
					<div className="row">
						<div>{props.look.skill}</div>
						<div>{props.look.likes}</div>
					</div>
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
				fetch(`http://localhost:3001/api/looks`, {
						accept: 'application/json'})
				.then(res => res.json())
				.then(a => this.setState({ looks: a }))	
		}
		setTimeout(() => {
			document.querySelector('.Switcher').style.opacity = "1"
		}, 100)
	}


	handleClick(e) {
		let elem = e.target.parentElement
		let nope = document.querySelector('.nope')
		let yep = document.querySelector('.yep')
		let info = document.querySelector('.InfoLook')
		if(elem.className === "like" || elem.className === "right") {
			yep.style.opacity = "1"
			setTimeout(() => {              
		 		yep.style.opacity = "0"
				info.style.opacity = "0"
				info.style.marginLeft = "200px"
			}, 300)
		}else {
			nope.style.opacity = "1"
			setTimeout(() => {              
				nope.style.opacity = "0"
				info.style.opacity = "0"
				info.style.marginLeft = "-200px"
   			}, 300);
		}
		elem.classList.toggle("bounce")
		setTimeout(() => {
			this.setState({looks: this.state.looks.splice(1)})
			info.style.opacity = "1"
			info.style.marginLeft = "0px"
		}, 400)

		setTimeout(() => {              
		 elem.classList.toggle("bounce")
   		}, 200);
	}

	render() {
		return(
				<div className="Switcher">
					<div className="midd">{
					(this.state.looks.length === 0) 
					? <div className="container">
							<div className="load-text">
								Loading...
							</div>
							<div className="flex">
								<div className="loader">
								</div>
							</div>
						</div>
						:[<InfoLook key={1} look={this.state.looks[0]}></InfoLook>,
						<div key={2} className="buttonBox">
							<div className="left">
								<button className="dislike" onClick={(e) => this.handleClick(e)}><img src={ex} alt=""/></button>
							</div>
							<div className="middle">
								<Link to="/ViewProds" activeClassName="active">
									<button className="breakdown"><img src={arrow} alt=""/></button>
        						</Link>
							</div>
							<div className="right">
								<button className="like" onClick={(e) => this.handleClick(e)}><img src={heart} alt=""/></button>
							</div>
						</div>]
					}
					</div>
				</div>
		)
	}
}

export default Switcher;
