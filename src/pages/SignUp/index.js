import React from 'react';
import { styled } from 'styled-components';
import SignUpInput from './components/SignUpInput';

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 600px;
`;

const WelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  height: 10%;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 10%;
  width: 100%;
`;

function Login () {

  return (
    <ContainerDiv>
      <WelcomeSection>
        <p style={{fontWeight:'bold', fontSize: '24px'}}>Welcome to KakaoTalk</p>
        <p style={{color:'gray', fontSize: '24px'}}>If you have a Kakao Account, <br/>
        log in with your email or phone number.
        </p>
      </WelcomeSection>
      <InputSection>
        <SignUpInput placeholder={'Email or phone number'} type={'text'}/>
        <SignUpInput placeholder={'Password'} type={'password'}/>
      </InputSection>
    </ContainerDiv>
  )
}

export default Login;