import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {PageContainer, NavToggle, TopBar, ContentContainer} from './styles/Layout';
import NavBar from './components/NavBar';
import {HiOutlineMenu} from 'react-icons/hi';

const Layout: React.FC = () => {
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
                    <Outlet />
                </ContentContainer>
            </PageContainer>
        </>
    );
};

export default Layout;
