import { UPDATE_LOGGED_IN } from '../Constants/action-types'

export const updateLoggedIn = isLoggedIn => ({ type: UPDATE_LOGGED_IN, payload: isLoggedIn });