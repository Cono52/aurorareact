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
 
   constructor(props) {
     super(props);
     this.state = {
       imgLinks: [
         "http://3.bp.blogspot.com/-Kvf4OML7qa0/VMFQMVWuFqI/AAAAAAAAMsE/71S40JFXYrQ/s1600/IMG_7044.JPG",
         "https://1.bp.blogspot.com/-AQ9v4zAyzxg/WEIbSbCWpyI/AAAAAAAATME/oFFSdas3BsAB4lkKyJuWm3naPn__MJeywCLcB/s600/15178303_1464398510256560_1732442245886320636_n-2.jpg",
         "https://3.bp.blogspot.com/-yN2wRud9syo/WBFtb4KRTZI/AAAAAAAAS4c/KSessKJb4FoWzDwPTZK64yQaambKMBzmQCLcB/s600/IMG_2106.JPG",
         "https://3.bp.blogspot.com/-qtBTlAVbK1k/Vx1JRC4Vg8I/AAAAAAAAQaM/H5-YXlZdoJUJv1vzDV0eKn4Qz4Ux2DzgQCLcB/s1600/IMG_8031.JPG",
         "https://1.bp.blogspot.com/-RCj1lme_DIg/Vlt-x4GR3lI/AAAAAAAAQBk/iWzgFKBFVgU/s600/12314054_1181942851835462_4589169900682272178_n-3.jpg",
         "https://4.bp.blogspot.com/-J46DCOqGcRc/VlDE9KBh7WI/AAAAAAAAP-0/zkR8oowL39k/s600/12274639_1177376942292053_1520249981167398755_n.jpg",
         "https://1.bp.blogspot.com/-YINIM6j8zIM/VjqsrniuHzI/AAAAAAAAP40/Mai5ThErItA/s600/IMG_2127.JPG",
         "https://2.bp.blogspot.com/-zhajdAvWnUM/Vi46YyAvQqI/AAAAAAAAP28/WfZi8wHBl1k/s600/11220074_1165205506842530_7531581878298417072_n.jpg",
         "https://2.bp.blogspot.com/-93S7FcAuM-I/VgR2f6lqcsI/AAAAAAAAPmM/YhCStMVcVRo/s600/12042627_1150400111656403_6912228186095638186_n.jpg"
       ]
     }
   }

	render() {
		return (
			<div className="Profile">
        <div className="userImg"><img src="http://2.bp.blogspot.com/-CFsxW1dkfJM/VKiabOTV7AI/AAAAAAAAMik/-X5AH8KpLmM/s1600/IMG_5924.JPG" alt=""/></div>
        <div className="userName">Jane Doe</div>
        <div className="lookGrid">

        </div>
        <button className="addLook">+ Add New Look</button>
				{/*<ImageUpload/>*/}
			</div>
		);
	}
}

export default Profile;