import React from 'react';
import Axios from 'axios';

export default class Terrain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terrain: [],
    };
    this.getTerrain = this.getTerrain.bind(this);
  }

  componentDidMount() {
    this.getTerrain(this.props.path);
  }

  getTerrain(id) {
    Axios.get(`http://localhost:3003/api/terrain/${id}`)
      .then((results) => this.setState({
        terrain: results.data,
      }))
      .catch((err) => console.error(err));
  }

  render() {
    const terrainArr = this.state.terrain.map((terrain, index) => (
      <div className="unit" key={index}>
        <div className="borderbox">
          <img className="bigIcon" src={terrain.image} alt={terrain.name} />
        </div>
        <span className="bigIconDesc">{terrain.name}</span>
      </div>
    ));

    return (
      <section className="sections">
        <h3 className="header">Terrain</h3>
        <p className="headerDesc">Natural features you'll find at {this.props.campsiteName} in {this.props.campsiteState}</p>
        <div className="flex-box">
          {terrainArr}
        </div>
      </section>
    );
  }
}
