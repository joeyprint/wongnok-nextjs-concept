"use client";

import { useEffect, useState } from "react";

const EffectPage = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const second = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(second);
  }, []);

  return <time>{now.toLocaleTimeString()}</time>;
};

export default EffectPage;
