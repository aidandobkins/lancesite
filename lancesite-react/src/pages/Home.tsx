import React from 'react';
import {CardContainer, ContentText, Title} from '../components/styles/ContentCard';
import Lance from '../pages/Lance';

const Home = () => {
    return (
        <>
            <Title>Welcome to the Lance Website</Title>
            <CardContainer>
                <ContentText>Note: Laff Joke, Dogecoin, Balance, and Music Bot are soon to come.</ContentText>
            </CardContainer>
            <CardContainer>
                <Lance />
            </CardContainer>
        </>
    );
};

export default Home;
