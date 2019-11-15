// const BASE_URL = "http://122.51.57.152:3000"
const BASE_URL = "http://localhost:3000"

const LOGIN_URL = `${BASE_URL}/login`;
const VERIFY_URL = `${BASE_URL}/login/verify`;

export default {
  async handleToLogin(param) {
    let res = await fetch(LOGIN_URL, {
      method: 'POST',
      credentials: 'include',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(param)
    });
    return await res.json()
  },
  async handleToVerify(email) {
    let res = await fetch(`${VERIFY_URL}?email=${email}`, {
      method: 'GET',
      credentials: 'include'
    });
    return await res.json()
  }
}