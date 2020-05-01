import { SET_SAMPLE, SET_SAMPLES, BASE_URL } from './actionConstants'
import axios from 'axios'

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
