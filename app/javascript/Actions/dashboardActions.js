import axios from 'axios'
import { BASE_URL } from '../Actions/actionConstants'

export const getDasboard = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        console.log('... the dash data is here')
      })
      .catch((err) => {
        console.log(res)
      })
  }
}
