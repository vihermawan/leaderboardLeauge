import React, {Component} from 'react'; 
import ChampiosComponent from '../../../modules/standing-component/liga-component/champions-component';

class ChampiosPage extends Component { 
    state = {

    }
    render(){
        return (
            <ChampiosComponent
                initialData = {this.state}
            />
        );
    }
}

export default ChampiosPage;
