import React from 'react';
import Header from '../components/header/Header';
import UserUpdate from './edit/UserUpdate';
import { Route, Switch } from 'react-router-dom';

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