const { Users } = require('../../models');
require('dotenv').config();
const { verify } = require('jsonwebtoken');

module.exports = (req, res) => {
    const accessToken = req.cookies.accessToken;
    if(!accessToken) {
        return res.status(401).json({ "message": "Invalid accessToken!" })
    }
    const userInfo = verify(accessToken, process.env.ACCESS_SECRET);
    Users
        .findOne({ where: { email: userInfo.email }})
        .then((data) => {
            if(!data) {
                return res.status(401).json({ "message": "Invalid accessToken!" });
            }
            Users.destroy({ where: { email: userInfo.email } })
            return res
                    .clearCookie('accessToken')
                    .status(205)
                    .json({ message: 'Successfully Unregistered!' });
        })
        .catch((err) => {
            console.log(err);
        });
};