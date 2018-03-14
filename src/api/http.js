import axios from 'axios'

const myAxios = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    }
})

function processData(data = {}) {
    return JSON.stringify(data)
}

const get = function (url, query = {}) {
    return myAxios.get(url, query).then(res => {
        if (res) {
            return res.data
        } 
    }).catch(err => {
        console.log(err)
        return err
    })
}

const post = function (url, data) {
    return myAxios.post(url, processData(data))
        .then(res => {
            if (res) {
                return res.data
            }
        })
        .catch(err => {
            console.log(err)
            return err
        })
}

export {
    get,
    post
}