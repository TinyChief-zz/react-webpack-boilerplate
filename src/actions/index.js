import axios from 'axios'

export const getPosts = () => {
  return dispatch => {
    dispatch({ type: 'GET_POSTS_STARTED' })

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        dispatch({ type: 'GET_POSTS_SUCCESS', payload: res.data })
      })
      .catch(err => {
        dispatch({ type: 'GET_POSTS_FAILURE', payload: { err } })
      })
  }
}
