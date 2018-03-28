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
    /**
     * add a todo
     */
    async addTodo(data) {
        try {
            let res = await post('/todos/add', data)
            return res
        } catch (err) {
            throw err
        }
    },
    /**
     * edit a todo
     */
    async editTodo(data) {
        try {
            let res = await post('/todos/edit', data)
            return res
        } catch (err) {
            throw err
        }
    },
    /**
     * delete a todo
     */
    async deleteTodo(data) {
        try {
            let res = await post('/todos/delete', data)
            return res
        } catch(err) {
            throw err
        }
    }
}