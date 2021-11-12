const { Users } = require('../../models');
require('dotenv').config();
const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
    const { email, password } = req.body;

    Users
        .findOne({ where: { email } })
        .then((data) => {

            if(!data) {
                return res.send('Invalid E-mail!');
            }
            const hashedPassword = bcrypt.compareSync(password, data.dataValues.password);
            if(!hashedPassword) {
                return res.send('Invalid Password!');
            }
            const generateAccessToken = (userInfo) => {
                delete userInfo.password;
                return sign(userInfo, process.env.ACCESS_SECRET, { expiresIn: "7d" });
            }
            const accessToken = generateAccessToken(data.dataValues);
            return res
                .cookie("accessToken", accessToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    expiresIn: "1d"
                })
                .status(200)
                .json({ 
                    userInfo: data.dataValues,
                    message: 'Successfully Logged In!' 
                });
        })
        .catch((err) => {
            console.log(err);
        });
};