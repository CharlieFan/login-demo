import { get, post } from './http'
import storage from 'utils/storage'

export default {
    user: {
        /**
         * login api
         * @param data 
         */
        async login(data) {
            try {
                let res = await post('/login', data)
                if (res.token) {
                    storage.setValue('client', res.token)
                    return res.data
                }
            } catch (err) {
                throw err
            }
        },

        /**
         * signup api
         * @param data
         */
        async signup(data) {
            try {
                let res = await post('/signup', data)
                if (res && res.token) {
                    storage.setValue('client', res.token)
                    return res.data
                }
            } catch (err) {
                throw err
            }
        },

        /**
         * get user info api
         */
        async getUserInfo() {
            try {
                let res = await get('/getUserInfo')
                return res
            } catch (err) {
                throw err
            }
        }
    }
}