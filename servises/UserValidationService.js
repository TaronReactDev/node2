const validationFunctions = {
    email: ({email}) => emailValidation(email),
    password: ({ password, confirmPassword }) =>  passwordValidation(password, confirmPassword),
    username: ({ userName }) => usernameValidation(userName),
}

module.exports = (data, type) => {

    const result = {
        isValid: false,
        fields: {},
        message: ''
    }

const keys =  type === "login" ? ["email", "password"] :  Object.keys(validationFunctions);

    keys.forEach(val => {
        const validationFunction = validationFunctions[val];
        result.fields[val] = validationFunction(data);

    })

    if (!Object.values(result.fields).find( el=> el.valid === false)){
        result.isValid = true
    }

    return result

}










function emailValidation(email) {
    const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return {
        valid: patternEmail.test(email),
        message: '1',
    }
}
function passwordValidation(password , confirmPassword) {
    const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return {
        valid: patternPassword.test(password),
        message: '2',
    }
}
function usernameValidation(userName) {
    return {
        valid: userName.length > 3,
        message: '3',
    }
}



