const { Zzims } = require('../../models');
const { verify } = require('jsonwebtoken');


module.exports = async (req, res) => {

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

    const healing_id = req.body.healing_id;
    const alreadyAdded = await Zzims.findOne({ where: { healing_id: healing_id } });

    if(!accessTokenData) {
        res.status(401).send({ data: null, message: 'Not Authorized!' });
    } else {
        if(!alreadyAdded) {
            return res.send("Zzim Not Found!");
        } else {
            Zzims
            .destroy({ where: { user_id: accessTokenData.id, healing_id: healing_id } })
            .then(() => {
                return res.status(205).json({ message: 'Zzim Successfully Deleted!' })
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }
};