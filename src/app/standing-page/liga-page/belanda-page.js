import React, {Component} from 'react'; 
import BelandaComponent from '../../../modules/standing-component/liga-component/belanda-component';

class BelandaPage extends Component { 
    state = {

    }
    render(){
        return (
            <BelandaComponent
                initialData = {this.state}
            />
        );
    }
}

export default BelandaPage;
