import { BASEURL } from '../../commons/Config'

const HOMEINFOURL = `${BASEURL}/homeInfo`
const MINCATEINFOURL = `${BASEURL}/categoryInfo`
const RECOINFOURL = `${BASEURL}/recommendInfo`
const INTERINFOURL = `${BASEURL}/internationalInfo`
//recommendInfo

export default {
  async getHomeInfo(){
    let res = await fetch(HOMEINFOURL)
    let data = await res.json()
    return data
  },
  async getMinCateInfo(){
    let res = await fetch(MINCATEINFOURL)
    let data = await res.json()
    return data
  },
  async getRecommendInfo(){
    let res = await fetch(RECOINFOURL)
    let data = await res.json()
    return data
  },
  async getInternationalInfo(){
    let res = await fetch(INTERINFOURL)
    let data = await res.json()
    return data
  }
}