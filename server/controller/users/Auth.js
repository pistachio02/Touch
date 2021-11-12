const { Users } = require('../../models');
const { verify } = require('jsonwebtoken');

module.exports = async (req, res) => {

    const isAuthorized = (req) => {
        const authorization = req.cookies.accessToken;
        if(!authorization) {
          return null;
        }
        const userInfo = authorization
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
        Users
            .findOne({ where: { id: accessTokenData.id } })
            .then((data) => {
                delete data.dataValues.password;
                return res.status(200).json({ data: { userInfo: data.dataValues }, message: 'ok!' })
            })
            .catch((err) => {
                console.log(err);
            });
    }
}