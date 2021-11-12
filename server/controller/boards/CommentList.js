const { Comments } = require('../../models');

module.exports = (req, res) => {
    const postId = req.params.id;
    
    Comments
        .findAll({ where: { post_id: postId } })
        .then((data) => {
            const commentInfo = data.map((el) => { return el.dataValues })
            res.json({ commentInfo })
        })
        .catch((err) => {
            console.log(err);
        });
}