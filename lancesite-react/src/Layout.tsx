import React, {useState, useEffect, useRef} from 'react';
import {Outlet} from 'react-router-dom';
import {PageContainer, NavToggle, TopBar, ContentContainer} from './styles/Layout';
import NavBar from './components/NavBar';
import {HiOutlineMenu} from 'react-icons/hi';

const Layout: React.FC = () => {
    const [NavIsActive, setNavIsActive] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        // Bind menu close event (to close menu on a click outside of it)
        document.addEventListener('mousedown', (ev) => {
            if (!menuRef) return;
            // @ts-ignore
            if (menuRef.current && menuRef.current.contains(ev.target)) return;
            if (!NavIsActive) return;
            setNavIsActive(false);
        });
    }, [menuRef, NavIsActive]);

    return (
        <>
            <TopBar>
                <NavToggle onClick={() => setNavIsActive(!NavIsActive)}>
                    <HiOutlineMenu />
                </NavToggle>
            </TopBar>
            <PageContainer>
                <div ref={menuRef}>
                    <NavBar isActive={NavIsActive} setIsActive={setNavIsActive} />
                </div>
                <ContentContainer NavIsActive={NavIsActive}>
                    <Outlet />
                </ContentContainer>
            </PageContainer>
        </>
    );
};

export default Layout;
