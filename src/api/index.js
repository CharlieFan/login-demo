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
         * @para data
         */
        async signup(data) {
            let res = await post('/signup', data)
            return res
        }
    }
}