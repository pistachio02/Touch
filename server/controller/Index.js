module.exports = {
    auth: require('./users/auth'),
    register: require('./users/register'),
    login: require('./users/logIn'),
    logout: require('./users/logOut'),
    kakaogooglelogin: require('./users/kakaoGoogleLogIn'),
    // ( ++++++++++++++++++++ 띄어놓기 띄어놓기 띄어놓기 ++++++++++++++++++++ )
    healing: require('./healings/Healing'),
    // ( ++++++++++++++++++++ 띄어놓기 띄어놓기 띄어놓기 ++++++++++++++++++++ )
    posts: require('./boards/BoardList'),
    post: require('./boards/Board'),
    addUpdatePost: require('./boards/BoardAddUpdate'),
    deletePost: require('./boards/BoardDelete'),
    comments: require('./boards/CommentList'),
    addComment: require('./boards/CommentAdd'),
    deleteComment: require('./boards/CommentDelete'),
    // ( ++++++++++++++++++++ 띄어놓기 띄어놓기 띄어놓기 ++++++++++++++++++++ )
    unRegister: require('./myPages/UnRegister'),
    zzim: require('./myPages/zzimList'),
    addZzim: require('./myPages/addZzim'),
    deleteZzim: require('./myPages/deleteZzim'),
    myPosts: require('./myPages/myPost'),
    // ( ++++++++++++++++++++ 혹시몰라 혹시몰라 혹시몰라 ++++++++++++++++++++ )
    changeNick: require('./myPages/ChangeNick'),
    changePW: require('./myPages/ChangePW'),
};