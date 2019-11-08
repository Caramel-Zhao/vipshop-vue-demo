import { BASEURL } from '../../commons/Config'

const LASTINFOURL = `${BASEURL}/lastInfo`

export default {
  async getLastInfo() {
    let res = await fetch(LASTINFOURL)
    let data = await res.json()
    return data
  }
}