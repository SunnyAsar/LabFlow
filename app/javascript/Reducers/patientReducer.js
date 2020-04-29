import { SET_PATIENTS, SET_PATIENT } from '../Actions/actionConstants'

const initial_state = { patients: [], patient: {} }

const patientReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SET_PATIENT:
      return {
        ...state,
        patient: action.payload
      }
    case SET_PATIENTS:
      return {
        ...state,
        patients: action.payload
      }
    default:
      return state
  }
}

export default patientReducer
