import React, {useState, useEffect} from 'react';
import {} from './styles/LosersQueue';
import {CardContainer, ContentText, ContentSubtitle, Title} from '../components/styles/ContentCard';

const LosersQueue = () => {
    const [rankText, setRankText] = useState('');
    const [winLossText, setWinLossText] = useState('');
    const [loading, setLoading] = useState(false);

    const getLeagueRank = async (name: string) => {
        setLoading(true);
        const rankResponse = await fetch('/api/getLeagueRank', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name}),
        });
        const ranks = await rankResponse.json();

        let printRank = ranks.tier;
        if (ranks.tier !== 'CHALLENGER' && ranks.tier !== 'GRANDMASTER' && ranks.tier !== 'MASTER') {
            printRank = printRank + ' ' + ranks.rank;
        }
        printRank = printRank + ' ' + ranks.leaguePoints + ' LP';
        setWinLossText(ranks.wins + ' Wins & ' + ranks.losses + ' Losses');

        setLoading(false);
        return printRank;
    };

    useEffect(() => {
        (async () => {
            setRankText(await getLeagueRank('Bellow'));
        })();
    }, []);

    return (
        <>
            <Title>Cameron's Rank</Title>
            <CardContainer>
                <>
                    {loading && <ContentText>Loading...</ContentText>}
                    {!loading && (
                        <>
                            <ContentSubtitle>{rankText}</ContentSubtitle>
                            <ContentText>{winLossText}</ContentText>
                        </>
                    )}
                </>
            </CardContainer>
        </>
    );
};

export default LosersQueue;
