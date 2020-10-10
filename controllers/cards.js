const path = require('path');
const readFile = require('../utils/read-file.js');

const jsonCardsDataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  readFile(jsonCardsDataPath)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

module.exports = {
  getCards,
};
