import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  destinationAddressRequest: ['startLongLat', 'endLongLat'],
  destinationAddressSuccess: ['payload'],
  destinationAddressFailure: null
})

export const DestinationAddressTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  startLongLat: [],
  endLongLat: [],
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const DestinationAddressSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, {startLongLat, endLongLat}) =>
  state.merge({fetching: true, startLongLat, endLongLat, payload: null})

// successful api lookup
export const success = (state, action) => {
  const {payload} = action
  return state.merge({fetching: false, error: null, payload})
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({fetching: false, error: true, payload: null})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DESTINATION_ADDRESS_REQUEST]: request,
  [Types.DESTINATION_ADDRESS_SUCCESS]: success,
  [Types.DESTINATION_ADDRESS_FAILURE]: failure
})
