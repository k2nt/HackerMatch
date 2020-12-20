import React from 'react';
import './MarketplacePage.css';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import searchIcon from '../../assets/images/search-icon.png';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dummyAvatar from '../../assets/images/johhdoe.jpeg';

const SearchNavBar = () => {
	return (
		<div className='search-nav-bar-wrapper'>
			<div className='search-nav-bar-container'>
				<form 
					className='search-bar-wrapper'
					onSubmit={{}}
				>
					<InputField
						fieldTitle=""
						placeholder=""
						icon={faSearch}
						iconSize="1x"
						
					/>
				</form>
				<div className='btn-notification'>
					<Button
						btnStyle="btn--transparent"
						btnSize="btn--wrap"
						children={
							<FontAwesomeIcon 
								icon={faBell}
								style={{
									fontSize: "2.2rem"
								}}
							/>
						}
					/>
				</div>
				<div className='btn-avatar'>
					<Button
						btnStyle="btn--transparent"
						btnSize="btn--wrap"
						children={
							<img 
								alt="avatar" 
								src={dummyAvatar} 
								style={{ 
									width: "3.2rem",
									height: "3.2rem",
									borderRadius: "100px"
								}}
							/>
						}
					/>
				</div>
			</div>
		</div>

	);
}

const MarketplacePage = () => {
	return (
		<div className='marketplace-page'>
			<SearchNavBar />
		</div>
	);
}

export default MarketplacePage;