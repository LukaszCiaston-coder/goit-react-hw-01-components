import React, { useState } from "react";
import './App.css';
import { Profile } from "./Profile/Profile";
import { Statistic } from "./Statistic/Statistic";

export const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showStatistic, setShowStatistic] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(true);
    setShowStatistic(false);
  };

  const handleShowStatistic = () => {
    setShowProfile(false);
    setShowStatistic(true);
  };

  const handleBack = () => {
    setShowProfile(false);
    setShowStatistic(false);
  };

  return (
    <>
      {!showProfile && !showStatistic ? (
        <>
          <button onClick={handleShowProfile}>Show Profile</button>
          <button onClick={handleShowStatistic}>Show Statistic</button>
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
        </>
      )}
    </>
  );
};

