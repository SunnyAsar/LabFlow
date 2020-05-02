import { combineReducers } from 'redux'
import patientReducer from './patientReducer'
import testReducer from './testReducer'
import sampleReducer from './sampleReducer'

const rootReducer = combineReducers({
  patient: patientReducer,
  test: testReducer,
  sample: sampleReducer
})

export default rootReducer
