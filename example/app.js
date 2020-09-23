const EpicGamesAPI = require('epicgames-status');

EpicGamesAPI().then(callback => {
     console.log(callback);
     console.log(callback.Fortnite);
})