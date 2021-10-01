const express = require('express');
const path = require('path');
const app = express();

const usersDB = [
    {
        walletId: '0x123',
        name: 'Luis',
        profile: 'https://avatars.githubusercontent.com/u/1664147?v=4',
        secret: 'qwe'
    },
    {
        walletId: '0x123',
        name: 'Gorilla',
        profile: 'https://avatars.githubusercontent.com/u/19284410?v=4',
        secret: 'qwe'
    }
];



// app.get('/', (req, res) => {
//     console.log({...usersDB});
// });

app.get('/', function(req, res) {
    const users = {...usersDB};
    console.log(users);
    res.json(users);
});

app.listen(process.env.PORT || 3000);
console.log('Listening at localhost:3000');