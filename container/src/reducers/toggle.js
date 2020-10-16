const toggle = (state = { features : {} }, action) => {
  switch (action.type) {
    case 'SET_FEATURE_TOGGLE':
      return {
        ...state,
        features: action.features
      }
    default:
      return state
  }
}

export default toggle