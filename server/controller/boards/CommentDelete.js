const { Users } = require('../../models');
const { Comments } = require('../../models');
const { verify } = require('jsonwebtoken');

module.exports = (req, res) => {
    const commentId = req.body.id;

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

    Users
        .findOne({ where: { id: accessTokenData.id } })
        .then((data) => {
            const userNickName = data.dataValues.nickname;
            Comments
                .findOne({ where: { id: commentId } })
                .then((data) => {
                    const comment_User_Nickname = data.dataValues.user_nickname
                    if(userNickName === comment_User_Nickname) {
                        Comments
                            .destroy({ where: { id: commentId } })
                            .then(() => {
                                return res.send("Comment Successfully Deleted!")
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    } else {
                        return res.send('Not Allowed!')
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
}