# EpicGames Status (epicgames-status)

Easy to use EpicGames Status Wrapper. Get the current Fortnite, BattleBreakers, EpicGames server status.

# Installation
```sh
npm install --save epicgames-status
```

## Usage
```sh
const EpicStatus = require('epicgames-status');

EpicStatus().then(callback => {
    console.log(callback);
});

// Package async supported
let status = await EpicStatus();

console.log(status.Fortnite);
// {
//   Status: 'Operational',
//   Website: 'Operational',
//   GameServices: 'Operational',
//   Login: 'Operational',
//   Parties: 'Operational',
//   Voice: 'Operational',
//   Matchmaking: 'Operational',
//   Stats: 'Operational',
//   ItemShop: 'Operational'
// }
```

### Github

Package Source Code can be found under [this link](https://github.com/SushiBtw/epicgames-status), report bugs [here](https://github.com/SushiBtw/epicgames-status/issues).


## License
### (The MIT License)

Copyright (c) 2020 SushiBtw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.