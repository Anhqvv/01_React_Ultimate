//export TYPE
export const FETCH_USER_LOGIN_SUCCESS = 'FETCH_USER_LOGIN_SUCCESS'

//action
export const DoLogin = data => {
  return {
    type: 'FETCH_USER_LOGIN_SUCCESS',
    payload: data
  }
}
