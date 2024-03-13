import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import LoginInput from "./components/LoginInput";
import LoginSignButton from "./components/LoginSignButton";
import { Link } from "react-router-dom";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 600px;
`;

const WelcomeSection = styled.div`
  text-align: center;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 10%;
  width: 100%;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20%;
  width: 100%;
`;

const FindAccontLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 26px;
  font-weight: 500;
`;

const WelcomeText = styled.p`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 30px;
`;
const WelcomeSubText = styled.p`
  color: gray;
  font-size: 26px;
`;

function Login() {
  const userId = useRef("");
  const userPwd = useRef("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (showError) {
      alert("id, pw 확인");
      setShowError(false);
    }
  }, [showError]);
  return (
    <ContainerDiv>
      <WelcomeSection>
        <WelcomeText>Welcome to KakaoTalk</WelcomeText>
        <WelcomeSubText>
          If you have a Kakao Account, <br />
          log in with your email or phone number.
        </WelcomeSubText>
      </WelcomeSection>
      <InputSection>
        <LoginInput
          placeholder={"Email or phone number"}
          type={"text"}
          value={userId}
        />
        <LoginInput
          placeholder={"Password"}
          type={"password"}
          value={userPwd}
        />
      </InputSection>
      <ButtonSection>
        <LoginSignButton
          type={"Login In"}
          userInfo={{ id: userId, pwd: userPwd }}
          setShowError={setShowError}
        />
        <LoginSignButton type={"Sign Up"} />
      </ButtonSection>
      <FindAccontLink to={"search"}>
        Find Kakao Account or Password
      </FindAccontLink>
    </ContainerDiv>
  );
}

export default Login;
