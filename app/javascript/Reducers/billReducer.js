import { SET_BILLS, SET_BILL } from '../Actions/actionConstants'

const intial = {
  bills: [],
  bill: {}
}

const billReducer = (state = intial, action) => {
  switch (action.type) {
    case SET_BILLS: {
      return {
        ...state,
        bills: action.payload
      }
    }
    case SET_BILL: {
      return {
        ...state,
        bill: action.payload
      }
    }
    default:
      return state
  }
}

export default billReducer
