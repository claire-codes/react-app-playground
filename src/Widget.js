import React, { Component } from 'react';
import styled from 'styled-components';

const StyledWidget = styled.div`
    height: 50px;
    width: 200px;
    background-color: ${props => (props.invisible ? 'transparent' : '#61dafb')};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props =>
        props.invisible &&
        `box-shadow: grey 5px 5px;
        margin-bottom: 10px;`};
`;

const Widget = ({ text, invisible }) => {
    return <StyledWidget invisible={invisible}>{text}</StyledWidget>;
};

export default Widget;
