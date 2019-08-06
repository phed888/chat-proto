import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
    background-color: #ffffff;
    .incoming,
    .outgoing {
      display: flex;
      flex-direction: column;
      line-height: 2rem;
      list-style: none;
      position: relative;
      .bubble {
        max-width: 67%;
        padding: 1.2rem 1.6rem 1rem;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    .incoming {
      justify-content: flex-start;
      .button-container {
        margin: .8rem 0 .8rem 3.6rem;
      }
      .bubble {
        background-color: #eeeeee;
        margin: 0 0 0.2rem 3.6rem;
        &:first-child {
          border-radius: 0.8rem 0.8rem 0.8rem 0;
        }
        &:last-child {
          border-radius: 0 0.8rem 0.8rem 0.8rem;
          &:before {
            content: "";
            background-color: #eeeeee;
            border-radius: 10rem;
            position: absolute;
            height: 2.4rem;
            width: 2.4rem;
            left: 0;
            bottom: 0;
          }
        }
        &:not(:first-child):not(:last-child) {
          border-radius: 0 0.8rem 0.8rem 0;
        }
        &:only-child {
          border-radius: 0.8rem;
        }
      }
    }
    .outgoing {
      justify-content: flex-end;
      margin: 0.8rem 0;
      .bubble {
        background-color: #ff0000;
        margin: 0 3.6rem 0.2rem 0;
        &:first-child {
          margin-top: 0.8rem;
          border-radius: 0.8rem 0.8rem 0 0.8rem;
        }
        &:last-child {
          border-radius: 0.8rem 0 0.8rem 0.8rem;
          &:after {
            content: "";
            background-color: #ff0000;
            border-radius: 10rem;
            position: absolute;
            height: 2.4rem;
            width: 2.4rem;
            right: 0rem;
            bottom: 0;
          }
        }
        &:not(:first-child):not(:last-child) {
          border-radius: 0.8rem 0 0 0.8rem;
        }
        &:only-child {
          margin-top: 0.8rem;
          border-radius: 0.8rem;
        }
      }
    }
    .button-container {
      display: flex;
      flex-direction: row;
      .quickReply {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid blue;
        height: 4rem;
        border-radius: 2rem;
        font-size: 1.4rem;
        background-color: #ffffff;
        min-width: 6rem;
        margin-right: .8rem;
      }
    }
  }
  .sendMessage {
    display: flex;
    border-top: 1px solid #eeeeee;
    padding: 0.8rem;
    background-color: #ffffff;
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

  const questions = [
    {
      index: 3,
      content: "Did you reach someone with authority to approve the request?",
      type: "incoming",
      quickReplies: ["Yes", "No"]
    },
    {
      index: 4,
      content: "What is the name of the person you reached?",
      type: "incoming",
      quickReplies: ["Anje Keizer", "I don't know"]
    },
    {
      index: 5,
      content: "What is the title of the person you reached?",
      type: "incoming",
      quickReplies: []
    },
    {
      index: 6,
      content: "Did they approve the customer's request?",
      type: "incoming",
      quickReplies: ["Yes", "No", "Partially"]
    },
    {
      index: 7,
      content:
        "Great! I will send the customer an email and let them know that a full refund is on the way. Go ahead and close this tab – you don't need to do anything more.",
      type: "incoming",
      quickReplies: []
    }
  ];

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
        <div className="bubble">{msg.content}</div>
        {msg.quickReplies.length > 0 && <div className="button-container">
          {msg.quickReplies.map(reply => (
            <button className="quickReply">{reply}</button>
          ))}
          </div>}
      </div>
    </>
  ));

  const handleChange = e => {
    return setInput(e.target.value);
  };

  const nextQuestion = () => {
    if(currentMsg < questions.length + 2) {
      setMessages(prevMessages => [...prevMessages, questions[currentMsg]]);
      currentMsg++;
    }
  };

  const handleSubmit = e => {
    console.log(currentKey + " " + currentMsg);
    e.preventDefault();
    if (input !== "") {
      const newMessage = { key: currentKey, content: input, type: "outgoing" };
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
