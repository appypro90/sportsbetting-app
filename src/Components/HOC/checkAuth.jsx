import React from 'react';
import Cookies from 'universal-cookie';
import Login from '../Login.jsx';
import IsAuthenticated from '../../Helpers/IsAuthenticated.jsx';

const checkAuth = Component => props => {

	const checkAndRedirect = () => {
		const cookies = new Cookies();
		cookies.get('user');

		if (!IsAuthenticated()) {
			return redirect();
		} else {
			return render();
		}
	}
	
	const redirect = () => {
		const { history } = props;
		history.push('/login');
		return Login(props);
	}

	const render = () => <Component {...props}/>;

	return checkAndRedirect();
}

export default checkAuth;