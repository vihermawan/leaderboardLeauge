import React, { Component } from 'react';
import { Layout, Row, Col, Table} from 'antd';

class PremierComponent extends Component {
    state = {  }
    render() { 
        const { Content } = Layout;
        const {data, columns} = this.props;
        return ( 
            <Layout>
            <Content className="dashboard-section-content background-white">
                <Row>
                    <Col lg={24} md={24} sm={24}>
                        <span className="font-bold font-title-content black">Tabel Klasemen Liga Inggris</span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={24} md={24} sm={24} className="mt-20">
                        <div className="dashboard-section-table-dashboard">
                            <Table
                                columns={columns} 
                                dataSource={data} 
                                className="table-dashboard"
                                scroll={{ x: 1800 }}
                            />
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
        );
    }
}
 
export default PremierComponent;