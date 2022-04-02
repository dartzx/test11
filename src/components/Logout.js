import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '600517270441-0bie9dg2m7jkvji9silf8ipitov43tf3.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
      console.log('Logout made successfully');
      alert('Logout made successfully ✌');
    };
    
    return (
        <div>
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
          ></GoogleLogout>
        </div>
      );
    }
    
    export default Logout;