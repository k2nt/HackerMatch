import React, { useState, useEffect } from 'react';
import './UserAccountPage.css';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import UserAccountView from '../../components/UserAccountView/UserAccountView';
import fetchAPI from '../../services/api';
import userDummyData from '../../assets/dummy/UserDummy';

const UserAccountPage = ({
  userID = 1,
}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(
    () => {
      async function fetchData() {
        const res = await fetchAPI({ method: "GET", endpoint: `/users/${userID}` });
        setUserData(res.data);
        console.log(userDummyData);
        setIsLoading(false);
      }
      fetchData();
    }
  , [userID]);

  return (
    <div className='user-account-page-wrapper'>
      { 
        isLoading ? 
          <LoadingScreen /> 
          : 
          <UserAccountView 
            userData={userDummyData}
          />
      }
    </div>
  );

}

export default UserAccountPage;