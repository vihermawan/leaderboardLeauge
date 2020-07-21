import React, { Component } from 'react';
import { Layout, Row, Col,Input } from 'antd';
import '../../assets/scss/home.scss';

class HomeComponent extends Component {
    state = {  }
    render() { 
        const image1 = require(`../../assets/svg/landing.svg`);
        const { Content } = Layout;
        const { Search } = Input;
        return ( 
            <Layout>
                <Content className="landing-container pb-40" > 
                    <Row className="section-container">
                        <Col lg={12} md={12} sm={12}>
                            <Row>
                                <Col span={24}>
                                    <div className="title-container">
                                        <span className="font-title font-bold green">Temukan informasi liga-liga top dunia di sini!</span>
                                    </div>
                                </Col>
                                <Col span={24}> 
                                    <div className="image-hidden">
                                        <img
                                            src={image1}
                                            alt="Home 1"
                                            style={{maxWidth: '100%'}}
                                        />
                                    </div>   
                                    <div className="description-container">
                                        <span className="font-title-content font-light">Cari informasi liga yang kamu mau, serta lihat ada di posisi berapa klub jagoanmu!</span>
                                    </div>                             
                                </Col>
                                <Col span={24}> 
                                    <div className="seacrh-container">
                                        <Search
                                            placeholder="input search text"
                                            onSearch={value => console.log(value)}
                                            style={{ width: 200, height: 40, borderColor:'#00923F',borderRadius:'5px' }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <div className="image-big-container">
                                <img
                                    src={image1}
                                    alt="Home 1"
                                    style={{width: '70%',marginLeft:'15%'}}
                                />
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>    
        );
    }
}
 
export default HomeComponent;