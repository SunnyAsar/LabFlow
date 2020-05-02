import { SET_SAMPLES, SET_SAMPLE } from '../Actions/actionConstants'

const initial = {
  samples: [],
  sample: {}
}

const sampleReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_SAMPLES:
      return {
        ...state,
        samples: action.payload
      }
    case SET_SAMPLE:
      return {
        ...state,
        sample: action.payload
      }

    default:
      return state
  }
}

export default sampleReducer
