import { Button } from "@material-tailwind/react";
import React from "react";

const ButtonSeconday = ({ children }) => {
  return (
    <Button variant="outlined" size="sm" className="rounded-none">
      {children}
    </Button>
  );
};

export default ButtonSeconday;
