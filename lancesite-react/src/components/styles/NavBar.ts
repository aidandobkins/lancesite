import styled from 'styled-components';

export const NavContainer = styled.div<{isActive: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: ${(props) => (props.isActive ? 'calc(100vh - 16px)' : '0px')};
    width: ${(props) => (!props.isActive ? '0px' : '')};
    overflow: hidden;
    background-color: #212129;
    position: sticky;
    position: -webkit-sticky; /* Safari */
    padding-top: 16px;
    top: 0px; //makes it stick to the top of the page

    //desktop view
    @media (min-width: 801px) {
        height: calc(100vh - 16px);
        width: auto;
        border-radius: 16px;
    }
`;

export const NavLink = styled.a<{color?: string}>`
    color: ${(props) => (props.color ? props.color : 'white')};
    margin: 10px 32px 10px 16px;
    font-size: 18px;

    &:hover {
        cursor: pointer;
        color: #00c1ff;
    }
`;
