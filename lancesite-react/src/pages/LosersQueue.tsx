import React, {useState, useEffect} from 'react';
import {} from './styles/LosersQueue';
import {CardContainer, ContentText, ContentSubtitle, Title} from '../components/styles/ContentCard';

const LosersQueue = () => {
    const [rank, setRank] = useState('');
    const [loading, setLoading] = useState(false);

    const getLeagueRank = async (name: string) => {
        setLoading(true);
        const rankResponse = await fetch('/api/getLeagueRank', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name}),
        });
        const rankString = await rankResponse.text();

        setLoading(false);
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
                <>
                    {loading && <ContentText>Loading...</ContentText>}
                    {!loading && <ContentSubtitle>{rank}</ContentSubtitle>}
                </>
            </CardContainer>
        </>
    );
};

export default LosersQueue;
