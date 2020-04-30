import { SET_SAMPLE, SET_SAMPLES } from './actionConstants'
import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3000/api'

const getSamples = () => {
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
