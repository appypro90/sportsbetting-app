import React from 'react';
import { Card, Button, CardColumns } from 'react-bootstrap';
import Cookies from 'universal-cookie';

const Profile = () => {
	const cookies = new Cookies();
	return (
		<Card>
			<Card.Header as="h4" className="text-center">Profile</Card.Header>
			<Card.Body>
				<Card.Title>Welcome {cookies.get('user')}!</Card.Title>
				<Card.Text>
					Form analyst Ben Beare gives his daily bets for Sportsbetting.com.au. Follow him on Twitter.
					Odds are correct on Sportsbetting.com.au at the time of publishing. PAKENHAM R3 #1  LORD WONDER  $2.30 He ran really well on debut and was unlucky not to win.
					He was held up in the straight and once clear hit the line well, running 2nd. With
    				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Profile;
