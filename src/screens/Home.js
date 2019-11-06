import React, { Component } from 'react';

import Header from '../components/Header';
import PostList from '../components/PostList';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <PostList />
      </>
    )
  }
}
