import axios from 'axios'

const myAxios = axios.create({
    baseURL: 'http://base.com/api/',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    }
})

function processData(data = {}) {
    return JSON.stringify(data)
}

const get = function (url, query) {
    return myAxios.get(url, {

    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)

    })
}

const post = function (url, data) {
    return myAxios.post(url, processData(data))
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export {
    get,
    post
}