import React, {Component} from 'react'; 
import SpanyolComponent from '../../../modules/standing-component/liga-component/spanyol-component';

class SpanyolPage extends Component { 
    state = {

    }
    render(){
        return (
            <SpanyolComponent
                initialData = {this.state}
            />
        );
    }
}

export default SpanyolPage;
