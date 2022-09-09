import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: flex-start;
    margin: 16px auto;
`;

export const Title = styled.h1`
    font-size: 48px;
    color: #00c1ff;
`;

export const NavToggle = styled.button`
    border: none;
    background: none;
    color: white;
    font-size: 30px;
    margin: auto;
    margin-left: 0px;
    color: white;

    &:hover {
        cursor: pointer;
        color: #00c1ff;
    }
`;

export const TopBar = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    background-color: #212129;
    border: none;
    position: sticky;
    position: -webkit-sticky; /* Safari */
    top: 0px; //makes it stick to the top of the page
    overflow: hidden;

    //desktop view
    @media (min-width: 801px) {
        display: none;
    }
`;
