import { get, post } from './http'

export default {
    /**
     * get todo list api
     */
    async getList() {
        try {
            let res = await get('/todos/getList')
            return res
        } catch (err) {
            throw err
        }
    },
}