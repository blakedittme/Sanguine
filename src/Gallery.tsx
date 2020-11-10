import React from "react";
import styled from "styled-components";
import { StyledImage } from "./components/StyledImage";


const Brand = styled.div`
    margin: 0rem 0rem;
    font-size: 3rem;
    text-align: center;
    border-style: solid;
    font-weight: 200;
    background-color: orange;
`;

const Container = styled.fieldset`
  background-color: grey;
`;

const Images = styled.span`
  vertical-align: middle;
`;

export const Gallery: React.FC<any> = (props) => {
  return (
    <Container>
      <Brand>Welcome To the Gallery</Brand>
      <StyledImage path="websitephoto1.jpg" />
      <StyledImage path="websitephoto2.jpg" />
    </Container>
  )
}