import React, { useState, useEffect, useCallback } from "react";
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
import Countdown from "react-countdown";
import "./App.css";
import Backdrop from "./Backdrop";
import TimeCounter from "./TmeCounter";

// const firebaseConfig = {
//   // Your Firebase config here
// };

// firebase.initializeApp(firebaseConfig);

const App = () => {
  const [period, setPeriod] = useState(0);
  const year = new Date().getFullYear();
  /*
    0 - Coming Soon
    1 - Prep Time
    2 - Gift Time
    3 - Merry Christmas
    4 - Come back next december
  */
  const setActivePeriod = () => {
    const currentDate = new Date();
    const eventStartDate = new Date(year, 11, 1);
    const christmasDate = new Date(year, 11, 25);
    // December is 11 because months are zero-indexed
    if (currentDate > eventStartDate) {
      if (currentDate < christmasDate) {
        const prepStartDate = new Date(year, 11, 7);
        const giftStartDate = new Date(year, 11, 14);

        if (currentDate < prepStartDate) {
          setPeriod(0); // Coming Soon
        } else if (currentDate < giftStartDate) {
          setPeriod(1); // Prep Time
        } else {
          setPeriod(2); // Gift Time
        }
      } else if (currentDate.getDate() === christmasDate.getDate()) {
        setPeriod(3); // Merry Christmas
      } else {
        setPeriod(4); // Come back next december
      }
    } else {
      setPeriod(4); // Come back next december
    }
  };
  const getTargetDate = () => {
    switch (period) {
      case 0: // Coming Soon
        return new Date(year, 11, 7).getTime(); // Use a placeholder date for illustration
      case 1: // Prep Time
        return new Date(year, 11, 14).getTime();
      case 2: // Gift Time
        return new Date(year, 11, 25).getTime();
      case 3: // Merry Christmas
        return new Date(year, 11, 25).getTime();
      default:
        if (new Date().getMonth() > 10) {
          return new Date(year + 1, 11, 1).getTime();
        } else {
          return new Date(year, 11, 1).getTime();
        }
    }
  };
  useEffect(setActivePeriod, [year]);
  const getPeriodLabel = useCallback(() => {
    switch(period) {
      case 0:
        return 'EVENT STARTS IN';
      case 1:
        return 'SANTA ALLOCATION IN';
      case 2:
        return 'CHRISTMAS IN';
      case 3:
        return 'MERRY CHRISTMAS!!';
      default:
        return 'NEXT GIFTING SEASON';
    }
  }, [period]);
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    completed,
  }) => {
    if (completed) {
      // Render a completed state
      return <span>Completed</span>;
    } else {
      // Render a countdown
      return (
        <>
          <div
            style={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              fontSize: 32,
              marginBottom: 24,
            }}
          >
            {getPeriodLabel()}
          </div>
          <TimeCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </>
      );
    }
  };
  return (
    <Backdrop>
      <Countdown
        date={getTargetDate()}
        renderer={renderer}
        intervalDelay={0}
        precision={3}
      />
    </Backdrop>
  );
};

export default App;
