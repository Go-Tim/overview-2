import React from 'react';
import Axios from 'axios';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      upvotes: '',
      comments: [],
      newComment: '',
    };
    this.getPost = this.getPost.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getPost(this.props.postId);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      newComment: e.target.value
    });
  }

  getPost(id) {
    Axios.get(`/api/posts/${id}`)
      .then((results) => {
        this.setState({
          post: results.data,
          comments: results.data.comments,
          upvotes: results.data.votes
        });
      })
      .catch(err => console.error(err));
  }

  handleAddComment(id) {
    Axios.post(`/api/posts/${id}/comments`,
    {
      "comment": [this.state.newComment]
    })
    .then((results) => {
      this.setState({
        post: results.data,
        comments: results.data.comments,
        upvotes: results.data.votes
      });
    })
    .catch(err => console.error(err));
  }

  handleUpvote(id) {
    Axios.post(`/api/posts/${id}/votes`,
    {
      "votes": 1
    })
    .then((results) => {
      this.setState({
        post: results.data,
        comments: results.data.comments,
        upvotes: results.data.votes
      });
    })
    .catch(err => console.error(err));
  }

  render() {
    var commentsArr = this.state.comments.map((comment, index) => {
      return (
        <li key={index} className="comment-entry">{comment}</li>
      )
    });
    return (
      <div>
        <h3>{this.state.post.title}</h3>
        <p>{this.state.post.body}</p>
        <hr />
        <span className="post-stats" onClick={() => this.handleUpvote(this.props.postId)}>{this.state.upvotes} upvotes</span>
        <span className="post-stats post-stats-comments">{this.state.comments.length} comments</span>
        <div>
          <textarea onChange={this.handleChange} className="comment-input" placeholder="Add your comment here!"></textarea>
          <button className="comment-submit" onClick={() => this.handleAddComment(this.props.postId)}>Save comment</button>
        </div>
        <ul>
          {commentsArr}
        </ul>
      </div>
    )
  }
}
