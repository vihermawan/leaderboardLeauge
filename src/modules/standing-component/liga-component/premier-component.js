import React, { Component } from 'react';
import { Layout, Row, Col, Table} from 'antd';
import LoadingContainer from '../../../common/component/loading/loadingContainer';

class PremierComponent extends Component {
    state = {  }
    render() { 
        const { Content } = Layout;
        const {data, columns, initialData} = this.props;
        return ( 
            <Layout>
            <Content className="dashboard-section-content background-white">
                <LoadingContainer loading={initialData.loading}>
                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <span className="font-bold font-title-content black">Tabel Klasemen Liga Inggris</span>
                            <br/>
                            <span>{initialData.tanggal_mulai}</span>
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
                </LoadingContainer>
            </Content>
        </Layout>
        );
    }
}
 
export default PremierComponent;