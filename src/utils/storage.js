const setValue = (key, value) => {
    value = JSON.stringify(value)
    localStorage.setItem(key, value)
}

const getValue = (key) => {
    let value = localStorage.getItem(key)
    return JSON.parse(value)
}

const removeValue = (key) => {
    localStorage.removeItem(key)
}

export default {
    setValue,
    getValue,
    removeValue
}