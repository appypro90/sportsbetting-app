import Cookies from "universal-cookie";

const isAutheticated = () => {
	const cookies = new Cookies();
	cookies.get('user');
	return cookies.cookies.user !== null && cookies.cookies.user !== undefined
}

export default isAutheticated;