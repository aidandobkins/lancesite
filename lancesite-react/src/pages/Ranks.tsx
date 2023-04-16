import React, {useState, useEffect} from 'react';
import {RankForm, RankInput, RankLabel, RankSubmit, RankImage} from './styles/Ranks';
import {CardContainer, ContentSubtitle, ContentText, Title} from '../components/styles/ContentCard';
import Iron from '../images/iron.png';
import Bronze from '../images/bronze.png';
import Silver from '../images/silver.png';
import Gold from '../images/gold.png';
import Platinum from '../images/platinum.png';
import Diamond from '../images/diamond.png';
import Master from '../images/master.png';
import Grandmaster from '../images/grandmaster.png';
import Challenger from '../images/challenger.png';

const Ranks = () => {
    const [rankText, setRankText] = useState('');
    const [winLossText, setWinLossText] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [rankImage, setRankImage] = useState('');

    const getLeagueRank = async (event: any) => {
        event.preventDefault();
        setLoading(true);
        const rankResponse = await fetch('/api/getLeagueRank', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name}),
        });
        const ranks = await rankResponse.json();
        console.log(ranks);

        let printRank = ranks.tier;
        if (ranks.tier !== 'CHALLENGER' && ranks.tier !== 'GRANDMASTER' && ranks.tier !== 'MASTER') {
            var numRank = 0;
            switch (ranks.rank) {
                case 'I':
                    numRank = 1;
                    break;
                case 'II':
                    numRank = 2;
                    break;
                case 'III':
                    numRank = 3;
                    break;
                case 'IV':
                    numRank = 4;
                    break;
                default:
                    numRank = ranks.rank;
            }
            printRank = printRank + ' ' + numRank;
        }
        printRank = printRank + ' - ' + ranks.leaguePoints + ' LP';

        switch (ranks.tier) {
            case 'IRON':
                setRankImage(Iron);
                break;
            case 'BRONZE':
                setRankImage(Bronze);
                break;
            case 'SILVER':
                setRankImage(Silver);
                break;
            case 'GOLD':
                setRankImage(Gold);
                break;
            case 'PLATINUM':
                setRankImage(Platinum);
                break;
            case 'DIAMOND':
                setRankImage(Diamond);
                break;
            case 'MASTER':
                setRankImage(Master);
                break;
            case 'GRANDMASTER':
                setRankImage(Grandmaster);
                break;
            case 'CHALLENGER':
                setRankImage(Challenger);
                break;
            default:
                setRankImage('');
        }

        setWinLossText(
            ranks.wins +
                'W ' +
                ranks.losses +
                'L (' +
                ((ranks.wins / (ranks.wins + ranks.losses)) * 100).toFixed(0) +
                '%)'
        );
        setRankText(printRank);
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
            {((rankText !== '' && winLossText !== '') || loading) && (
                <CardContainer>
                    <>
                        {loading && <ContentText>Loading...</ContentText>}
                        {!loading && (
                            <>
                                <RankImage src={rankImage} />
                                <ContentSubtitle>{rankText}</ContentSubtitle>
                                <ContentText>{winLossText}</ContentText>
                            </>
                        )}
                    </>
                </CardContainer>
            )}
        </>
    );
};

export default Ranks;
