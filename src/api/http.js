import axios from 'axios'
import storage from 'utils/storage'

const myAxios = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        'x-auth': storage.getValue('client')
    }
})

function processData(data = {}) {
    return JSON.stringify(data)
}

const get = function (url, query = {}) {
    return myAxios.get(url, query).then(res => {
        if (res) {
            console.log(res)
            
            return res.data
        } 
    }).catch(err => {
        console.log(err)
        errorHandler(err)
    })
}

const post = function (url, data) {
    return myAxios.post(url, processData(data))
        .then(res => {
            if (res) {
                if (res.headers['x-auth']) {
                    return {
                        data: res.data,
                        token: res.headers['x-auth']
                    }
                }

                return res.data
            }
        })
        .catch(err => {
            errorHandler(err)
        })
}

const errorHandler = function(err) {
    // console.log(JSON.parse(JSON.stringify(err)));
    console.log(err.response)
    let code = err.response.status
    let msg = err.response.data.message

    if (code === 401) {
        storage.removeValue('client')
    }
    throw new Error(msg)
}

export {
    get,
    post
}