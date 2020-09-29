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
    this.getActivities(window.location.pathname);
  }

  getActivities(id) {
    Axios.get(`/api/activities${id}`)
      .then((results) => this.setState({
        activities: results.data,
      }))
      .catch((err) => console.error(err));
  }

  render() {
    const activitiesArr = this.state.activities.map((activity, index) => (
      <div key={index}>
        <div>
          <span className="bigIcon">
            <img src={activity.image} alt={activity.name}></img>
          </span>
        </div>
        <span className="bigIconName">{activity.name}</span>
      </div>
    ));
    return (
      <section>
        <h3>Activities</h3>
        <p>Offered on the Host's property or nearby.</p>
        <div>
          {activitiesArr}
        </div>
      </section>
    );
  }
}
