import { combineReducers } from 'redux'
import PatientReducer from './patientReducer'
import TestReducer from './testReducer'

const rootReducer = combineReducers({
  patient: PatientReducer,
  test: TestReducer
})

export default rootReducer
