import styled from 'styled-components';

export const PageContainer = styled.div``;

export const RankForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

export const RankInput = styled.input`
    //width: 100%;
    border-radius: 8px;
    font-size: 14px;
    border: none;
    height: 24px;
    padding: 8px;
    text-align: center;
`;

export const RankLabel = styled.label`
    font-size: 18px;
    color: white;
`;

export const RankSubmit = styled.button`
    width: 30%;
    background-color: #00c1ff;
    color: white;
    border: none;
    border-radius: 8px;
    height: 40px;
    font-size: 18px;

    &:hover {
        transition: 0.2s;
        cursor: pointer;
        filter: brightness(80%);
    }
`;

export const RankImage = styled.img`
    width: 150px;
    margin: 0px auto;
    color: white;
`;
