import React from 'react';
import Axios from 'axios';

export default class Terrain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terrain: [],
      campsiteName: '',
      campsiteState: '',
    };
    this.getTerrain = this.getTerrain.bind(this);
    this.getSite = this.getSite.bind(this);
  }

  componentDidMount() {
    this.getTerrain(window.location.pathname);
    this.getSite(window.location.pathname);
  }

  getTerrain(id) {
    Axios.get(`/api/terrain${id}`)
      .then((results) => this.setState({
        terrain: results.data,
      }))
      .catch((err) => console.error(err));
  }

  getSite(id) {
    Axios.get(`/api/sites${id}`)
      .then((results) => {
        this.setState({
          campsiteName: results.data[0].siteName,
          campsiteState: results.data[0].siteState,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const terrainArr = this.state.terrain.map((terrain, index) => (
      <div key={index}>
        <div>
          <span className="icon">
            <img src={terrain.image} alt={terrain.name}></img>
          </span>
        </div>
        <span className="name">{terrain.name}</span>
      </div>
    ));

    return (
      <section>
        <h3>Terrain</h3>
        <p>Natural features you'll find at {this.state.campsiteName} in {this.state.campsiteState}</p>
        <div>
          {terrainArr}
        </div>
      </section>
    );
  }
}
