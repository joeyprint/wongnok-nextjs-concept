"use client";

import { useState } from "react";

const RecipePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Counter</Button>
      <Button onClick={() => {}}>Submit Form</Button>
      <p>Count: {count}</p>
    </div>
  );
};

const Button = ({
  children,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...restProps} className={"bg-amber-200 hover:bg-amber-600"}>
      {children}
    </button>
  );
};

export default RecipePage;
