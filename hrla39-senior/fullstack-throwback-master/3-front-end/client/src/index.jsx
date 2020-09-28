import React from 'react';
import ReactDOM from 'react-dom';

import Create from './components/Create.jsx';
import Posts from './components/Posts.jsx';
import Post from './components/Post.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      view: 'posts'
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {
    if (this.state.view === 'posts') {
      return <Posts viewPost={this.changeView}/>
    } else if (this.state.view === 'create') {
      return <Create viewPost={this.changeView}/>
    } else {
      return <Post postId={this.state.view} />
    }
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo">Llamantations</span>
          <span className={this.state.view === 'posts'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('posts')}>
            See all Posts
          </span>
          <span className={this.state.view === 'create'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('create')}>
            Write a Post
          </span>
        </div>

        <div className="main">
          {this.renderView()}
       </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('llamantations'));
