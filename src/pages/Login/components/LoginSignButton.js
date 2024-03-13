import { styled } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import users from "../../../users.json";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
const LoginSignBtn = styled.button`
  background: #F6F6F6
  width: 100%;
  padding: 20px;
  border: none;
  cursor: pointer;
  font-size: 26px;
`;
const SignUpLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
function LoginSignButton({ type, userInfo = null, setShowError = null }) {
  const navigate = useNavigate();
  const { setUser } = useUser();
  function handleClick(event) {
    if (type !== "Login In") return;
    users.map((user) => {
      if (
        user.userId === userInfo.id.current &&
        user.password === userInfo.pwd.current
      ) {
        setUser(user);
        navigate("chat");
      } else {
        setShowError(true);
      }
    });
  }

  return (
    <>
      <LoginSignBtn onClick={handleClick}>
        {type === "Sign Up" ? (
          <SignUpLink to={"sign-up"}>{type}</SignUpLink>
        ) : (
          type
        )}
      </LoginSignBtn>
    </>
  );
}

export default LoginSignButton;
