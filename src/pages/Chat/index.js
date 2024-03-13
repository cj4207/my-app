import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ChatRoom from "./components/ChatRoom";
import { useUser } from "../../context/UserContext";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 600px;
  height: 100%;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  flex: 1;
`;

function Chat() {
  const { user } = useUser();
  const [totalUnReadCount, setTotalUnReadCount] = useState(0);

  useEffect(() => {
    user.chats.map((chat) => {
      setTotalUnReadCount((prev) => {
        return prev + chat.unReadCount;
      });
    });
  }, []);
  return (
    <ContainerDiv>
      <Header />
      <MainContainer>
        {user.chats.map((chat, idx) => (
          <>
            <ChatRoom
              chatPartner={chat.chatPartner}
              message={chat.message}
              unReadCount={chat.unReadCount}
              time={chat.time}
            />
          </>
        ))}
      </MainContainer>
      <NavBar unReadCount={totalUnReadCount} />
    </ContainerDiv>
  );
}

export default Chat;
