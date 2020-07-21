import React, { Component } from 'react';
import { Drawer, Button, Menu} from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/scss/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrophy, faFutbol } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {

    state = {
        current: 'home',
        visible : false,
    }

    componentDidMount(){

    }

    handleClick = e => {
		this.setState({ current: e.key });
	};
	showDrawer = () => {
		this.setState({ visible: true });
	};
	onClose = () => {
		this.setState({ visible: false });
	};

    render(){
        return(
            <nav className="menuBar">
                <div className="menuCon">
					<div className="font-medium font-content">
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="home">
                                <FontAwesomeIcon icon={faFutbol} />
                                <Link to="/">Home</Link> 
                            </Menu.Item>
                            <Menu.Item key="standing">
                                <FontAwesomeIcon icon={faTrophy} />
                                <Link to="/standing">Standing</Link>
                            </Menu.Item>
                            <Menu.Item key="club">
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <Link to="/club">Club</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
                <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                    <span className="barsBtn"></span>
                </Button>
                <Drawer
                    title="Menu"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p><Link to='/'> Beranda </Link></p>
                    <p><a href="/event">Event</a></p>
                    <p><Link to='/login' className="text-black"> Masuk </Link></p>
                </Drawer>
            </nav>
        );
    }
}

export default Navbar;