const express = require('express');
require('dotenv').config();

let PORT = process.env.PORT;
if (process.env.ENVIRONMENT === 'DEV') PORT = 3001;
const app = express();
const path = require('path');

// Pick up React index.html file
app.use(express.static(path.join(__dirname, '../lancesite-react/build')));

app.get('/api/helloWorld', (req, res) => {
    res.json({message: 'Hello from server!'});
});

app.get('/api/getLancePhoto', (req, res) => {
    const fs = require('fs');
    const path = require('path');

    //see if its a new day
    today = new Date();
    currLance = String(fs.readFileSync(path.resolve('../info/CurrentLance.txt')));

    if (currLance && String(today.getMonth()) + '/' + String(today.getDate()) === currLance.split(' ')[0]) {
        //if todays lance has already been found
        res.status(200).sendFile(path.resolve(currLance[1].trim()));
    } else {
        //if not
        files = fs.readdirSync(path.resolve('../info/images'));
        let imagesAmount = files.length;

        const rand = (Math.floor(Math.random() * imagesAmount) + 1).toString();
        let lance = '../info/images/lance' + rand + '.png';

        currLanceData = String(today.getMonth()) + '/' + String(today.getDate()) + ' ' + String(lance);
        fs.writeFileSync(path.resolve('../info/CurrentLance.txt'), currLanceData);
        res.status(200).sendFile(path.resolve(lance));
    }
});

app.get('/api/getBirthdays', (req, res) => {
    const fs = require('fs');
    const path = require('path');

    let birthdaysJson = fs.readFileSync(path.resolve('../info/birthdays.json'));
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

app.get('/api/getLeagueRank', (req, res) => {
    const fs = require('fs');
    const path = require('path');

    //gets riot api key from txt file by splitting at newlines
    let api = fs.readFileSync(path.resolve('./info/api.txt'), 'utf-8').split(/\r?\n/)[4];

    //res.status(200).send(api);
});

// #RIOT API STUFF
// api_key = apidata[4]
// watcher = LolWatcher(api_key)
// my_region = 'na1'

// def rankLookUp(name):
//     me = watcher.summoner.by_name(my_region, name)
//     my_ranked_stats = watcher.league.by_summoner(my_region, me['id'])

//     tier = ""
//     division = ""
//     lp = ""

//     if not my_ranked_stats:
//         return name + " is not ranked in Solo/Duo Queue."

//     raw1 = my_ranked_stats[0]
//     if len(my_ranked_stats) > 1:
//         raw2 = my_ranked_stats[1]

//     if raw1["queueType"] == 'RANKED_SOLO_5x5':
//         tier = raw1["tier"]
//         division = raw1["rank"]
//         lp = raw1["leaguePoints"]
//     else:
//         tier = raw2["tier"]
//         division = raw2["rank"]
//         lp = raw2["leaguePoints"]

//     return name + " is **" + str(tier) + "** **" + str(division) + "**\n*" + str(lp) + "* *LP*"

if (process.env.ENVIRONMENT !== 'DEV') {
    //catch all other requests and send back frontend
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../lancesite-react/build/index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
