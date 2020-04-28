import { combineReducers } from 'redux'
import PatientReducer from './patientReducer'

const rootReducer = combineReducers({
  patient: PatientReducer
})

export default rootReducer
