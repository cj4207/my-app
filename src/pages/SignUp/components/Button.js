import { styled } from 'styled-components';
import React from 'react';

const LoginInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid;
  width: 100%;
  padding: 10px;
`

function Input({placeholder, type, value}) {

  function handleOnChange (event) {
    console.log(event.target.value)
  }

  return(
    <>
      <LoginInput placeholder={placeholder} type={type} onChange={handleOnChange}/>
    </>
  )
}

export default Input;