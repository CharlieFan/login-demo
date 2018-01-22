const validateRules = {
    required(value) {
        return new Promise((resolve, reject) => {
            if (value) {
                resolve(true)
            } else {
                reject(new Error('is required'))
            }
        })
    },
    isEmail(value) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

        return new Promise((resolve, reject) => {
            if (pattern.test(value)) {
                resolve(true)
            } else {
                reject(new Error('is in invalid email format'))
            }
        })
    },
    maxLength(length) {
        return function(value) {
            return new Promise((resolve, reject) => {
                if (value.length >= length) {
                    reject(new Error(`should be less than ${length} charachers`))
                } else {
                    resolve(true)
                }
            })
        }
    },
    minLength(length) {
        return function(value) {
            return new Promise((resolve, reject) => {
                if (value.length < length) {
                    reject(new Error(`should be more than ${length} charachers`))
                } else {
                    resolve(true)
                }
            })
        }
    }
}

async function validator(value, ...rules) {
    // console.log(rules)
    try {
        await Promise.all(rules.map(rule => {
            return rule(value)
        }))

        return true
    } catch (err) {
        throw err
    }
}

export {
    validateRules,
    validator
}