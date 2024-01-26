import React from 'react';
import '../Barchasi/Barchasi.css';
import {Col, Row,Card} from "antd";
const {Meta}=Card;
class Barchasi extends  React.Component{
    render() {
        return(
            <section>
                <div className="interactive">
                    <div className="container1">
                        <Row>
                            <Col lg={16} md={14} sm={14}  xs={14}>
                                <p style={{width:'100%',padding:'10px',fontSize:'30px'}}><strong>Videolar</strong></p>
                            </Col>
                        </Row>
                    </div>
                    <div className="interComponent">
                        <div className="container1">
                            <Row>
                                <Col lg={6} md={12} xs={24}>
                                    <div style={{width:'100%',padding:'20px'}} >
                                        <Card
                                            hoverable
                                            style={{ width: "100%",boxShadow:'none' }}
                                            cover={<img alt="example" src="http://213.230.99.101:2021/api/auth/file/a8cc5fc7-fb2b-400e-a3f1-6e4239094c58.jpg" />}
                                        >
                                            <Meta  description={<h3>Institut haqida qisqacha</h3>} title="06.06.2021"/>
                                        </Card>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} xs={24}>
                                    <div style={{width:'100%',padding:'20px'}} >
                                        <Card
                                            hoverable
                                            style={{ width: "100%",boxShadow:'none'}}
                                            cover={<img alt="example" src="http://213.230.99.101:2021/api/auth/file/2e0a1c84-aeda-432e-ac85-f2b2ea5d252c.jpg" />}
                                        >
                                            <Meta  description={<h4>   Kimyogar Dan Shehtman bilan uchrashuv</h4>} title="06.06.2021" />
                                        </Card>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} xs={24}>
                                    <div style={{width:'100%', padding:'20px'}} >
                                        <Card
                                            hoverable
                                            style={{ width: "100%",boxShadow:'none' }}
                                            cover={<img alt="example" src="http://213.230.99.101:2021/api/auth/file/1baa63b0-0746-47d1-8ddb-a6573a7ba8b5.jpg" />}
                                        >
                                            <Meta  description={<h4>   Xalqaro munosabatlar: Islom taraqqiyot banki (ITB) talabalar uchun stipendiyalar tanlovini e'lon qiladi</h4>} title="06.06.2021" />
                                        </Card>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} xs={24}>
                                    <div style={{width:'100%',padding:'20px'}}  >
                                        <Card

                                            className="hover-item"
                                            hoverable
                                            style={{ width: "100%",boxShadow:'none'}}
                                            cover={<img alt="example" src="http://213.230.99.101:2021/api/auth/file/b4d16249-da3e-4f29-a1f0-21586c475af1.jpg" />}
                                        >
                                            <Meta  description={<h4>Xalqaro munosabatlar: AQSHning TDP texnologiyasi </h4>} title="06.03.2021"  />
                                        </Card>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} xs={24}>
                                    <div style={{width:'100%',padding:'20px'}} >
                                        <Card
                                            hoverable
                                            style={{ width: "100%",boxShadow:'none' }}
                                            cover={<img alt="example" src="http://213.230.99.101:2021/api/auth/file/a8cc5fc7-fb2b-400e-a3f1-6e4239094c58.jpg" />}
                                        >
                                            <Meta  description={<h3>Institut haqida qisqacha</h3>} title="06.06.2021"/>
                                        </Card>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} xs={24}>
                                    <div style={{width:'100%',padding:'20px'}} >
                                        <Card
                                            hoverable
                                            style={{ width: "100%",boxShadow:'none'}}
                                            cover={<img alt="example" src="http://213.230.99.101:2021/api/auth/file/2e0a1c84-aeda-432e-ac85-f2b2ea5d252c.jpg" />}
                                        >
                                            <Meta  description={<h4>   Kimyogar Dan Shehtman bilan uchrashuv</h4>} title="06.06.2021" />
                                        </Card>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} xs={24}>
                                    <div style={{width:'100%', padding:'20px'}} >
                                        <Card
                                            hoverable
                                            style={{ width: "100%",boxShadow:'none' }}
                                            cover={<img alt="example" src="http://213.230.99.101:2021/api/auth/file/1baa63b0-0746-47d1-8ddb-a6573a7ba8b5.jpg" />}
                                        >
                                            <Meta  description={<h4>   Xalqaro munosabatlar: Islom taraqqiyot banki (ITB) talabalar uchun stipendiyalar tanlovini e'lon qiladi</h4>} title="06.06.2021" />
                                        </Card>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} xs={24}>
                                    <div style={{width:'100%',padding:'20px'}}  >
                                        <Card

                                            className="hover-item"
                                            hoverable
                                            style={{ width: "100%",boxShadow:'none'}}
                                            cover={<img alt="example" src="http://213.230.99.101:2021/api/auth/file/b4d16249-da3e-4f29-a1f0-21586c475af1.jpg" />}
                                        >
                                            <Meta  description={<h4>Xalqaro munosabatlar: AQSHning TDP texnologiyasi </h4>} title="06.03.2021"  />
                                        </Card>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}export default  Barchasi;