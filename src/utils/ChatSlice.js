import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./Constants";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    //This reducer used to set the offset of the chat and also makes the live chat to pop up from bottom
    addMessage: (state, action) => {
      state.messages.reverse(LIVE_CHAT_COUNT, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
