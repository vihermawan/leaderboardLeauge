import React, {Component} from 'react'; 
import StandingComponent from '../../modules/standing-component/standing-component';

class StandingPage extends Component { 
    state = {

    }
    render(){
        return (
            <StandingComponent
                initialData = {this.state}
            />
        );
    }
}

export default StandingPage;
