const { Users } = require('../../models');
const { verify } = require('jsonwebtoken');

module.exports = async (req, res) => {

    const newNickname = req.body.userNickname;

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

    const userNickname = await Users.findOne({ where: { nickname: newNickname }});
    
    if(!accessTokenData) {
        res.status(401).send({ data: null, message: 'Not Authorized!' });
    } else {
        Users
            .findOne({ where: { id: accessTokenData.id } })
            .then(() => {
                if(userNickname !== null){
                    return res.send("Nickname Is Being Used By Other User!");
                } else {
                    Users
                        .update({ nickname: newNickname}, { where: { id: accessTokenData.id } })
                        .then(() => {
                            return res.status(200).json({ message: 'Nickname Successfully Updated!' })
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
};
