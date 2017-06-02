import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

class CustomNavigation extends React.Component {
	render() {
		return (
			<div>
			<a href="/" style={{ textDecoration: 'none' }}><font color="white">Pretzel</font></a>
			<GoogleLogin 
		    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
		    buttonText="Login"
		    onSuccess={responseGoogle}
		    onFailure={responseGoogle}
		    style= {{
		    	float:'right',
		    	borderRadius: 100 + '%', 
		  	}}
		   > 
		   <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/24745-200.png' 
		   alt='Login'
		   style= {{
			   	height: 100 + '%'
			  }}
		   />
		  </GoogleLogin>
		  </div>
		);
		
	}
}

export default CustomNavigation;