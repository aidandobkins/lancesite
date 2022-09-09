import React from 'react';
import {Title} from './styles/Home';
import {CardContainer, ContentText} from '../components/styles/ContentCard';

const Home = () => {
    return (
        <>
            <Title>Welcome to the Lance Website</Title>
            <CardContainer>
                <ContentText>This is a card with something cool on it</ContentText>
            </CardContainer>
        </>
    );
};

export default Home;
