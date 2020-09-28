import React from 'react';
import Axios from 'axios';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleSumbit() {
    Axios.post('/api/posts',
    {
      "title": this.state.title,
      "body": this.state.body,
    })
      .then(() => {
        this.props.viewPost('posts')
      })
      .catch(err => console.error(err));
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  }


  render() {
    return (
      <div>
        <h2>New Post</h2>
        <form>
          <input name="title" onChange={this.handleChange} className="create-title-input" type="text" placeholder="Post Title"></input>
          <textarea name="body" className="create-body-textarea" onChange={this.handleChange} placeholder="Post Body"></textarea>
          <button className="create-submit-button" type="submit" onClick={this.handleSumbit}>Save post</button>
        </form>
      </div>
    )
  }
}

