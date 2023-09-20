import { useState, useEffect } from "react";

import "./Banner.css";

export default function Banner() {
  const [time, setTime] = useState({
    hours: 5,
    minutes: 60,
    seconds: 60
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          return {
            hours: hours,
            minutes: minutes,
            seconds: seconds - 1
          };
        } else if (minutes > 0) {
          return {
            hours: hours,
            minutes: minutes - 1,
            seconds: 59
          };
        } else if (hours > 0) {
          return {
            hours: hours - 1,
            minutes: 59,
            seconds: 59
          };
        } else {
          clearInterval(timerId);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-timer">
          <p className="banner-title">LIMITED OFFER</p>
          <h1 className="banner-timer-numbers">
            {time.hours.toString().padStart(2, "0")}:
            {time.minutes.toString().padStart(2, "0")}:
            {time.seconds.toString().padStart(2, "0")}
          </h1>
        </div>
        <div className="banner-price">
          <del className="banner-price-old">R 2500.00</del>
          <h1 className="banner-price-new">R 160.00</h1>
        </div>
      </div>
    </div>
  );
}
