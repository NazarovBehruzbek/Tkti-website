import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Row,Col} from 'antd'
import "./firstSlider.css"
import {LeftOutlined,RightOutlined} from "@ant-design/icons";
import axios from "axios";
import MainSlider from "../MainSlider/MainSlider";
import {connect} from "react-redux";
import {uzLanguage} from "../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../Redux/Actions/RuLanguage";
import {enLanguage} from "../Redux/Actions/EnLanguage";
class FirstSlider extends React.Component{
    state={
        MainSliders:[],
    }

    bb=()=>{
    document.querySelector(".nuqtalar").classList.toggle("nuqtalar1")
}
GetSliders=()=>{
    const {MainSliders}=this.state;
    axios.get(" http://213.230.99.101:2021/api/auth/mainsliders").then(res=>{

        this.setState({
            MainSliders:res.data,
        })
    }).catch(res=>{
        console.log("xatolik")
    })
}
    componentDidMount() {
  this.GetSliders();
    }
    render() {
        const {uzLang,enLang}=this.props;
    const {MainSliders}=this.state;
        const settings = {
            dots:true,
            fade:true,
            // autoplay:true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            customPaging: i => (
                <div
                    onMouseDown={this.bb}
                    className="nuqtalar"
                    style={{
                        width: "20px",
                        height: '20px',
                        borderRadius: '2px',
                        border: "2px black solid",
                    }}
                >
                </div>
            )

        };
        return (
<section>

  <div name="BoshSahifa" style={{marginTop:'50px',marginBottom:'50px'}}>
      <div className="first-container">
          <Slider  {...settings} >
              {MainSliders.map(item=>{
                  return(
                      <div>
                          <Row>
                              <Col md={24} sm={24} xs={24}>
                                  <div>
                                      <img style={{width:'100%'}} src={"http://213.230.99.101:2021"+item.logo} alt="Xatolik"/>
                                  </div>
                              </Col>
                          </Row>
                          <div>
                              <Row>
                                  <Col md={24} sm={24} xs={24} lg={10}>
                                      <div className="foter-slider">
                                          <p  style={{fontSize:'30px',padding:'20px 10px'}}><strong>{uzLang?item.titleUz:enLang?item.titleEn:item.titleRu}</strong></p>
                                      </div>
                                  </Col>
                              </Row>
                          </div>
                      </div>
                  )
              })}

          </Slider>
      </div>
  </div>
</section>
        )
    }}
const mapStateToProps = (state) => {

    return {
        uzLang: state.changeLang.uzLang,
        enLang: state.changeLang.enLang,
    };
};
export default connect(mapStateToProps,{uzLanguage,ruLanguage,enLanguage})(
    FirstSlider
)