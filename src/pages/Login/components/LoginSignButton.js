import { styled } from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginSignBtn = styled.button`
  background: #F6F6F6
  width: 100%;
  padding: 20px;
  border: none;
  cursor: pointer;
  font-size: 26px;
`
const SignUpLink = styled(Link)`
  text-decoration: none;
  color: black;
`
function LoginSignButton({type, userInfo=null}) {

  function handleClick (event) {
    console.log(userInfo)
  }

  return(
    <>
      <LoginSignBtn onClick={handleClick}>
        {type === 'Sign Up' ? <SignUpLink to={'sign-up'}>{type}</SignUpLink> : type}
      </LoginSignBtn>
    </>
  )
}

export default LoginSignButton;