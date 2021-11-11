import React from 'react';
import Header from '../components/header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WrittenBoard from './written/WrittenBoard';
import BoardView from '../pages/written/BoardView'
import BoardWrite from '../pages/written/BoardWrite'

function Written({isLogin, userinfo, handleLogout}) {
    return (
        <div>
            <Header userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout} />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/written" 
                            render={()=><WrittenBoard userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout}/>}/>
                        <Route path="/board/view/:id" 
                            render={()=> <BoardView  userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout}/>}/> 
                        <Route exact path="/board/write" 
                            render={()=> <BoardWrite userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout}/>}/>
                        <Route path="/board/write/:id"
                            render={()=> <BoardWrite userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout}/>}/>
                    </Switch>
                </BrowserRouter>
        </div>
    )
}

export default Written
