import { Button } from "@material-tailwind/react";
import React from "react";

const ButtonMain = ({icon,children}) => {
  return (
    <Button className="flex items-center gap-3 bg-mainColor rounded-none " size="sm">
      {icon}
      {children}
    </Button>
  );
};

export default ButtonMain;
