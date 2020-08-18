import React from 'react';
import { Card } from 'react-bootstrap';

export default props => {
	return (
		<Card>
			<Card.Header as="h4" className="text-center">Daily News!</Card.Header>
			<Card.Body>
				<Card.Title>Ben’s Best – 18th August 2020</Card.Title>
				<Card.Text>17th August 2020 by Ben Beare</Card.Text>
				<Card.Text>
					Form analyst Ben Beare gives his daily bets for Sportsbetting.com.au. Follow him on Twitter. Odds are correct on Sportsbetting.com.au at the time of publishing. PAKENHAM R3 #1  LORD WONDER  $2.30 He ran really well on debut and was unlucky not to win. He was held up in the straight and once clear hit the line well, running 2nd. With… Read more
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				To get more info please check out our official site :
			<a href="https://www.sportsbetting.com.au/"> SportsBetting .com.au</a>
			</Card.Footer>
		</Card>
	);
}
