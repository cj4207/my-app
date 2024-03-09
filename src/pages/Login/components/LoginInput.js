import { styled } from 'styled-components';
import React from 'react';

const IdPasswordInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid;
  width: 100%;
  padding: 20px;
  font-size: 26px;
  padding-right: 0px;
`

function LoginInput({placeholder, type, value}) {

  function handleOnChange (event) {
    value.current = event.target.value
    console.log(event.target.value)
  }

  return(
    <>
      <IdPasswordInput placeholder={placeholder} type={type} onChange={handleOnChange}/>
    </>
  )
}

export default LoginInput;