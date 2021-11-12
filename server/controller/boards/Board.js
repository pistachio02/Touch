const { Posts } = require('../../models');

module.exports = (req, res) => {
    const postId = req.params.id;

    Posts
        .findAll({ where: { id: postId } })
        .then((data) => {
            const postInfo = data[0].dataValues
            res.json({ postInfo })
        })
        .catch((err) => {
            console.log(err);
        });
}