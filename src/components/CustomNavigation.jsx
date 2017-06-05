import React from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, logout } from '../actions/index';


const signInUser = (response) => {
	var profile = response.profileObj;
	var name = profile.name;
	var username = profile.email;
	var avatar = profile.imageUrl;
	var password = profile.googleId;

	var user = {
		name: name,
		username: username,
		password: password,
		avatar: avatar
	};

	axios.post('/signup', {user: user})
		.then(response => {
			console.log(response, 'successfully created');
		});


}

const signInError = response => {
	alert('Please sign in to post.');

}

class CustomNavigation extends React.Component {

	componentDidMount() {
    this.props.login({name: 'Nathan'});
  }

	render() {
		return (
			<div>
			<a href="/" style={{ textDecoration: 'none' }}><font color="white">Pretzel: {(this.props.user) ? this.props.user.name : 'No Guest'} </font></a>
			<GoogleLogin 
		    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
		    buttonText="Login"
		    onSuccess={signInUser}
		    onFailure={signInError}
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

const mapStateToProps = state => ({ user: state.auth});

const matchDispatchToProps = dispatch => bindActionCreators({ login, logout }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(CustomNavigation);