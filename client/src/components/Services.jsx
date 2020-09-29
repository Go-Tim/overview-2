import React from 'react';
import Axios from 'axios';

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      campsiteName: '',
    };
    this.getServices = this.getServices.bind(this);
    this.getSite = this.getSite.bind(this);
  }

  componentDidMount() {
    this.getServices(window.location.pathname);
    this.getSite(window.location.pathname);
  }

  getServices(id) {
    Axios.get(`/api/services${id}`)
      .then((results) => this.setState({
        services: results.data,
      }))
      .catch((err) => console.error(err));
  }

  getSite(id) {
    Axios.get(`/api/sites${id}`)
      .then((results) => {
        this.setState({
          campsiteName: results.data[0].siteName,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    if (this.state.services.length > 0) {
      const servicesArr = this.state.services.map((service, index) => (
        <div key={index} className="innerbox">
          <div className="innerinnerbox">
            <div className="top">
              <span className="icon">
                <img src={service.image} alt="service image" />
              </span>
              <span className="price">
                {service.price}
              </span>
            </div>
            <h2>{service.name}</h2>
            <div>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ));
      return (
        <section>
          <h3>You know what would make this trip even better?</h3>
          <p>Take advantage of these offers available to add to your trip to {this.state.campsiteName}</p>
          <div className="outerbox">
            {servicesArr}
          </div>
        </section>
      );
    }
    return null;
  }
}
