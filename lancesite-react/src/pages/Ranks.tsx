import React, {useState, useEffect} from 'react';
import {RankForm, RankInput, RankLabel, RankSubmit} from './styles/Ranks';
import {CardContainer, ContentSubtitle, ContentText, Title} from '../components/styles/ContentCard';

const Ranks = () => {
    const [rank, setRank] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const getLeagueRank = async (event: any) => {
        event.preventDefault();
        setLoading(true);
        const rankResponse = await fetch('/api/getLeagueRank', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name}),
        });
        const rankString = await rankResponse.text();

        setRank(rankString);
        setLoading(false);
    };

    return (
        <>
            <Title>League of Legends Ranks</Title>
            <CardContainer>
                <RankForm onSubmit={getLeagueRank}>
                    <RankLabel>Summoner Name</RankLabel>
                    <RankInput type="text" name="summonerName" onChange={(e) => setName(e.target.value)} />
                    <RankSubmit type="submit">Get Rank</RankSubmit>
                </RankForm>
            </CardContainer>
            <CardContainer>
                <>
                    {loading && <ContentText>Loading...</ContentText>}
                    {!loading && <ContentSubtitle>{rank}</ContentSubtitle>}
                </>
            </CardContainer>
        </>
    );
};

export default Ranks;
