import React, {useState, useEffect} from 'react';
import {} from './styles/LosersQueue';
import {CardContainer, ContentText, ContentSubtitle, Title} from '../components/styles/ContentCard';

const LosersQueue = () => {
    const [rank, setRank] = useState('');

    const getLeagueRank = async (name: string) => {
        const rankResponse = await fetch('/api/getLeagueRank', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name}),
        });
        const rankString = await rankResponse.text();

        return rankString;
    };

    useEffect(() => {
        (async () => {
            setRank(await getLeagueRank('Bellow'));
        })();
    }, []);

    return (
        <>
            <Title>Cameron's Rank</Title>
            <CardContainer>
                <ContentText>{rank}</ContentText>
            </CardContainer>
        </>
    );
};

export default LosersQueue;
