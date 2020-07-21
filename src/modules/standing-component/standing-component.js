import React, { Component } from 'react';
import { Layout, Row, Col, Tabs } from 'antd';
import '../../assets/scss/standing.scss';
/*Impor Page */
import LigaBelanda from '../../app/standing-page/liga-page/belanda-page';
import LigaInggris from '../../app/standing-page/liga-page/premier-page';
import LigaPerancis from '../../app/standing-page/liga-page/perancis-page';
import LigaSpanyol from '../../app/standing-page/liga-page/spanyol-page';
import LigaChampions from '../../app/standing-page/liga-page/champions-page';
/*End Impor Page */

class StandingComponent extends Component {
    state = {  }
    render() { 
        const { Content } = Layout;
        const { TabPane } = Tabs;
        // const { callback } = this.props;
        return ( 
            <Layout>
                <Content className="landing-container pb-40" > 
                    <Row className="section-container">
                        <Col lg={24} md={24} sm={24}>
                            <div className="section-container-title-standing title-container">
                                <span className="font-title font-bold green">Pilih Liga yang kamu mau!</span>
                                <br/>
                                <span className="font-title-content font-light">Temukan clubmu berada di posisi berapa!</span>
                            </div>
                        </Col>
                    </Row>
                    <Row className="section-container">
                        <Col lg={24} md={24} sm={24}>
                            <div className="section-container-standing">
                                <Tabs type="card">
                                    <TabPane tab="Liga Inggris" key="1">
                                        <LigaInggris />
                                    </TabPane>
                                    <TabPane tab="Liga Perancis" key="2">
                                       <LigaPerancis />
                                    </TabPane>
                                    <TabPane tab="Liga Belanda" key="3">
                                       <LigaBelanda />
                                    </TabPane>
                                    <TabPane tab="Liga Spanyol" key="4">
                                        <LigaSpanyol />
                                    </TabPane>
                                    <TabPane tab="Liga Champions" key="5">
                                        <LigaChampions />
                                    </TabPane>
                                </Tabs>
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}
 
export default StandingComponent;