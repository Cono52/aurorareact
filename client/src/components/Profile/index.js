import React, {Component} from 'react'
//import FileInput from 'react-file-input'
import './index.css'


class ImageUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
		file: '',
		imagePreviewUrl: ''
	}
  }

  _handleSubmit(e) {
    e.preventDefault()
	let data = new FormData();
	data.append('file' ,this.state.file)
    fetch("api/checkImage", {method: "POST", body: data})
	.then(res => res.json())
	.then(res => console.log(res))
    console.log('handle uploading-', this.state.file)
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt="You done messed up son"/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

class Profile extends Component {
	render() {
		return (
			<div className="Profile">
				Profile
				<ImageUpload/>
			</div>
		);
	}
}

export default Profile;