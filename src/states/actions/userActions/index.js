import ActionTypes from './types'
import { createAction } from '../utils'
import api from 'api'

// sync:
const updateUserInfo = createAction(ActionTypes['UPDATE_USER_INFO'])

// async:
const getUserInfo = () => {
    return async (dispatch) => {
        let res = await api.user.getUserInfo()
        dispatch(updateUserInfo(res))
    }
}


export default {
    updateUserInfo,
    getUserInfo
}