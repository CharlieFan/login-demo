const setValue = (key, value) => {
    value = JSON.stringify(value)
    localStorage.setItem(key, value)
}

const getValue = (key) => {
    let value = localStorage.getItem(key)
    return JSON.parse(value)
}

export default {
    setValue,
    getValue
}