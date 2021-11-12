const { Users } = require('../../models');
const { Comments } = require('../../models');
const { verify } = require('jsonwebtoken');

module.exports = (req, res) => {
    const postId = req.body.boardId;
    const content = req.body.content;

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
              .create({
                  content: content,
                  post_id: postId,
                  user_nickname: userNickName
              })
              .then(() => {
                  return res.json({ message: "Comment Successfully Posted!" })
              })
              .catch((err) => {
                console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
      });
}
