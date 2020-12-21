import React, { useState } from 'react';
import './LogInPage.css';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import auth from '../../services/auth';
import sideImg from '../../assets/images/login-sideimg.png';

const LogInPage = (props) => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleOnSubmit = async (e) => {

		await auth.login({
			email: email,
			password: password,
			cb: () => { props.history.push("/users"); }
		});

		e.preventDefault();
	}

	const onChangeEmail = (text) => setEmail(text.target.value);

	const onChangePassword = (text) => setPassword(text.target.value);

	return (
		<div className='log-in-page'>
			<div className='side-image-container'>
				<img
					alt="signup-side-img"
					src={sideImg}
				/>
			</div>
			<div className='log-in-panel-wrapper'>
				<div className='log-in-panel-container'>
					<h2>Log In</h2>
					<form onSubmit={handleOnSubmit} >
						<InputField 
							fieldTitle="Email"
							type="email"
							placeholder=""
							value={email}
							onChangeValue={onChangeEmail}
							autoFocus={true}
							required={true}
						/>
						<InputField 
							fieldTitle="Password"
							type="text"
							placeholder=""
							value={password}
							onChangeValue={onChangePassword}
							required={true}
						/>
						<div className="btn-wrapper">
							<Button
								btnStyle='btn--primary'
								btnSize='btn--medium'
								link='/marketplace'
								type="submit"
							>
								Next
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LogInPage;