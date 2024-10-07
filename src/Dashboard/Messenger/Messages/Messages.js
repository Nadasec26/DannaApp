import React, { useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import MessagesHeader from "./MessagesHeader.js";
import { styled } from "@mui/material";
import Message from "./Message.js";
import DateSeparator from "./DateSeparator.js";
import { useParams } from "react-router-dom";

const MainContainer = styled("div")({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const convertDataToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };
  return format.replace(/mm|dd|yy|yyyy/gi, (matched) => map[matched]);
};

const Messages = ({ chosenChatDetails, messages }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (chosenChatDetails.id == id && user.role == "user") {
    return (
      <MainContainer ref={containerRef}>
        <MessagesHeader
          name={chosenChatDetails?.name}
          proImage={chosenChatDetails?.proImage}
        />
        {messages.map((message, index) => {
          const sameAuthor =
            index > 0 &&
            messages[index].author._id === messages[index - 1].author._id;

          const sameDay =
            index > 0 &&
            convertDataToHumanReadable(new Date(message.date), "dd/mm/yy") ===
              convertDataToHumanReadable(
                new Date(messages[index - 1]?.date),
                "dd/mm/yy"
              );

          return (
            <div key={message._id} style={{ width: "97%" }}>
              {(!sameDay || index === 0) && (
                <DateSeparator
                  date={convertDataToHumanReadable(
                    new Date(message.date),
                    "dd/mm/yy"
                  )}
                />
              )}
              <Message
                content={message.content}
                userName={message.author.userName}
                proImage={message.author.profileImage?.url}
                sameAuthor={sameAuthor}
                date={convertDataToHumanReadable(
                  new Date(message.date),
                  "dd/mm/yy"
                )}
                sameDay={sameDay}
              />
              {index === messages.length - 1 && <div ref={scrollRef} />}
            </div>
          );
        })}
      </MainContainer>
    );
  }
  if (user.role == "doctor") {
    return (
      <MainContainer ref={containerRef}>
        <MessagesHeader
          name={chosenChatDetails?.name}
          proImage={chosenChatDetails?.proImage}
        />
        {messages.map((message, index) => {
          const sameAuthor =
            index > 0 &&
            messages[index].author._id === messages[index - 1].author._id;

          const sameDay =
            index > 0 &&
            convertDataToHumanReadable(new Date(message.date), "dd/mm/yy") ===
              convertDataToHumanReadable(
                new Date(messages[index - 1]?.date),
                "dd/mm/yy"
              );

          return (
            <div key={message._id} style={{ width: "97%" }}>
              {(!sameDay || index === 0) && (
                <DateSeparator
                  date={convertDataToHumanReadable(
                    new Date(message.date),
                    "dd/mm/yy"
                  )}
                />
              )}
              <Message
                content={message.content}
                userName={message.author.userName}
                proImage={message.author.profileImage?.url}
                sameAuthor={sameAuthor}
                date={convertDataToHumanReadable(
                  new Date(message.date),
                  "dd/mm/yy"
                )}
                sameDay={sameDay}
              />
              {index === messages.length - 1 && <div ref={scrollRef} />}
            </div>
          );
        })}
      </MainContainer>
    );
  }
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(Messages);
