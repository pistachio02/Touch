import React from 'react';
import Header from '../components/header/Header';
import UserUpdate from './edit/UserUpdate';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MypageSidebar from '../components/maincomponent/sidebar/MypageSidebar';

function UserEdit({isLogin, userinfo, handleLogout}) {
    return (
        <div>
            <Header userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout} />
            
            <Switch>
                <Route exact path="/edit" 
                render={()=><UserUpdate userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout} />}></Route>

                
            </Switch>
          
        </div>
    )
}

export default UserEdit