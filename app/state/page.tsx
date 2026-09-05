"use client";

import { Button } from "@/components/bases";
import { useUserProfile } from "@/contexts/UserProfileContext";
import { useState } from "react";

const StatePage = () => {
  const [count, setCount] = useState(0);
  const { userProfile } = useUserProfile();

  return (
    <div>
      <p>Profile {userProfile.name + userProfile.surname}</p>
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
