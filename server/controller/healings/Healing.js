const { Healings } = require('../../models');

module.exports = (req, res) => {
    Healings
            .findAll()
            .then((data) => {
                return res.send(data)
            })
            .catch((err) => {
                console.log(err);
            });
}