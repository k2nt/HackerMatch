import React from 'react';
import './HomePage.css';
import Button from '../../components/Button/Button';
import { Switch } from 'react-router-dom';
import Particles from 'react-particles-js';
import particlesConfig from '../../components/ParticleBackground/particlesConfig';
import LogInPage from '../LogInPage/LogInPage';
import SignUpPage from '../SignUpPage/SignUpPage';


const HomePage = () => {
  return (
    <div className='home-page'>
		
			<div className='particle-js-container'>
				<Particles
					width="100vw"
					height="100vh"
					params={particlesConfig}
				/>
			</div>

			<div className='home-page-container'>
				<h1>HackerMatch</h1>
				<p>Find the next dream team for your Hackathon</p>
				<Switch>
					<div className="button-container">
						<Button
							btnStyle="btn--secondary"
							btnSize="btn--large"
							onClick={{}}
							link='/login'
						>
							LOG IN
						</Button>
						<Button
							btnStyle="btn--primary"
							btnSize="btn--large"
							onClick={{}}
							link='/signup'
						>
							SIGN UP
						</Button>
					</div>
				</Switch>
			</div>
		</div>
  );
}

export default HomePage;