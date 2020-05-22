import { combineReducers } from 'redux'
import patientReducer from './patientReducer'
import testReducer from './testReducer'
import sampleReducer from './sampleReducer'
import billReducer from './billReducer'
import dashboardReducer from './dashboardReducer'

const rootReducer = combineReducers({
  patient: patientReducer,
  test: testReducer,
  sample: sampleReducer,
  bill: billReducer,
  dashboard: dashboardReducer
})

export default rootReducer
