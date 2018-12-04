import React, { Component } from 'react';

//Import Header into the component.
import Header from './Header/Header';

//Import Componse into the component.
import Compose from './Compose/Compose';

//Import Post into the component
import Post from './Post/Post';

// Import axios into the component.
import axios from 'axios';

import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  

  // Now that we have axios imported, we can go into the componentDidMount method and make a GET request to the API. 
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts').then(results => {
      this.setState( {posts: results.data } );
    });
  }

  // Because the id and text of the post will be different every time the method is called we should use an id and text parameter for the method.
  // We can then use these parameters to construct our axios request and use the returned data to update posts on state. 
  updatePost( id, text ) {
    axios.post(`https://practiceapi.devmountain.com/api/posts?id=${id}`, {text}).then(results => {
      this.setState({posts: results.data});
    });
  }

  deletePost() {

  }

  createPost() {

  }

  //  In the render method, we'll need to update the map to include two new props on the Post component.

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />

          {
            posts.map( post => (

              <Post key=
              { post.id }
              text = { post.text } 
              date = { post.date }
              id = { post.id}
              updatePostFn = { this.updatePost}
              />

            ))
          }
          
        </section>
      </div>
    );
  }
}

export default App;

// Notes:

// Remember when using a map in the render method, the element needs a unique key property. In this case, we can use the id of the post
