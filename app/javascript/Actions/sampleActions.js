import { SET_SAMPLE, SET_SAMPLES, BASE_URL } from './actionConstants'
import axios from 'axios'

export const getSamples = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/samples`)
      .then((res) => {
        console.log(res.data)
        dispatch({ type: SET_SAMPLES, payload: res.data })
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
}

export const postSamples = (samples, history) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/samples`, samples)
      .then((res) => {
        console.log(res)
        dispatch({ type: SET_SAMPLES, payload: res.data })
        // history.push('/samples')
      })
      .catch((err) => {
        console.log('error here .........')
        console.log(err)
      })
  }
}

export const getSample = (id) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/samples/${id}`)
      .then((res) => {
        console.log(res)
        dispatch({ type: SET_SAMPLE, payload: res.data })
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
}
