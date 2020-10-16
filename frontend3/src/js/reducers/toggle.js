const toggle = (state = { featureA : false }, action) => {
  switch (action.type) {
    case 'SET_FEATURE_A_TOGGLE':
      return {
        ...state,
        featureA: action.featureA
      }
    default:
      return state
  }
}

export default toggle