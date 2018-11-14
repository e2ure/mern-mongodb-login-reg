import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

import { loginSocialMedia } from './UserFunctions'

const config = require('../conf/config')

const responseGoogle = (response) => {
    loginSocialMedia(response).then(res => {
        /*if (res) {
            this.props.history.push(`/profile`)
        }*/
        console.log(res)
    })
}

class SocialMediaLogin extends Component {
    render () {
        return (
            <div className="form-group">
                <GoogleLogin
                    clientId={config.googleCredentias.web.client_id}
                    buttonText="Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </div>
        )
    }
}

export default SocialMediaLogin