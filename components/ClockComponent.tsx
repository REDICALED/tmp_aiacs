"use client";
import React, { useState, useEffect } from "react";

const ClockComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-right border-2 rounded-xl px-2 py-1">
      <p >{currentTime.toLocaleDateString()}</p>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default ClockComponent;
