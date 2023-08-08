import React from "react";
import Buttons from "./Buttons";

const ButtonsList = () => {
  //These are the different buttons names that are passed into the button components
  return (
    <div className="flex">
      <Buttons name="All" />
      <Buttons name="Gaming" />
      <Buttons name="Songs" />
      <Buttons name="Live" />
      <Buttons name="Football" />
      <Buttons name="Cricket" />
      <Buttons name="Cooking" />
      <Buttons name="Valentines" />
    </div>
  );
};

export default ButtonsList;
