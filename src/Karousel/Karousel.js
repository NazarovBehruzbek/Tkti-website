import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Row,Col} from 'antd'
import "./karousel.css"
import {LeftOutlined,RightOutlined} from "@ant-design/icons";
class Karousel extends React.Component{
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
            dots:true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
        };
        return (
          <section >
              <div style={{width:'100%',height:'10vh',backgroundColor:'#F3F2EE'}}>
                  <div className="real-container">
                      <p style={{lineHeight:'65px',fontSize:'25px'}}>Iqtidorli talabalar</p>
                  </div>
              </div>
              <div>
    <Row>
        <Col md={24}>
            <div className="real-container">
                <div style={{marginTop:'30px'}}>
                    <Slider ref={c => (this.slider = c)} {...settings} >
                        <div>
                            <div style={{width:'300px',height:'300px', textAlign:'center'}}>
                                <img style={{width:'170px',height:'170px',borderRadius:'100%',border:'solid 1px #F3F2EE',marginLeft:'60px'}} src="http://213.230.99.101:2021/api/auth/file/63b6e130-dd71-4a91-a3c4-18edc1472108" alt="Xatolik"/>
                                <p style={{fontSize:'18px',color:'#264796'}}>Jamoliddinov Komoliddin Muxamadaminovich</p>
                                <p style={{fontSize:'16px',color:'#AEAEAE'}}>“Yosh ixtirochi–2018” tanlovi III-darajali diplom sohibi</p>
                            </div>
                        </div>
                        <div>
                            <div style={{width:'300px',height:'300px', textAlign:'center'}}>
                                <img style={{width:'170px',height:'170px',borderRadius:'100%',border:'solid 1px #F3F2EE',marginLeft:'60px'}} src="http://213.230.99.101:2021/api/auth/file/63b6e130-dd71-4a91-a3c4-18edc1472108" alt="Xatolik"/>
                                <p style={{fontSize:'18px',color:'#264796'}}>Jamoliddinov Komoliddin Muxamadaminovich</p>
                                <p style={{fontSize:'16px',color:'#AEAEAE'}}>“Yosh ixtirochi–2018” tanlovi III-darajali diplom sohibi</p>
                            </div>
                        </div>
                        <div>
                            <div style={{width:'300px',height:'300px', textAlign:'center'}}>
                                <img style={{width:'170px',height:'170px',borderRadius:'100%',border:'solid 1px #F3F2EE',marginLeft:'60px'}} src="http://213.230.99.101:2021/api/auth/file/63b6e130-dd71-4a91-a3c4-18edc1472108" alt="Xatolik"/>
                                <p style={{fontSize:'18px',color:'#264796'}}>Jamoliddinov Komoliddin Muxamadaminovich</p>
                                <p style={{fontSize:'16px',color:'#AEAEAE'}}>“Yosh ixtirochi–2018” tanlovi III-darajali diplom sohibi</p>
                            </div>
                        </div>
                        <div>
                            <div style={{width:'300px',height:'300px', textAlign:'center'}}>
                                <img style={{width:'170px',height:'170px',borderRadius:'100%',border:'solid 1px #F3F2EE',marginLeft:'60px'}} src="http://213.230.99.101:2021/api/auth/file/63b6e130-dd71-4a91-a3c4-18edc1472108" alt="Xatolik"/>
                                <p style={{fontSize:'18px',color:'#264796'}}>Jamoliddinov Komoliddin Muxamadaminovich</p>
                                <p style={{fontSize:'16px',color:'#AEAEAE'}}>“Yosh ixtirochi–2018” tanlovi III-darajali diplom sohibi</p>
                            </div>
                        </div>
                        <div>
                            <div style={{width:'300px',height:'300px', textAlign:'center'}}>
                                <img style={{width:'170px',height:'170px',borderRadius:'100%',border:'solid 1px #F3F2EE',marginLeft:'60px'}} src="http://213.230.99.101:2021/api/auth/file/63b6e130-dd71-4a91-a3c4-18edc1472108" alt="Xatolik"/>
                                <p style={{fontSize:'18px',color:'#264796'}}>Jamoliddinov Komoliddin Muxamadaminovich</p>
                                <p style={{fontSize:'16px',color:'#AEAEAE'}}>“Yosh ixtirochi–2018” tanlovi III-darajali diplom sohibi</p>
                            </div>
                        </div>
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
export default Karousel;