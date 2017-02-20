import React, {Component} from 'react'
import FileInput from 'react-file-input'
import './index.css'


class Form extends Component {

  	handleChange = (event) => {
		console.log('Selected file:', event.target.files[0]);
	}
 
	render() {
		return (
				<form>
					<FileInput name="myImage"
							accept=".png,.gif"
							placeholder="My Image"
							className="inputClass"
							onChange={this.handleChange} />
				</form>
		);
	}
}

class Profile extends Component {
	render() {
		return (
			<div className="Profile">
				Profile
				<Form/>
			</div>
		);
	}
}

export default Profile;