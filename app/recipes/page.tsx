"use client";

import { Button } from "@/components/bases";
import { useState } from "react";

const RecipePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Contained
      </Button>
      <Button variant="outlined" onClick={() => console.log("OUTLINED BUTTON")}>
        Outlined
      </Button>
      <Button variant="text" onClick={() => console.log("TEXT BUTTON")}>
        Text
      </Button>
    </div>
  );
};

export default RecipePage;
