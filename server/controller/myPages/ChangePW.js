const { Users } = require('../../models');
const { verify } = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

    const newPassword = req.body.userPassword;
    const hashedPassword = bcrypt.hashSync(newPassword, 10);

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
                const oldPW = data.dataValues.password;
                const rawOldPW = bcrypt.compareSync(newPassword, oldPW);
                if(rawOldPW === true) {
                    return res.send('Your Password Is Same As The Old One!');
                } else {
                    Users
                        .update({ password: hashedPassword }, { where: { id: accessTokenData.id } })
                        .then(() => {
                            return res.status(200).json({ message: 'Password Successfully Updated!' })
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

}
