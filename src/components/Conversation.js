import React, { useState } from "react";
import styled from "styled-components";

// const messages = ["hello there", "how is it going", "Good. How about you?"]

const ConversationContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .conversation {
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    font-size: 1.4rem;
    padding: 1.6rem;
    li {
      list-style: none;
      padding: 1.6rem;
      max-width: 67%;
      background-color: #f8f8f8;
      margin-bottom: 0.8rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .sendMessage {
    display: flex;
    border-top: 1px solid #eeeeee;
    padding: 0.8rem;
    input {
      font-size: 1.4rem;
      padding: 0.8rem;
      flex-grow: 1;
      border: 1px solid #cccccc;
      border-radius: 0.4rem;
      margin-right: 0.8rem;
    }
    button {
      font-size: 1.4rem;
      padding: 0.8rem 1.6rem;
    }
  }
`;

export default function Conversation() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    "Hello",
    "How are you",
    "Good, thanks."
  ]);

  const msgList = messages.map(msg => <li>{msg}</li>);

  const handleChange = e => {
    return setMessage(e.target.value);
  };

  const handleSubmit = e => (
    e.preventDefault(), setMessages([...messages, message]), setMessage("")
  );

  return (
    <ConversationContainer>
      <div className="conversation">
        <div className="bubbles">{msgList}</div>
      </div>
      <form className="sendMessage" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={message} />
        <button type="submit">Send</button>
      </form>
    </ConversationContainer>
  );
}
