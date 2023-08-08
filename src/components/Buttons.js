import React from "react";

const Buttons = ({ name }) => {
  //These are the buttons which are present above the video containers
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">{name}</button>
    </div>
  );
};

export default Buttons;
