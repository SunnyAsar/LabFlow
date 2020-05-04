import { SET_PATIENT, SET_PATIENTS, BASE_URL } from './actionConstants'
import axios from 'axios'

export const PostPatient = (data, token, history) => {
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
        history.push('/patients')
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
}

export const getPatients = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/patients`)
      .then((res) => {
        console.log(res.data)
        dispatch({ type: SET_PATIENTS, payload: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
