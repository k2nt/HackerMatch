import React, { useState, useEffect } from 'react';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import UserAccountView from '../../components/UserAccountView/UserAccountView';
import fetchAPI from '../../services/api';

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
        console.log(res.data);
        setIsLoading(false);
      }
      fetchData();
    }
  , [userID]);

  return (
    <div>
      { isLoading ? 
          <LoadingScreen /> 
          : 
          <UserAccountView
            
          /> 
      }
    </div>
  );

}

export default UserAccountPage;