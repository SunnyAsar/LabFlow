import { SET_BILLS, SET_BILL, BASE_URL } from './actionConstants'
import axios from 'axios'

export const getBills = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/bills`)
      .then((res) => {
        console.log(res)
        dispatch({ type: SET_BILLS, payload: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
