import { combineReducers } from 'redux'
import postsReducer from './posts'
import guestReducer from './guests'

export default combineReducers({
  posts: postsReducer,
  guests: guestReducer
})
