import { BASEURL } from '../../commons/Config'

const PRODUCTSINFOURL = `${BASEURL}/categoryProductsInfo`

export default {
  async getProductsInfo() {
    let res = await fetch(PRODUCTSINFOURL)
    let data = await res.json()
    return data
  }
}