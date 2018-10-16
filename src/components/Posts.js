import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'

class Posts extends Component {
  render () {
    const posts = this.props.posts.length === 0
      ? 'no posts yet'
      : this.props.posts.map((post, i) => {
        return <div key={i}> {post.body} </div>
      })
    return (
      <div>
        <button onClick={this.props.onGetPosts}>getPosts</button>
        {posts}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // ...state
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetPosts: () => {
      dispatch(getPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
