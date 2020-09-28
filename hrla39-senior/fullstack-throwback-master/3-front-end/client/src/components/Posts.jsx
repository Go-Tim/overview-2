import React from 'react';
import Axios from 'axios';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.getAllPosts = this.getAllPosts.bind(this);
  }

  componentDidMount(){
    this.getAllPosts();
  }

  getAllPosts() {
    Axios.get('/api/posts')
      .then((results) => {
        this.setState({
        posts: results.data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const postsArr = this.state.posts.map((post, index) => {
      return (
        <li key={index} className="post-list-entry" onClick={() => this.props.viewPost(post._id)}>
          <div className="post-list-entry-title">{post.title}</div>
          <span className="post-list-entry-stats">{post.votes} upvotes </span>
          <span className="post-list-entry-stats">{post.comments.length} comments</span>
        </li>
      );
    });
    return (
      <div>
        <h2>All Llamantations</h2>
        <ul>
          {postsArr}
        </ul>
      </div>
    )
  }
}
