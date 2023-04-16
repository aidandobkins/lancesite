import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import LosersQueue from './pages/LosersQueue';
import Ranks from './pages/Ranks';
import Lance from './pages/Lance';
import Laff from './pages/Laff';
import Birthdays from './pages/Birthdays';
import Dogecoin from './pages/Dogecoin';
import Balance from './pages/Balance';
import MusicBot from './pages/MusicBot';
import SFTPInfo from './pages/SFTPInfo';
import Layout from './Layout';

const Switcher: React.FC = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/losers-queue" element={<LosersQueue />} />
                <Route path="/ranks" element={<Ranks />} />
                <Route path="/lance" element={<Lance />} />
                <Route path="/laff" element={<Laff />} />
                <Route path="/birthdays" element={<Birthdays />} />
                <Route path="/dogecoin" element={<Dogecoin />} />
                <Route path="/balance" element={<Balance />} />
                <Route path="/music-bot" element={<MusicBot />} />
                <Route path="/sftp" element={<SFTPInfo />} />

                {/* redirects to home if none of the links were correct */}
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
};

export default Switcher;
