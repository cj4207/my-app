import React, { useRef } from "react";
import { styled } from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { TbMessageCirclePlus } from "react-icons/tb";
import { LuMusic4 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

const ChatsText = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

function Header() {
  return (
    <Container>
      <ChatsText>Chats</ChatsText>
      <RightSection>
        <IoIosSearch size="26"/>
        <TbMessageCirclePlus size="26"/>
        <LuMusic4 size="26"/>
        <IoSettingsOutline size="26"/>
      </RightSection>
    </Container>
  );
}

export default Header;
