import React from "react";
import { styled } from "styled-components";
import { IoPersonOutline } from "react-icons/io5";
import { BsChatFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import NavItem from "./NavItem";

const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #f9f9fa;
  border-top: 1px solid #e0e0e0;
  padding: 20px 0;
`;

const UnReadCount = styled.p`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  background: #ff5400;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-weight: bold;
`;

function NavBar({ unReadCount }) {
  return (
    <ContainerDiv>
      <NavItem count={0} Icon={IoPersonOutline}/>
      <NavItem count={unReadCount} Icon={BsChatFill}/>
      <NavItem count={0} Icon={IoIosSearch}/>
      <NavItem count={0} isShow Icon={PiDotsThreeOutlineLight}/>
    </ContainerDiv>
  );
}

export default NavBar;
