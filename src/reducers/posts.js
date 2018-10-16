// import initialState from '../initState'

// const initialState = {
//   posts: []
// }

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS_STARTED':
      console.log('starting fetch')
      return state

    case 'GET_POSTS_FAILURE':
      console.log(action.payload)
      return state

    case 'GET_POSTS_SUCCESS':
      return action.payload
  }
  return state
}

export default reducer
