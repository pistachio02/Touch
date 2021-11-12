const { Users } = require('../../models');
const { Posts } = require('../../models');
const { Comments } = require('../../models');
const { verify } = require('jsonwebtoken');

module.exports = (req, res) => {
    const postId = req.body.id;

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
            const cUserNickName = data.nickname;
            Posts
                .findOne({ where: { id: postId } })
                .then((data) => {
                    const pUserNickName = data.dataValues.user_nickname;
                    if(cUserNickName === pUserNickName){
                        Comments
                            .destroy({ where: { post_id: postId } })
                            .then(() => {
                                Posts
                                    .destroy({ where: { id: postId } })
                                    .then(() => {
                                        res.send("Post Successfully Deleted!");
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    });
                            }).catch((err) => {
                                console.log(err);
                            });
                    } else {
                        res.send("Not Allowed!");
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