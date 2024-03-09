import { styled } from 'styled-components';
import React from 'react';

const IdPasswordInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid;
  width: 100%;
  padding: 20px;
  font-size: 24px;
  padding-right: 0px;
`

function SignUpInput({placeholder, type, value}) {

  function handleOnChange (event) {
    console.log(event.target.value)
  }

  return(
    <>
      <IdPasswordInput placeholder={placeholder} type={type} onChange={handleOnChange}/>
    </>
  )
}

export default SignUpInput;
