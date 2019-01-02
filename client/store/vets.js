import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_VETS = 'GET_VETS'

/**
 * INITIAL STATE
 */
const defaultVets = []

/**
 * ACTION CREATORS
 */
const getVets = vets => ({type: GET_VETS, payload: vets})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
