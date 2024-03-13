import React from "react";
import { styled } from "styled-components";

const ItemsBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;
`;
const Count = styled.p`
  display: flex;
  position: absolute;
  right: 50px;
  bottom: 10px;
  justify-content: center;
  align-items: center;
  color: white;
  background: #ff5400;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-weight: bold;
`;

const RedDot = styled.div`
  position: absolute;
  right: 55px;
  bottom: 20px;
  background: #ff5400;
  border-radius: 50%;
  width: 5px;
  height: 5px;
`;

function NavItem({ count, Icon, isShow }) {
  return (
    <ItemsBox>
      <Icon size="26" />
      {count > 0 && <Count>{count}</Count>}
      {isShow && <RedDot />}
    </ItemsBox>
  );
}

export default NavItem;
