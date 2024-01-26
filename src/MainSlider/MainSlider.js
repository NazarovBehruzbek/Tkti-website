import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Row,Col} from 'antd'
import "./MainSlayd.css"
import {LeftOutlined,RightOutlined} from "@ant-design/icons";
class MainSlider extends React.Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render(){
        const settings = {
            infinite: true,
            fade: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <section >

                <div>
                    <Row>
                        <Col md={24}>
                            <div className="real-container">
                                <div style={{marginTop:'30px'}}>
                                    <Slider ref={c => (this.slider = c)} {...settings} dots={true}>
                                        <div>
                                            <div style={{width:'100%',height:'423px', textAlign:'center',position:'relative'}}>
                                                <Row>
                                                    <Col md={24} xs={24}>
                                                       <div style={{position:'relative'}}>
                                                           <img className="SlaydImg" style={{width:'100%'}} src="https://en.ktu.edu/wp-content/uploads/sites/5/2020/12/edu-skaidres-05.jpg" alt="Xatolik"/>
                                                          <Row>
                                                              <Col md={10} xs={10}>
                                                                  <p className="SlaydFooter slaydFoterTitle"><strong>Peer-to-peer consultations powered by Unibuddy</strong></p>
                                                              </Col>
                                                          </Row>
                                                       </div>
                                                    </Col>

                                                </Row>

                                            </div>
                                        </div>
                                        <div>
                                            <div style={{width:'100%',height:'500px', textAlign:'center'}}>
                                                <img style={{width:'100%'}} src="https://en.ktu.edu/wp-content/uploads/sites/5/2020/12/edu-skaidres-04.jpg" alt="Xatolik"/>
                                                <h2 className="SlaydFooter slaydFoterTitle"><strong>Peer-to-peer consultations powered by Unibuddy</strong></h2>
                                            </div>
                                        </div>
                                        {/*<div>*/}
                                        {/*    <div style={{width:'100%',height:'500px', textAlign:'center'}}>*/}
                                        {/*        <img style={{width:'100%'}} src="https://en.ktu.edu/wp-content/uploads/sites/5/2020/12/edu-skaidres-06.jpg" alt="Xatolik"/>*/}
                                        {/*        <h2 className="SlaydFooter slaydFoterTitle"><strong>Peer-to-peer consultations powered by Unibuddy</strong></h2>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                    </Slider>
                                </div>
                                <p style={{fontSize:'20px',cursor:'pointer',float:'left',marginTop:'30px',marginRight:'30px'}} onClick={this.previous}><LeftOutlined/></p>
                                <p style={{fontSize:'20px',cursor:'pointer',marginTop:'30px'}} onClick={this.next}><RightOutlined/></p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}
export default MainSlider;