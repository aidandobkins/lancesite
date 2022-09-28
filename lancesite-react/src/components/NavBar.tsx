import React, {Dispatch} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {NavContainer, NavLink} from './styles/NavBar';
import {SiRiotgames, SiDogecoin} from 'react-icons/si';
import {AiFillHome} from 'react-icons/ai';
import {BiLineChartDown, BiLaugh} from 'react-icons/bi';
import {IoMdPerson, IoMdMusicalNote} from 'react-icons/io';
import {FaBirthdayCake} from 'react-icons/fa';
import {MdAttachMoney} from 'react-icons/md';

interface Props {
    isActive: boolean;
    setIsActive: Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<Props> = (props) => {
    let {isActive, setIsActive} = props;
    const location = useLocation();
    const navigate = useNavigate();

    const onNavClick = (path: String) => {
        setIsActive(false);
        console.log(path);
        navigate(String(path));
    };

    return (
        <NavContainer isActive={isActive}>
            <NavLink color={location.pathname === '/' ? '#00c1ff' : ''} onClick={() => onNavClick('/')}>
                <AiFillHome />
                &nbsp;&nbsp;Home
            </NavLink>
            <NavLink
                color={location.pathname === '/losers-queue' ? '#00c1ff' : ''}
                onClick={() => onNavClick('/losers-queue')}>
                <BiLineChartDown />
                &nbsp;&nbsp;Losers Queue
            </NavLink>
            <NavLink color={location.pathname === '/ranks' ? '#00c1ff' : ''} onClick={() => onNavClick('/ranks')}>
                <SiRiotgames />
                &nbsp;&nbsp;League Ranks
            </NavLink>
            <NavLink color={location.pathname === '/lance' ? '#00c1ff' : ''} onClick={() => onNavClick('/lance')}>
                <IoMdPerson />
                &nbsp;&nbsp;Lance Picture of the Day
            </NavLink>
            <NavLink color={location.pathname === '/laff' ? '#00c1ff' : ''} onClick={() => onNavClick('/laff')}>
                <BiLaugh />
                &nbsp;&nbsp;Laff Joke
            </NavLink>
            <NavLink
                color={location.pathname === '/birthdays' ? '#00c1ff' : ''}
                onClick={() => onNavClick('/birthdays')}>
                <FaBirthdayCake />
                &nbsp;&nbsp;Birthdays
            </NavLink>
            <NavLink color={location.pathname === '/dogecoin' ? '#00c1ff' : ''} onClick={() => onNavClick('/dogecoin')}>
                <SiDogecoin />
                &nbsp;&nbsp;Dogecoin Tracker
            </NavLink>
            <NavLink color={location.pathname === '/balance' ? '#00c1ff' : ''} onClick={() => onNavClick('/balance')}>
                <MdAttachMoney />
                &nbsp;&nbsp;Balance Tracker
            </NavLink>
            <NavLink
                color={location.pathname === '/music-bot' ? '#00c1ff' : ''}
                onClick={() => onNavClick('/music-bot')}>
                <IoMdMusicalNote />
                &nbsp;&nbsp;Discord Music Bot
            </NavLink>
        </NavContainer>
    );
};

export default NavBar;
