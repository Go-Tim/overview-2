import React from 'react';
import Axios from 'axios';
import { FaCamera } from 'react-icons/fa';
import PhotosModal from './PhotosModal.jsx';

export default class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      show: false,
      index: '',
    };
    this.getPhotos = this.getPhotos.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    this.getPhotos(this.props.path);
  }

  getPhotos(id) {
    Axios.get(`/api/photos/${id}`)
      .then((results) => this.setState({
        photos: results.data,
      }))
      .catch((err) => console.error(err));
  }

  showModal(index) {
    this.setState({
      show: true,
      index: index,
    });
  }

  hideModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    const photosArr = this.state.photos.map((photo, index) => {
      if (index === 8) {
        return (
            <div className="photogrid" key={index} onClick={() => this.showModal(index)}>
              <div className="ninethPhoto">
                <big className="camera-icon"><FaCamera /></big>
                <span className="camera-icon-desc">See all {this.state.photos.length} photos</span>
              </div>
              <img className="photogrid-photo" src={photo.photo} alt="campsite" />
            </div>
        );
      }
      return (
        <div className="photogrid" key={index} onClick={() => this.showModal(index)}>
          <img className="photogrid-photo" src={photo.photo} alt="campsite" />
          <div className="photogrid-author">
            <img className="photogrid-avatar" src={photo.userImage} alt={photo.userName} />
            <span className="photogrid-name">{photo.userName}</span>
          </div>
        </div>
      );
    });

    return (
      <section className="sections">
        <PhotosModal
          show={this.state.show}
          handleClose={this.hideModal}
          photos={this.state.photos}
          campsiteName={this.props.campsiteName}
          campsiteArea={this.props.campsiteArea}
          propIndex={this.state.index}
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
          {photosArr.slice(0, 9)}
        </div>
      </section>
    );
  }
}
