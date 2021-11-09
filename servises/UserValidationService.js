const validationFunctions = {
    email: ({email}) => emailValidation(email),
    password: ({ password, confirmPassword }) =>  passwordValidation(password, confirmPassword),
    username: ({ username }) => usernameValidation(username),
    firstName: ({ firstName }) => nameValidation(firstName),
    lastName: ({ lastName }) => nameValidation(lastName),
}

module.exports = (data, type) => {
    const result = {
        isValid: false,
        fields: {},
        message: ''
    }

    // validate required fields by each type


    Object.keys(validationFunctions).forEach(val => {
        const validationFunction = validationFunctions[val];
        result.fields[val] = validationFunction(data)
    })

    // check if all fields validation is true and set result isValid true

    return result

}

function emailValidation(email) {
    const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return {
        valid: true,
        message: '',
    }
}

function passwordValidation(password , confirmPassword) {
    const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return {
        valid: true,
        message: '',
    }
}

function usernameValidation(username) {
    return {
        valid: true,
        message: '',
    }
}

function nameValidation(name) {
    return {
        valid: true,
        message: '',
    }
}