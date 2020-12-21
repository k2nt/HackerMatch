import React from 'react';
import './LoadingScreen.css';
import { HashLoader } from 'react-spinners';

const LoadingScreen = () => {
  return (
    <div className='loading-screen'>
      <HashLoader 
        color={"#fff"}
        size={"50px"}
      />
    </div>
  )
}

export default LoadingScreen;