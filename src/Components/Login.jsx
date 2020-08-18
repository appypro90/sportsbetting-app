import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Cookies from 'universal-cookie';

export default props => {

	const [form, setValues] = useState({
		user: '',
		password: null,
		showErrors: false,
		validationErrors : []
	})

	const handleValidationMessage = () => {
		if (form.showErrors === true) {
		return <p>{form.validationErrors.map(e => e.message)}</p>;
		}
	  }
	const onUserChange = (e) => {
		setValues({
			...form,
			user: e.target.value
		});
	}
	const onPasswordChange = (e) => {
		setValues({
			...form,
			password: e.target.value
		});
	}
	const onSubmit = (e) => {
		e.preventDefault();
		const { history } = props;
		const user = {
			...form,
			user: form.user,
			password: form.password,
			
		}

		if (user.user === "Admin" && user.password === "12345") {
			const cookies = new Cookies();
			cookies.set('user', 'Admin');
			history.push('/profile');
			window.location.reload();
		}
		else {
			setValues({
				...form,
				showErrors: true,
				validationErrors: [
					{message : "Invalid user/password"}
				]
			});
		}
	}
	return (
		<Card className="text-center">
			<Card.Header variant="accent">Sign in</Card.Header>
			<Card.Body><Container>
				<Row>
					<Col xs={12} md={{ span: 6, offset: 3 }} >
						<Form onSubmit={e => onSubmit(e)}>
							<Form.Group controlId="formGroupText">
								<Form.Label>Username</Form.Label>
								<Form.Control type="text" placeholder="Username"
									onChange={e => onUserChange(e)} />
							</Form.Group>
							<Form.Group controlId="formGroupPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password"
									onChange={e => onPasswordChange(e)} />
							</Form.Group>
							<Form.Text className="text-danger">
								{handleValidationMessage()}
							</Form.Text>
							<div className='form-group'>
								<Button size="lg" block variant="primary" type="submit">Submit</Button>
							</div>
						</Form>
					</Col>
				</Row>
			</Container></Card.Body>
		</Card>

	);
}