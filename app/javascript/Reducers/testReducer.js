import { SET_TESTS, ADD_TEST } from '../Actions/actionConstants'

const initial = {
  tests: [],
  test: {}
}

const testReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_TESTS:
      return {
        ...state,
        tests: action.payload
      }
    case ADD_TEST:
      return {
        ...state,
        tests: [action.payload, ...state.tests]
      }
    default:
      return state
  }
}

export default testReducer
