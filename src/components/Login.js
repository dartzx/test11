import React from 'react';

import { GoogleLogin } from 'react-google-login';

import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = '600517270441-0bie9dg2m7jkvji9silf8ipitov43tf3.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
      console.log('Login Success: currentUser:', res.profileObj);
      alert(
        `Logged in successfully welcome ${res.profileObj.name}. \n See console for full profile object.`
      );
      fetch('/add_email', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          content_type: 'application/json',
        },
        body: JSON.stringify(res.profileObj),
      }).then((response) => response.json()); 

      refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };

    return (
        <div>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
          />
        </div>
      );
    }
    
    export default Login;