const { Zzims } = require('../../models');
const { verify } = require('jsonwebtoken');


module.exports = async (req, res) => {

    const isAuthorized = (req) => {
        const authorization = req.cookies.accessToken;
        if(!authorization) {
          return null;
        };
        const userInfo = authorization;
        try {
          return verify(userInfo, process.env.ACCESS_SECRET);
        } catch (err) {
          return null;
        }
    }

    const accessTokenData = isAuthorized(req);

    const healing_id = req.body.healing_id;

    const alreadyAdded = await Zzims.findAll({ where: { user_id: accessTokenData.id } });
    
    const alAdded = alreadyAdded.map((el) => {
        if(el.healing_id === healing_id) {
            return true;
        } else {
            return false;
        }
    })

    if(!accessTokenData) {
        return res.status(401).send({ data: null, message: 'Not Authorized!' });
    } else {
        for(const el of alAdded){
            if(el === true){
                return res.send("Already Added to Zzim!");
            }
        }
        Zzims
            .create({
                user_id: accessTokenData.id,
                healing_id: healing_id
            })
            .then(() => {
                return res.status(201).json({ message: "Zzim Successfully Added!" });
            })
            .catch((err) => {
                console.log(err);
            });
    }
};