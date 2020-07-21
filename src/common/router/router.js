import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import HomePage from '../../app/home-page/home-page';
import ClubPage from '../../app/club-page/club-page';
import StandingPage from '../../app/standing-page/standing-page';

class RouterPage extends Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route  path="/standing" component={StandingPage} />
                <Route  path="/club" component={ClubPage}/>
            </Switch>
        );
    }
}

export default RouterPage;