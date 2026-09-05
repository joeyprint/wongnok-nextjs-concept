"use client";

import Button from "@/components/bases/Button";
import { useState } from "react";

const RecipePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button
        onClick={() => {
          console.log("SUBMIT");
        }}
      >
        Submit
      </Button>
      <p>Count: {count}</p>
    </div>
  );
};

export default RecipePage;
