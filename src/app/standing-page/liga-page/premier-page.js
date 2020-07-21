import React, {Component} from 'react'; 
import PremierComponent from '../../../modules/standing-component/liga-component/premier-component';

class PremierPage extends Component { 
    state = {
        standing : [],
        tanggal_mulai : '',
        tanggal_selesai : '',
        loading: false,
    }

    componentDidMount(){
        this.getData();

        // this.setState({
        //     tanggal_mulai : json.season.startDate,
        //     tanggal_selesai : json.season.endDate,
        // })
    }

    getData = async () =>{
        let headers = {
            'X-Auth-Token' : '2d8c0efa2cca4b2db7e51f3265d872be'
        };

        let config = {
            headers : headers,
        }
        this.setState({loading : true})
        const response = await fetch('https://api.football-data.org/v2/competitions/2021/standings?standingType=HOME',config)
       
        if( response.status === 200) {
            const json = await response.json();
            console.log('data', response)
            this.setState({loading : false})
        }
        
    }


    render(){

        const data = [
            {
                key: '1',
                name: 'Mike',
                age: 32,
                address: '10 Downing Street',
            },
            {
                key: '2',
                name: 'John',
                age: 42,
                address: '10 Downing Street',
            },
        ];
          
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
        ];

        return (
            <PremierComponent
                initialData = {this.state}
                data = {data}
                columns = {columns}
            />
        );
    }
}

export default PremierPage;
