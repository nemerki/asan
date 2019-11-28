import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  loginRequest: ['mobile', 'password'],
  loginSuccess: ['mobile'],
  loginFailure: ['error'],
  logout: null,
  autoLogin: null
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  mobile: null,
  password:null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const LoginSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */
//
// // request the data from an api
// export const request = (state, {data}) =>
//   state.merge({fetching: true, data, payload: null})
// export const request = (state) => state.merge({ fetching: true })
//
//
// // successful api lookup
// export const success = (state, action) => {
//   const {payload} = action
//   return state.merge({fetching: false, error: null, payload})
// }
//
// // Something went wrong somewhere.
// export const failure = state =>
//   state.merge({fetching: false, error: true, payload: null})

// we're attempting to login
// export const request = (state) => state.merge({fetching: true})
export const request = (state, { mobile,password }) =>
  state.merge({ fetching: true, mobile, password })

// we've successfully logged in
export const success = (state, {mobile}) =>
  state.merge({fetching: false, error: null, mobile})

// we've had a problem logging in
export const failure = (state, {error}) =>
  state.merge({fetching: false, error})

// we've logged out
export const logout = (state) => INITIAL_STATE

// startup saga invoked autoLogin
export const autoLogin = (state) => state

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout,
  [Types.AUTO_LOGIN]: autoLogin
})

