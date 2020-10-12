import React from 'react';
import Axios from 'axios';

export default class Attractions extends React.Component {
  constructor() {
    super();
    this.state = {
      attractions: [],
    };
    this.getAttractions = this.getAttractions.bind(this);
  }

  componentDidMount() {
    this.getAttractions(this.props.path);
  }

  getAttractions(id) {
    Axios.get(`/api/attractions/${id}`)
      .then((results) => this.setState({
        attractions: results.data,
      }))
      .catch((err) => console.error(err));
  }

  render() {
    const attractionsArr = this.state.attractions.map((attraction, index) => {
      if (attraction.name.length > 23) {
        return (
          <div className="attractions" key={index}>
            <img src={attraction.image} alt={attraction.name} className="attractionImg" />
            <div className="attractionName">{attraction.name.substring(0, 23)}...</div>
            <div className="attractionDistance">{attraction.distance} miles away <a className="explore">Explore</a></div>
          </div>
        );
      }
      return (
        <div className="attractions" key={index}>
          <img src={attraction.image} alt={attraction.name} className="attractionImg" />
          <div className="attractionName">{attraction.name}</div>
          <div className="attractionDistance">{attraction.distance} miles away <a className="explore">Explore</a></div>
        </div>
      );
    });

    return (
      <section className="sections">
        <h3 className="header">Places to see near {this.props.campsiteArea}</h3>
        <div className="scrollmenu-container">
          <div className="scrollmenu">
            {attractionsArr}
          </div>
        </div>
      </section>
    );
  }
}
