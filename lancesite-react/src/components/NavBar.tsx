import React from 'react';
import {NavContainer, NavLink} from './styles/NavBar';
import {SiRiotgames, SiDogecoin} from 'react-icons/si';
import {AiFillHome} from 'react-icons/ai';
import {BiLineChartDown, BiLaugh} from 'react-icons/bi';
import {IoMdPerson, IoMdMusicalNote} from 'react-icons/io';
import {FaBirthdayCake} from 'react-icons/fa';
import {MdAttachMoney} from 'react-icons/md';

interface Props {
    isActive: boolean;
}

const NavBar: React.FC<Props> = (props) => {
    const {isActive} = props;

    return (
        <NavContainer isActive={isActive}>
            <NavLink color={'#00c1ff'}>
                <AiFillHome />
                &nbsp;&nbsp;Home
            </NavLink>
            <NavLink>
                <BiLineChartDown />
                &nbsp;&nbsp;Losers Queue
            </NavLink>
            <NavLink>
                <SiRiotgames />
                &nbsp;&nbsp;League Ranks
            </NavLink>
            <NavLink>
                <IoMdPerson />
                &nbsp;&nbsp;Lance Picture of the Day
            </NavLink>
            <NavLink>
                <BiLaugh />
                &nbsp;&nbsp;Laff Joke
            </NavLink>
            <NavLink>
                <FaBirthdayCake />
                &nbsp;&nbsp;Birthdays
            </NavLink>
            <NavLink>
                <SiDogecoin />
                &nbsp;&nbsp;Dogecoin Tracker
            </NavLink>
            <NavLink>
                <MdAttachMoney />
                &nbsp;&nbsp;Balance Tracker
            </NavLink>
            <NavLink>
                <IoMdMusicalNote />
                &nbsp;&nbsp;Discord Music Bot
            </NavLink>
        </NavContainer>
    );
};

export default NavBar;
