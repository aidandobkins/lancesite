import styled from 'styled-components';

export const NavContainer = styled.div<{isActive: boolean}>`
    display: ${(props) => (props.isActive ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: start;
    height: 100%;
    //overflow: hidden;
    background-color: #212129;
    position: fixed;
    padding-top: 16px;
    top: 40px; //makes it stick to the top of the page
    left: 0px;
    z-index: 1;

    //desktop view
    @media (min-width: 801px) {
        display: flex;
        height: calc(100vh - 32px);
        width: auto;
        border-radius: 32px;
        margin-top: 8px;
        margin-left: 8px;
        top: 0px;
    }
`;

export const NavLink = styled.a<{color?: string}>`
    color: ${(props) => (props.color ? props.color : 'white')};
    margin: 10px 32px 10px 16px;
    font-size: 18px;
    white-space: nowrap;
    width: 220px;

    &:hover {
        cursor: pointer;
        color: #00c1ff;
    }
`;
