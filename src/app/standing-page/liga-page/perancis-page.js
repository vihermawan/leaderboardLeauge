import React, {Component} from 'react'; 
import PerancisComponent from '../../../modules/standing-component/liga-component/perancis-component';

class PerancisPage extends Component { 
    state = {

    }
    render(){
        return (
            <PerancisComponent
                initialData = {this.state}
            />
        );
    }
}

export default PerancisPage;
