import axios from 'axios'
import storage from 'utils/storage'
const baseURL = process.env.NODE_ENV === 'production' ? 'https://login-demo-express.herokuapp.com/api' : 'http://localhost:5000/api'

const myAxios = axios.create({
    baseURL: baseURL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    }
})

function processData(data = {}) {
    return JSON.stringify(data)
}

const get = function (url, query = {}) {
    let token = storage.getValue('client')
    
    return myAxios.get(url, {
        query,
        headers: {
            'x-auth': token || ''
        }
    }).then(res => {
        if (res) {
            // console.log(res)
            return res.data
        } 
    }).catch(err => {
        // console.log(err)
        errorHandler(err)
    })
}

const post = function (url, data) {
    let token = storage.getValue('client')

    return myAxios.post(url, processData(data), {
        headers: {
            'x-auth': token || ''
        }
    })
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
    let code = err.response.status
    let msg = err.response.data.message

    if (code === 401) {
        window.location.href = '/'
    }
    throw new Error(msg)
}

export {
    get,
    post
}