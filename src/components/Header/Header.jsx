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
      <Button onClose={onClose}>Закрыть</Button>
      <span className={"username"}></span>
    </header>
  );
};

export default header;
