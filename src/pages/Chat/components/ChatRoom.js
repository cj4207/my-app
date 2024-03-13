import React, { useRef } from "react";
import { styled } from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";

const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const RoomImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fce300;
  border-radius: 30px;
  width: 72px;
  height: 72px;
`;

const RoomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PartnerName = styled.p`
  font-size: 26px;
  font-weight: 500;
`;
const Message = styled.p`
  font-size: 26px;
  color: gray;
`;

const TimeReadCountBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: end;
`;

const Time = styled.p`
  font-size: 22px;
  color: gray;
`;

const UnReadCount = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #ff5400;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-weight: bold;
`;

function ChatRoom({ chatPartner, message, unReadCount, time }) {
  return (
    <ContainerDiv>
      <RoomImageBox>
        <RiKakaoTalkFill size="54" />
      </RoomImageBox>
      <RoomContent>
        <PartnerName>{chatPartner}</PartnerName>
        <Message>{message}</Message>
      </RoomContent>
      <TimeReadCountBox>
        <Time>{time}</Time>
        {unReadCount > 0 && <UnReadCount>{unReadCount}</UnReadCount>}
      </TimeReadCountBox>
    </ContainerDiv>
  );
}

export default ChatRoom;
