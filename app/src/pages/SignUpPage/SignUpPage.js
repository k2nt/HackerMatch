import React, { useState } from 'react';
import './SignUpPage.css';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import auth from '../../services/auth';
import sideImg from '../../assets/images/signup-sideimg.png';

const SignUpPage = (props) => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

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

	const onChangeConfirmPassword = (text) => setConfirmPassword(text.target.value);

	return (
		<div className='sign-up-page'>
			<div className='side-image-container'>
				<img
					alt="signup-side-img"
					src={sideImg}
				/>
			</div>
			<div className='sign-up-panel-wrapper'>
				<div className='sign-up-panel-container'>
					<h2>Sign Up</h2>
					<form onSubmit={handleOnSubmit}>
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
						<InputField 
							fieldTitle="Confirm Password"
							type="text"
							placeholder=""
							value={confirmPassword}
							onChangeValue={onChangeConfirmPassword}
							required={true}
						/>
						<div className="btn-wrapper">
							<Button
								btnStyle='btn--primary'
								btnSize='btn--medium'
								link='/marketplace'
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

export default SignUpPage;