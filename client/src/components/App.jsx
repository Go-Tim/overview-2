import React from 'react';
import Axios from 'axios';
import Services from './Services.jsx';
import Activities from './Activities.jsx';
import Terrain from './Terrain.jsx';
import PhotoGrid from './PhotoGrid.jsx';
import Attractions from './Attractions.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Services />
        <br></br>
        <Activities />
        <br></br>
        <Terrain />
        <br></br>
        <PhotoGrid />
        <br></br>
        <Attractions />
        <br></br>
      </div>
    );
  }
}
