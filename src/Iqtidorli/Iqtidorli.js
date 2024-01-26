import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Iqtidorli/Iqtidorlilar.css';
import {Col, Row,Card} from "antd";
import Slider from "react-slick";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import {uzLanguage} from "../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../Redux/Actions/RuLanguage";
import {enLanguage} from "../Redux/Actions/EnLanguage";
import axios from "axios";
const {Meta}=Card;
class Iqtidorli extends  React.Component{
    state={
        behruz:4,
        Talabalar:[],
    }
    GetFakultet=()=>{
        const {Talabalar}=this.state;
        axios.get(` http://213.230.99.101:2021/api/auth/telented_students?page=0&size=5`).then(res=>{
            this.setState({
                Talabalar:res.data.content,
            })
        }).catch(res=>{
            console.log("xatolik")
        })
    }
   componentDidMount() {
        this.GetFakultet();
   }

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
    onresize=()=>{
        const {behruz}=this.state;
        if(window.innerWidth<900){
        if (window.innerWidth<600){
            this.setState({
                behruz:1
            })
        }
        else {
            this.setState({
                behruz:2
            })
        }
        }
       else {
          if (window.innerWidth<1400){
              this.setState({
                  behruz:3
              })
          }
          else {
              this.setState({
                  behruz:4
              })
          }
        }
    }
    render() {
        const {behruz,Talabalar}=this.state;
        const settings = {
            dots:true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow:behruz,
            slidesToScroll: 2,
        };
        const {uzLang,enLang}=this.props;
        return(
            <div>
                <ReactResizeDetector handleWidth handleHeight onResize={this.onresize}/>
                <section>
                    <div className="interactive" >
                        <div className="container1" name={"iqtidorli"} >
                            <Row>
                                <Col  xs={24}>
                                    <p style={{width:'100%',padding:'10px',fontSize:'30px'}}><strong>{uzLang?"Iqtidorli talabalar ":!!enLang?"Gifted students":"Одаренные студенты"}</strong></p>
                                </Col>
                            </Row>
                        </div>
                        <div className="interComponent">
                            <div>
                                <div>
                                    <Row>
                                        <Col >
                                            <div className="iqtidor-container" >
                                                <div style={{marginTop:'30px'}}>
                                                    <Slider ref={c => (this.slider = c)} {...settings} >
                                                        {
                                                            Talabalar.map(item=>(
                                                                <div className="talaba">
                                                                    <div className="talaba" style={{width:'300px',height:'300px', textAlign:'center'}}>
                                                                        <img style={{width:'170px',height:'170px',borderRadius:'100%',border:'solid 1px #F3F2EE',marginLeft:'60px'}} src={"http://213.230.99.101:2021"+item.logo} alt="Xatolik"/>
                                                                        <p style={{fontSize:'18px',color:'#264796'}}>{item.fullname} </p>
                                                                        <p style={{fontSize:'16px',color:'#AEAEAE'}}>{item.descriptionUz}</p>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </Slider>
                                                </div>
                                                <p style={{fontSize:'20px',cursor:'pointer',float:'left',marginTop:'30px',marginRight:'30px'}} onClick={this.previous}><LeftOutlined/></p>
                                                <p style={{fontSize:'20px',cursor:'pointer',marginTop:'30px'}} onClick={this.next}><RightOutlined/></p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

                )
    }

}const mapStateToProps = (state) => {

    return {
        uzLang: state.changeLang.uzLang,
        enLang: state.changeLang.enLang,
    };
};
export default connect(mapStateToProps,{uzLanguage,ruLanguage,enLanguage})(
    Iqtidorli
)