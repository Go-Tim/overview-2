import React from 'react';
import Axios from 'axios';

export default class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      campsite: [],
    };
    this.getPhotos = this.getPhotos.bind(this);
    this.getSite = this.getSite.bind(this);
  }

  componentDidMount() {
    this.getPhotos(window.location.pathname);
    this.getSite(window.location.pathname);
  }

  getPhotos(id) {
    Axios.get(`/api/photos${id}`)
      .then((results) => this.setState({
        photos: results.data,
      }))
      .catch((err) => console.error(err));
  }

  getSite(id) {
    Axios.get(`/api/sites${id}`)
      .then((results) => {
        this.setState({
          campsite: results.data,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const photosArr = this.state.photos.map((photo, index) => (
      <div key={index}>
        <div className="img">
          <div className="author">
            <img src={photo.userImage} alt={photo.userName}></img>
            <span>{photo.userName}</span>
          </div>
        </div>
      </div>
    ));

    return (
      <section>
        <h3>The vibe at </h3>
        <div className="container">
          <div>
            <div className="info">
              <div>
                <big></big>
                <span></span>
              </div>
            </div>
            <div className="info">
              <div>
                <big></big>
                <span></span>
              </div>
            </div>
            <div className="info">
              <div>
                <big></big>
                <span></span>
              </div>
            </div>
            {photosArr}
            </div>
          </div>
      </section>
    );
  }
}
