import React from 'react';
import styled from 'styled-components';

function SmallInput(props) {
  return (
    <div>
        <InputBox type="text" placeholder={props.placeholder}/>
    </div>
  )
}

const InputBox = styled.input`
    height: 2.8rem;
    width: 8.5rem;
    border-radius: 0.5rem;
    border: 0.14rem solid #57b233;
    margin: 0 0.2rem;
`;


export default SmallInput;