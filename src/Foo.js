import styled from 'styled-components';

const Foo = styled.div`
    height: 100px;
    width: 200px;
    background-color: #61dafb;
    cursor: pointer;

    :hover {
        background-color: #dfffff;
    }

    h2 {
        font-family: monospace;
    }
`;

export default Foo;
