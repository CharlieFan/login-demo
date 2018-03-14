import { get, post } from './http'

export default {
    user: {
        /**
         * login api
         * @param data 
         */
        async login(data) {
            let res = await post('/login', data)
            console.log(res)
            
            return res
        },

        /**
         * signup api
         * @para data
         */
        async signup(data) {
            let res = await post('', data)
            return res
        }
    }
}