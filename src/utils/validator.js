const Validation = {
    rules: {
        required(value) {
            if (value) {
                return true
            } 
            return false
        }
    },

    validator(value, rules) {

    }
}

export default Validation