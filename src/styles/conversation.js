import styled from "styled-components";

export const ConversationContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  .conversation {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    padding: 1.6rem;
    background-color: #ffffff;
    overflow-y: scroll;
    .incoming,
    .outgoing {
      display: flex;
      flex-direction: column;
      line-height: 2rem;
      list-style: none;
      position: relative;
      .message {
        display: flex;
        flex-direction: row;
      }
      .utterance {
        max-width: 67%;
        padding: 1.2rem 1.6rem 1rem;
        position: relative;
      }
      .time-stamp {
        display: none;
        font-size: 1.2rem;
        color: #00001e;
        opacity: 0.6;
        .sender {
          font-weight: bold;
          opacity: 1;
          margin-right: 0.4rem;
        }
      }
      &:last-child,
      &:only-child {
        margin-bottom: 0;
        .time-stamp {
          display: block;
        }
      }
    }
    .incoming {
      justify-content: flex-start;
      .button-container {
        margin: 0.8rem 0 0.8rem 3.6rem;
      }
      .message {
        justify-content: flex-start;
      }
      .time-stamp {
        margin-left: 3.6rem;
      }
      .utterance {
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
            left: -3.2rem;
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
      .message {
        justify-content: flex-end;
      }
      .utterance {
        background-color: #dfe0f3;
        margin: 0 3.6rem 0.2rem 0;
        &:first-child {
          margin-top: 0.8rem;
          border-radius: 0.8rem 0.8rem 0 0.8rem;
        }
        &:last-child {
          border-radius: 0.8rem 0 0.8rem 0.8rem;
          &:after {
            content: "";
            background-color: #dfe0f3;
            border-radius: 10rem;
            position: absolute;
            height: 2.4rem;
            width: 2.4rem;
            right: -3.2rem;
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
        border: 2px solid #0464ee;
        color: #0464ee;
        height: 4rem;
        border-radius: 2rem;
        font-size: 1.4rem;
        background-color: #ffffff;
        min-width: 6rem;
        margin-right: 0.8rem;
        padding: 0 1.6rem;
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
