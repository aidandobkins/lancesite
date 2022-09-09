import React, {useState} from 'react';
import {PageContainer, ContentContainer, NavToggle, TopBar, Title} from './styles/Home';
import NavBar from '../components/NavBar';
import {CardContainer, ContentText} from '../components/styles/ContentCard';
import {HiOutlineMenu} from 'react-icons/hi';

const Home = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <TopBar>
                <NavToggle onClick={() => setIsActive(!isActive)}>
                    <HiOutlineMenu />
                </NavToggle>
            </TopBar>
            <PageContainer>
                <NavBar isActive={isActive} />
                <ContentContainer>
                    <Title>Welcome to the Lance Website</Title>
                    <CardContainer>
                        <ContentText>This is a card with something cool on it</ContentText>
                    </CardContainer>
                </ContentContainer>
            </PageContainer>
        </>
    );
};

export default Home;
