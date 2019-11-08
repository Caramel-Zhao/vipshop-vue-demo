import { BASEURL } from '../../commons/Config'

const HOTSEARCHINFOURL = `${BASEURL}/hotSearch`

export default {
  async getHotSearchInfo() {
    let res = await fetch(HOTSEARCHINFOURL)
    let data = await res.json()
    return data
  }
}