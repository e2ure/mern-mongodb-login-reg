import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
        })
        .then(res => {
            console.log('Registered!')
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const loginSocialMedia = socialRes => {
    return axios
        .post('users/login/google', {
            tokenId:socialRes.tokenId
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}