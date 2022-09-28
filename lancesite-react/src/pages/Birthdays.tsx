import React, {useState, useEffect} from 'react';
import {BirthdayList, BirthdayListItem} from './styles/Birthdays';
import {CardContainer, ContentText} from '../components/styles/ContentCard';

const Birthdays = () => {
    const [birthdays, setBirthdays] = useState([]);

    const getBirthdays = async () => {
        const birthdayResponse = await fetch('/api/getBirthdays');
        const birthdaysArray = await birthdayResponse.json();
        if (birthdayResponse.status !== 200) throw Error(birthdaysArray.message);

        return birthdaysArray;
    };

    useEffect(() => {
        (async () => {
            setBirthdays(await getBirthdays());
        })();
    }, []);

    return (
        <CardContainer>
            <BirthdayList>
                {birthdays.map((birthday, id) => (
                    <BirthdayListItem key={id}>{birthday}</BirthdayListItem>
                ))}
            </BirthdayList>
        </CardContainer>
    );
};

export default Birthdays;
