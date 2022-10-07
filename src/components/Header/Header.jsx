import React from "react";
import "./Header.css";
import {TG_API} from "../../utils/api-constants";
import Button from "../Button/Button";

const header = () => {
  const onClose = () => {
    TG_API.close();
    };
    
  return (
    <header>
      <Button onClick={onClose}>Закрыть</Button>
          <span className={"username"}>{TG_API.initDataUnsafe?.user?.username}</span>
    </header>
  );
};

export default header;
