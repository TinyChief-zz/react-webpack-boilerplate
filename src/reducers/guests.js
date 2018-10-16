const reducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1
  }
  if (action.type === 'DICREMENT') {
    return state - 1
  }
  return state
}

export default reducer
