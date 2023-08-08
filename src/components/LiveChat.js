import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          messages: makeRandomMessage(20),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" flex flex-col-reverse overflow-y-scroll h-[600px] ml-2 p-2 border border-black bg-blue-100 rounded-b-lg">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} Message={c.messages} />
          ))}
        </div>
      </div>

      <form
        className="w-full  p-2 m-2 border border-green-950"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Arun Francis Tellis",
              messages: liveMessage,
            })
          ); //This is done to send our own comments in the live chat
          setLiveMessage("");
        }}
      >
        <input
          className="p-2 w-96 border border-black rounded-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
