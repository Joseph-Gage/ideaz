import { UPDATE_SIGNED_IN } from '../Constants/action-types'

export const updateSignedIn = isSignedIn => ({ type: UPDATE_SIGNED_IN, payload: isSignedIn });
