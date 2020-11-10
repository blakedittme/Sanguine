import { render } from 'react-dom';
import { Modal } from './modal/Modal';
import { useModal } from './modal/useModal';
import React, { Component, FunctionComponent, useState } from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
    margin: 0rem 0rem;
    font-size: 3rem;
    text-align: center;
    border-style: solid;
    font-weight: 200;
    background-color: orange;
`;

const Container = styled.fieldset`
  background-color: white;
  text-align: center;
`;

const StyledButton = styled.button`
    
`;

export const LoginModal: React.FC<any> = (props) => {
    const { isShown, toggle } = useModal();

    const content = <React.Fragment>Please Log In</React.Fragment>

    return (
        <Container>
            <StyledDiv>Sign in Portal</StyledDiv> <br />
            <button onClick={toggle}>Existing User</button> <br /> 
            <button onClick={toggle}>New User</button> <br />
            <a target="_blank" rel="noopener noreferrer" href="www.facebook.com">Forgot your password?</a>
            <Modal isShown={isShown} hide={toggle} modalContent={content} />
        </Container>
    )
}
