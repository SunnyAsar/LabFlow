import { SET_DASHBOARD } from '../Actions/actionConstants'

const inital = {
  counts: {
    samples: 0,
    patients: 0,
    bills: 0,
    test: 0
  }
}

const dashboardReducer = (state = inital, action) => {
  switch (action.type) {
    case SET_DASHBOARD:
      return {
        ...state,
        counts: action.payload.counts
      }
    default:
      return state
  }
}

export default dashboardReducer
