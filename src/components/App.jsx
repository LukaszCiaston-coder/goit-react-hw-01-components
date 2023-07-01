import React, { useState } from "react";
import './App.css';
import { Profile } from "./Profile/Profile";
import { Statistic } from "./Statistic/Statistic";
import { FriendList } from "./FriendList/FriendList";

export const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showStatistic, setShowStatistic] = useState(false);
  const [showFriendList, setShowFriendList]= useState(false)

  const handleShowProfile = () => {
    setShowProfile(true);
    setShowStatistic(false);
    setShowFriendList(false);
  };

  const handleShowStatistic = () => {
    setShowProfile(false);
    setShowStatistic(true);
    setShowFriendList(false);
  };
  const handleShowFriendList = () => {
    setShowProfile(false);
    setShowStatistic(false);
    setShowFriendList(true);
  };
  const handleBack = () => {
    setShowProfile(false);
    setShowStatistic(false);
    setShowFriendList(false);
  };

  return (
    <>
      {!showProfile && !showStatistic && !showFriendList? (
        <>
          <button onClick={handleShowProfile}>Show Profile</button>
          <button onClick={handleShowStatistic}>Show Statistic</button>
          <button onClick={handleShowFriendList}>Show Friend</button>
        </>
      ) : (
        <>
          {showProfile && (
            <>
              <Profile />
              <button onClick={handleBack}>Back</button>
            </>
          )}
          {showStatistic && (
            <>
              <Statistic />
              <button onClick={handleBack}>Back</button>
            </>
            )}
            {showFriendList && (
              <>
                <FriendList />
               <button onClick={handleBack}>Back</button>
            </> 
            )}
        </>
      )}
    </>
  );
};

