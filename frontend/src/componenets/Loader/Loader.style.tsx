import styled from 'styled-components';

const Container = styled.section`
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 100%;
    left:0;
    top:0;
    background-color: rgba(255, 255, 255, 0.602);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    &#app-loader {
        display: none;
    }
`;

export default Container