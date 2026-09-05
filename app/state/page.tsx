"use client";

import { Button } from "@/components/bases";
import { useState } from "react";

const StatePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <Button variant="outlined" onClick={() => setCount(count - 1)}>
        Minus
      </Button>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Plus
      </Button>
    </div>
  );
};

export default StatePage;
