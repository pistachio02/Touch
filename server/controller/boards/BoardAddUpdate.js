const { Users } = require('../../models');
const { Posts } = require('../../models');
const { verify } = require('jsonwebtoken');

module.exports = (req, res) => {
    const postId = req.body.id;
    const postTitle = req.body.title;
    const postContent = req.body.content;

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

    if(postId === undefined){
        Users
            .findOne({ where: { id: accessTokenData.id } })
            .then((data) => {
                const nickname = data.nickname;
                Posts
                    .create({
                        title: postTitle,
                        content: postContent,
                        user_nickname: nickname
                    })
                    .then(() => {
                        return res.send("Post Successfully Posted!")
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
      Users
          .findOne({ where: { id: accessTokenData.id } })
          .then((data) => {
                const cnickname = data.nickname;
                Posts
                    .findOne({ where: { id: postId } })
                    .then((data) => {
                        const pnickname = data.user_nickname;

                        if(cnickname === pnickname) {
                            Posts
                                .update({
                                    title: postTitle,
                                    content: postContent,
                                    user_nickname: cnickname
                                }, 
                                { where: { id: postId }})
                                .then(() => {
                                    return res.send("Post Successfully Updated!")
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        } else {
                          res.send("Not Allowed!" )
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
}