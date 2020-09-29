import React from 'react';
import Axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      attractions: [],
      campsiteArea: '',
    };
    this.getAttractions = this.getAttractions.bind(this);
    this.getSite = this.getSite.bind(this);
  }

  componentDidMount() {
    this.getAttractions(window.location.pathname);
    this.getSite(window.location.pathname);
  }

  getAttractions(id) {
    Axios.get(`/api/photos${id}`)
      .then((results) => this.setState({
        attractions: results.data,
      }))
      .catch((err) => console.error(err));
  }

  getSite(id) {
    Axios.get(`/api/sites${id}`)
      .then((results) => {
        this.setState({
          campsiteArea: results.data[0].siteArea,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const attractionsArr = this.state.attractions.map((attraction, index) => (
      <div key={index}>
        <div>
          <div className="image"></div>
          <div className="name">{attraction.name}</div>
          <div className="distance">{attraction.distance}</div>
        </div>
      </div>
    ));

    return (
      <section>
        <div>
          <h3>The vibe at {this.state.campsiteArea}</h3>
          <div>
            <div>
              { attractionsArr }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
