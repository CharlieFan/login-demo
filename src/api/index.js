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
                console.log(res)
                if (res.token) {
                    storage.setValue('client', res.token)
                    return res.data
                }
            } catch (err) {
                console.log(err)
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
                if (res) {
                    return res
                }
            } catch (err) {
                throw err
            }
        }
    }
}