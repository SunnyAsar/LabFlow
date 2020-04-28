import { SET_PATIENT, SET_PATIENTS } from './actionConstants'
import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3000/api'

export const PostPatient = (data, token) => {
  return (dispatch) => {
    console.log('in action', token)
    axios
      .post(`${BASE_URL}/patients`, data, {
        headers: {
          'X-CSRF-Token': `${token}`
        }
      })
      .then((res) => {
        dispatch({ type: SET_PATIENT, payload: res.data })
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
}
