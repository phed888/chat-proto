import React, { useState, useEffect } from "react";
import { ConversationContainer } from "../styles/conversation";
import { questions, srsummary } from "../data/conversation";

let currentMsg = 0;
let currentKey = 100;

export default function Conversation() {
  const scrollTarget = React.createRef();

  useEffect(() => {
    scrollTarget && scrollTarget.current.scrollIntoView({ behavior: "smooth" });
    // elem.scrollIntoView(false);
    // elem.scrollIntoView({ block: "end" });
    // scrollTarget.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  });

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState( srsummary );

  const handleQRClick = e => {
    e.preventDefault();
    const newMessage = {
      key: currentKey,
      content: e.target.innerText,
      type: "outgoing",
      quickReplies: []
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    currentKey++;
    setInput("");
    setTimeout(nextQuestion, 800);
  };

  const msgList = messages.map(msg => (
    <>
      <div className={msg.type} key={msg.index}>
        <div className="message">
          <div className="bubble">{msg.content}</div>
        </div>
        {msg.quickReplies.length > 0 && (
          <div className="button-container">
            {msg.quickReplies.map(reply => (
              <button className="quickReply" onClick={handleQRClick}>
                {reply}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  ));

  const handleChange = e => {
    return setInput(e.target.value);
  };

  const nextQuestion = () => {
    if (currentMsg < questions.length + 2) {
      setMessages(prevMessages => [...prevMessages, questions[currentMsg]]);
      currentMsg++;
    }
  };

  const handleSubmit = e => {
    console.log(currentKey + " " + currentMsg);
    e.preventDefault();
    if (input !== "") {
      const newMessage = {
        key: currentKey,
        content: input,
        type: "outgoing",
        quickReplies: []
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      currentKey++;
      setInput("");
      setTimeout(nextQuestion, 800);
    }
  };

  return (
    <ConversationContainer>
      <div className="conversation">
        <div className="bubbles">{msgList}</div>
        <div ref={scrollTarget} />
      </div>
      <form className="sendMessage" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={input} />
        <button type="submit">Send</button>
      </form>
    </ConversationContainer>
  );
}
