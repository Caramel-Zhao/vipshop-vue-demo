import { BASEURL } from '../../commons/Config'

const USERINFOURL = `${BASEURL}/userInfo`

export default {
  async getUserInfo() {
    let res = await fetch(USERINFOURL)
    let data = await res.json()
    return data
  }
}