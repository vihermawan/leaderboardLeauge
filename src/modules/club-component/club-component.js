import React, { Component } from 'react';
import { Layout, Row, Col, } from 'antd';

class ClubComponent extends Component {
    state = {  }
    render() { 
        const { Content } = Layout;
        return ( 
            <Layout>
                <Content className="landing-container pb-40" > 
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>
                </Content>
            </Layout> 
        );
    }
}
 
export default ClubComponent;