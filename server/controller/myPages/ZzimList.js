const { Zzims } = require('../../models');
const { Healings } = require('../../models');
const { verify } = require('jsonwebtoken');

module.exports = (req, res) => {
    const isAuthorized = (req) => {
        const authorization = req.cookies.accessToken;
        if(!authorization) {
          return null;
        };
        const userInfo = authorization;
        try {
          return verify(userInfo, process.env.ACCESS_SECRET);
        } catch (err) {
          return null;
        }
    }

    const accessTokenData = isAuthorized(req);
    
    if(!accessTokenData) {
        res.status(401).send({ data: null, message: 'Not Authorized!' });
    } else {
        Zzims
            .findAll({ where: { user_id: accessTokenData.id} })
            .then((data) => {
                const healing_id = data.map(el => el.healing_id)
                Healings
                    .findAll({ where: { id: healing_id } })
                    .then((data) => {
                        const healing = data.map(el => el.dataValues)
                        return res.send(healing);
                    })
                    .catch((err) => {
                      console.log(err);
                  });
            })
            .catch((err) => {
              console.log(err);
            });
    }
}