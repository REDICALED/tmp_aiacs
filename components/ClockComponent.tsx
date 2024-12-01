"use client";
import React, { useEffect, useState } from "react";

const ClockComponent = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  if (!currentTime) return null; // 클라이언트에서만 렌더링 시작

  return (
    <div className="text-right border-2 rounded-xl px-2 py-1">
      <p>{currentTime.toLocaleDateString()}</p>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default ClockComponent;
