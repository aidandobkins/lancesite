import styled from 'styled-components';

export const NavContainer = styled.div<{isActive: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: ${(props) => (props.isActive ? 'calc(100vh - 16px)' : '0px')};
    width: ${(props) => (props.isActive ? '' : '0px')};
    overflow: hidden;
    background-color: #212129;
    position: sticky;
    position: -webkit-sticky; /* Safari */
    padding-top: 16px;
    top: 40px; //makes it stick to the top of the page
    position: absolute;
    left: 0px;

    //desktop view
    @media (min-width: 801px) {
        position: relative;
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
