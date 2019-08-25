import React, { useState, useEffect } from "react";
import { ConversationContainer } from "../styles/conversation";
import { questions } from "../data/conversation";

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

  const [messages, setMessages] = useState([
    {
      index: 0,
      content:
        "What happened: Chachi Arredondo called on Aug 4, 2019 to cancel their stay at Hotel Theodore, Seattle during Aug 11, 2019 - Aug 14, 2019, due to medical emergency.  (Itinerary: 1234567890123)",
      type: "incoming",
      quickReplies: []
    },
    {
      index: 1,
      content:
        "What to do: Call the Hotel Theodore, Seattle and ask Anje Keizer, General Manager to approve the waiver for this cancellation.",
      type: "incoming",
      quickReplies: []
    },
    {
      index: 2,
      content:
        "Please note: This is the first out of 3 attempts to get the waiver",
      type: "incoming",
      quickReplies: ["Call hotel"]
    }
  ]);

  const msgList = messages.map(msg => (
    <>
      <div className={msg.type} key={msg.index}>
        <div className="message">
          <div className="bubble">{msg.content}</div>
        </div>

        {msg.quickReplies.length > 0 && (
          <div className="button-container">
            {msg.quickReplies.map(reply => (
              <button className="quickReply">{reply}</button>
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
      setTimeout(nextQuestion, 500);
    }
  };

  return (
    <ConversationContainer>
      <div className="conversation">
        <div className="bubbles">{msgList}</div>
      </div>
      <form className="sendMessage" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={input} />
        <button type="submit">Send</button>
      </form>
      <div ref={scrollTarget} />
    </ConversationContainer>
  );
}
