import styled from 'styled-components';

const Foo = styled.div`
    height: 50px;
    width: 200px;
    background-color: ${props => (props.invisible ? 'transparent' : '#61dafb')};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background-color: #dfffff;
    }

    h2 {
        font-family: monospace;
    }
`;

export default Foo;
