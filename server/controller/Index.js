module.exports = {
    auth: require('./users/Auth'),
    register: require('./users/Register'),
    login: require('./users/LogIn'),
    logout: require('./users/LogOut'),
    kakaogooglelogin: require('./users/KakaoGoogleLogIn'),
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
    zzim: require('./myPages/ZzimList'),
    addZzim: require('./myPages/AddZzim'),
    deleteZzim: require('./myPages/DeleteZzim'),
    myPosts: require('./myPages/MyPost'),
    // ( ++++++++++++++++++++ 혹시몰라 혹시몰라 혹시몰라 ++++++++++++++++++++ )
    changeNick: require('./myPages/ChangeNick'),
    changePW: require('./myPages/ChangePW'),
};
