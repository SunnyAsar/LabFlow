import { SET_TESTS, ADD_TEST, BASE_URL } from '../Actions/actionConstants'
import axios from 'axios'

export const getTests = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/tests`)
      .then((res) => {
        console.log(res)
        dispatch({ type: SET_TESTS, payload: res.data })
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
}

export const postTest = (data) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/tests`, data)
      .then((res) => {
        dispatch({ type: ADD_TEST, payload: res.data })
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
}
