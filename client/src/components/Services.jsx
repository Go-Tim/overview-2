import React from 'react';
import Axios from 'axios';
import ServicesModal from './ServicesModal.jsx';

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      present: '',
      show: false,
      modal: [],
    };
    this.getServices = this.getServices.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    this.getServices(this.props.path);
  }

  getServices(id) {
    Axios.get(`/api/services/${id}`)
      .then((results) => this.setState({
        services: results.data,
        present: results.data[0].name,
      }))
      .catch((err) => console.error(err));
  }

  showModal(service) {
    this.setState({
      show: true,
      modal: service,
    });
  }

  hideModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    if (this.state.present !== 'null') {
      const servicesArr = this.state.services.map((service, index) => (
        <div className="services" key={index}>
          <div className="servicesTop">
            <img className="serviceIcon" src={service.image} alt={service.name} />
            <span className="priceTag">
              {service.price === 'free' ? null : '$'}{service.price}
            </span>
          </div>
          <h2 className="serviceHeader">{service.name}</h2>
          <div>
            <p className="serviceDesc">{service.description.substring(0, 77)}...<a className="read-more" onClick={() => this.showModal(service)}>Read More</a></p>
          </div>
        </div>
      ));
      return (
        <section className="sections">
          <ServicesModal
            show={this.state.show}
            handleClose={this.hideModal}
            service={this.state.modal}
          />
          <h3 className="header">You know what would make this trip even better?</h3>
          <p className="headerDesc">Take advantage of these offers available to add to your trip to {this.props.campsiteName}</p>
          <div className="flex-box">
            {servicesArr}
          </div>
        </section>
      );
    }
    return null;
  }
}
