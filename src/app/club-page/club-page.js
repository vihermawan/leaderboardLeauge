import React, {Component} from 'react'; 
import ClubComponent from '../../modules/club-component/club-component';

class ClubPage extends Component { 
    state = {

    }
    render(){
        return (
            <ClubComponent
                initialData = {this.state}
            />
        );
    }
}

export default ClubPage;
