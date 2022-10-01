import React from 'react';
import {CardContainer, ContentText, Title} from '../components/styles/ContentCard';
import Lance from '../pages/Lance';

const Home = () => {
    return (
        <>
            <Title>Welcome to the Lance Website</Title>
            <CardContainer>
                <ContentText>Note: Only Birthdays and Lance of the Day work right now</ContentText>
            </CardContainer>
            <CardContainer>
                <Lance />
            </CardContainer>
        </>
    );
};

export default Home;
