import React from "react";
import styled from "styled-components";

interface StyledImageProps {
    path?: string
}

const Image = styled.img`
    border: solid 4px black;
    flex-wrap: nowrap;
    box-shadow: 1px 1px 3px gray;
    margin: 2rem;
`;

const StyledDiv = styled.div`
    text-align: center;
`;

export const StyledImage: React.FC<StyledImageProps> = props => (
    <StyledDiv>
        <Image src={props.path}/>
    </StyledDiv>
)