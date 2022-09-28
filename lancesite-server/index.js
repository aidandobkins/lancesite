const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/helloWorld', (req, res) => {
    res.json({message: 'Hello from server!'});
});

app.get('/api/getLancePhoto', (req, res) => {
    const fs = require('fs');
    const path = require('path');

    //see if its a new day
    today = new Date();
    currLance = String(fs.readFileSync('./info/CurrentLance.txt'));

    if (currLance) {
        currLance = currLance.split(' ');
        //if todays lance has already been found
        if (String(today.getMonth()) + '/' + String(today.getDate()) === currLance[0]) {
            res.status(200).sendFile(path.resolve(currLance[1]));
        } else {
            //if not
            files = fs.readdirSync('./info/images');
            let imagesAmount = files.length;

            const rand = (Math.floor(Math.random() * imagesAmount) + 1).toString();
            let lance = './info/images/lance' + rand + '.png';

            currLanceData = String(today.getMonth()) + '/' + String(today.getDate()) + ' ' + String(lance);
            fs.writeFileSync('./info/CurrentLance.txt', currLanceData);
            res.status(200).sendFile(path.resolve(lance));
        }
    } else {
        //if not
        files = fs.readdirSync('./info/images');
        let imagesAmount = files.length;

        const rand = (Math.floor(Math.random() * imagesAmount) + 1).toString();
        let lance = './info/images/lance' + rand + '.png';

        currLanceData = String(today.getMonth()) + '/' + String(today.getDate()) + ' ' + String(lance);
        fs.writeFileSync('./info/CurrentLance.txt', currLanceData);
        res.status(200).sendFile(path.resolve(lance));
    }
});

app.get('/api/getBirthdays', (req, res) => {
    const fs = require('fs');
    const path = require('path');

    let birthdaysJson = fs.readFileSync(path.resolve('./info/birthdays.json'));
    const birthdays = JSON.parse(birthdaysJson).birthdays;
    let currTime = new Date(); //current time
    currTime.setHours(0, 0, 0, 0);
    let minDiff = 365;
    let birthdayArray = [];
    for (let i = 0; i < birthdays.length; i++) {
        //pads date with 0s and converts to date object
        let currBirthday = new Date(
            `${currTime.getFullYear()}-${String(birthdays[i].month).padStart(2, '0')}-${String(
                birthdays[i].day
            ).padStart(2, '0')}T00:00:00Z`
        );

        //gets days til the birthday (negative if already passed in the year)
        let daysDiff = Math.round((currBirthday.getTime() - currTime.getTime()) / 86400000);
        if (daysDiff < 0) {
            //if its a leap year and March+ next year
            if ((currTime.getFullYear() + 1) % 4 === 0 && birthdays[i].month > 2) {
                daysDiff = 366 + daysDiff;
            } else {
                //if not leap year
                daysDiff = 365 + daysDiff;
            }
        }

        //sorts the array by earliest birthday
        const arrlen = birthdayArray.length;
        for (let j = 0; j < arrlen; j++) {
            if (birthdayArray[j].substring(0, birthdayArray[j].indexOf('d')) >= daysDiff) {
                birthdayArray.splice(j, 0, `${daysDiff} days until ${birthdays[i].name}'s birthday`);
                break;
            }
            if (j === arrlen - 1) {
                birthdayArray.push(`${daysDiff} days until ${birthdays[i].name}'s birthday`);
            }
        }
        if (birthdayArray.length === 0) {
            birthdayArray.push(`${daysDiff} days until ${birthdays[i].name}'s birthday`);
        }
    }
    res.status(200).send(birthdayArray);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
