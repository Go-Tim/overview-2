import React from 'react';
import Axios from 'axios';
import Activities from './Activities.jsx';
import Attractions from './Attractions.jsx';
import Photos from './Photos.jsx';
import Services from './Services.jsx';
import Terrain from './Terrain.jsx';

const App = () => (
  <div>
    <Services />
    <hr />
    <Activities />
    <hr />
    <Terrain />
    <hr />
    <Photos />
    <hr />
    <Attractions />
    <hr />
  </div>
);

export default App;
