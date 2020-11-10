import React from "react";
import styled from "styled-components";

interface ActionButtonProps {
  displayValue?: string;
  onClick?: () => any;
}

const StyledButton = styled.button`
  font-size: 2rem;
  text-align: center;
  border: none;
  background-color: black;
  color: white;
  flex-wrap: nowrap;
  border-radius: 2px;
  box-shadow: 1px 1px 3px gray;
  :hover {
    box-shadow: 2px 2px 3px gray;
  }
  margin: 0.25rem;
`;

export const ActionButton: React.FC<ActionButtonProps> = props => (
  <StyledButton onClick={props.onClick}>{props.displayValue}</StyledButton>
);
