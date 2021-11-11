import React from 'react';
import Header from '../components/header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BoardList from './board/BoardList';
import BoardWrite from './board/BoardWrite';
import BoardView from './board/BoardView';

function Board({isLogin, userinfo, handleLogout}) {
    return (
        <div>
            <Header userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout} />
            <BrowserRouter>
            <Switch>
                <Route exact path="/board" component={BoardList} userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout}/>
                <Route exact path="/board/write" component={BoardWrite} userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout}/>
                <Route path="/board/write/:id" component={BoardWrite} userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout}/>
                <Route path="/board/view/:id" component={BoardView} userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout}/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Board
