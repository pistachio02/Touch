import React from 'react'
import Header from '../../components/header/Header'
import FavoriteCardList from '../../components/maincomponent/favoritecard/FavoriteCardList'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Favorite({userinfo, isLogin, handleLogout}) {
    return (
        <div>
            <Header userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout}/>
            <BrowserRouter>
            <Switch>
                <Route exact path="/favorite" 
                render={()=><FavoriteCardList userinfo={userinfo}  isLogin={isLogin} handleLogout={handleLogout}/>}></Route>
            </Switch>
            </BrowserRouter>
           
        </div>
    )
}

export default Favorite