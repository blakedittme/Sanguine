import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { ActionButton } from "./ActionButton";
import { Row } from "./Row";
import { routes } from "../Routes";

const NavBarContainer = styled(Row)`
    background-color: navajowhite;
    text-align: center;
`;

const NavButtonContainer = styled(Row)`
    margin: 0rem 2rem;
`;

const Brand = styled.div`
    margin: 0rem 0rem;
    font-size: 3rem;
    font-weight: 300;
`;

export const NavBar = withRouter(({ history }) => (
    <NavBarContainer>
        <Brand>Sanguine</Brand>
        <NavButtonContainer>
            <ActionButton
                displayValue="Home"
                onClick={() => history.push(routes.Home)}
            />
            <ActionButton
                displayValue="Gallery"
                onClick={() => history.push(routes.Gallery)}
            />
            <ActionButton
                displayValue="Login"
                onClick={() => history.push(routes.Login)}
            />
        </NavButtonContainer>
    </NavBarContainer>
));