import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

import { loginSocialMedia } from './UserFunctions'
import { browserHistory } from 'react-router';

const config = require('../conf/config')

const responseGoogle = (response) => {
    loginSocialMedia(response).then(res => {
        if (res) {
            browserHistory.push(`/profile`)
            window.location.reload()
        }
        console.log(res)
    })
}

const responseGoogleFail = (response) => {
    localStorage.removeItem('usertoken')
    browserHistory.push(`/`)
    window.location.reload()
}

class SocialMediaLogin extends Component {
    
    render () {
        return (
            <div className="form-group">
                <GoogleLogin
                    clientId={config.googleCredentias.web.client_id}
                    buttonText="Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogleFail}
                />
            </div>
        )
    }
}

export default SocialMediaLogin