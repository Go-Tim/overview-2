import React from 'react';
import Axios from 'axios';
import PhotosModal from './PhotosModal.jsx';

export default class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      show: false,
    };
    this.getPhotos = this.getPhotos.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    this.getPhotos(this.props.path);
  }

  getPhotos(id) {
    Axios.get(`/api/photos${id}`)
      .then((results) => this.setState({
        photos: results.data,
      }))
      .catch((err) => console.error(err));
  }

  showModal() {
    this.setState({
      show: true,
    });
  }

  hideModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    const photosArr = this.state.photos.map((photo, index) => (
      <div className="photo" key={index} onClick={this.showModal}>
        <img className="campsitePhotos" src={photo.photo} alt="campsite" />
        <div className="author">
          <img src={photo.userImage} alt={photo.userName} className="userImg"></img>
          <span>{photo.userName}</span>
        </div>
      </div>
    ));

    const ninePhotos = [];
    for (let i = 0; i < 9; i++) {
      ninePhotos.push(photosArr[i]);
    }

    return (
      <section className="sections">
        <PhotosModal
          show={this.state.show}
          handleClose={this.hideModal}
          campsiteName={this.props.campsiteName}
          campsiteArea={this.props.campsiteArea}
          photos={this.state.photos}
        />
        <h3 className="header">The vibe at {this.props.campsiteName}</h3>

        <div className="grid-container">
          <div className="details">
            <big className="info">{this.props.campsiteElevation} ft</big>
            <span className="infoDesc">Listing's elevation</span>
          </div>
          <div className="details">
            <big className="info">{this.props.campsiteTemperature}&deg;F</big>
            <span className="infoDesc">{this.props.campsiteWeather} today</span>
          </div>
          <div className="details">
            <big className="info">{this.props.campsiteDistance}hrs</big>
            <span className="infoDesc">Away, as the crow files</span>
          </div>
          {ninePhotos}
        </div>
      </section>
    );
  }
}
