import React from 'react';
import Axios from 'axios';

export default class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
    };
    this.getActivities = this.getActivities.bind(this);
  }

  componentDidMount() {
    this.getActivities(this.props.path);
  }

  getActivities(id) {
    Axios.get(`/api/activities/${id}`)
      .then((results) => this.setState({
        activities: results.data,
      }))
      .catch((err) => console.error(err));
  }

  render() {
    const activitiesArr = this.state.activities.map((activity, index) => (
      <div className="unit" key={index}>
        <div className="borderbox">
          <img className="bigIcon" src={activity.image} alt={activity.name} />
        </div>
        <span className="bigIconDesc">{activity.name}</span>
      </div>
    ));
    return (
      <section className="sections">
        <h3 className="header">Activities</h3>
        <p className="headerDesc">Offered on the Host's property or nearby.</p>
        <div className="flex-box">
          {activitiesArr}
        </div>
      </section>
    );
  }
}
