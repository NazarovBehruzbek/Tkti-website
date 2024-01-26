import React from "react";
import "./yangiliklar.css";
import {Button, Col, Row} from "antd";
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {uzLanguage} from "../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../Redux/Actions/RuLanguage";
import {enLanguage} from "../Redux/Actions/EnLanguage";
import axios from "axios";
class Yangiliklar extends React.Component{
    state={
        Newss:[],
    }
    GetNews=()=>{
        const {Newss}=this.state;
        axios.get(`http://213.230.99.101:2021/api/auth/news/categorie/1?page=0&size=4`).then(res=>{
            console.log(
                res.data)
            this.setState({
                Newss:res.data.content,
            })
        }).catch(res=>{
            console.log("xatolik")
        })
    }
    componentDidMount() {
        this.GetNews();
    }
    render() {
        const {uzLang,enLang,Newss}=this.props;
        const Border=()=>{
            document.querySelector(".event-switch-btn1").addEventListener("click",function (){
                document.querySelector(".event-switch-btn").classList.add("bordernone") ;
                document.querySelector(".event-switch-btn1").classList.remove("bordernone")
            })
            const {Newss}=this.state;
            axios.get(`http://213.230.99.101:2021/api/auth/notification/categorie/2?page=0&size=4`).then(res=>{
                this.setState({
                    Newss:res.data.content,
                })
            }).catch(res=>{
                console.log("xatolik")
            })
        }
        const Border1=()=>{
            document.querySelector(".event-switch-btn1").addEventListener("click",function (){
                document.querySelector(".event-switch-btn").classList.add("bordernone") ;
                document.querySelector(".event-switch-btn1").classList.remove("bordernone")
            })
            const {Newss}=this.state;
            axios.get(`http://213.230.99.101:2021/api/auth/notification/categorie/1?page=0&size=4`).then(res=>{
                this.setState({
                    Newss:res.data.content,
                })
            }).catch(res=>{
                console.log("xatolik")
            })
        }
        return(
            <section>
                <div className="yangiliklar">
                      <div className="yan-contain">
                          <div className="top-new" name={"yangiliklar"}>
                                  <Row>
                                      <Col lg={15} md={15} sm={14}  xs={14}>
                                          <p style={{width:'100%',padding:'10px',fontSize:'30px',color:'white'}}><strong>{uzLang?"Yangiliklar":!!enLang?"News":"Новости"}</strong></p>
                                      </Col>
                                      <Col lg={9} md={9} sm={10} xs={10} >
                                          <Row>
                                              <Col md={13} sm={15} xs={15} ><p onClick={Border} className="new-btn">{uzLang?"Institut yangiliklari":!!enLang?"Institute news ":"Новости института"}</p><div className="chiziq"></div></Col>
                                              <Col md={11} sm={9} xs={9}><p onClick={Border1} className="new-btn1">{uzLang?"Ommaviy tadbirlar":!!enLang?"Public events":"Публичные мероприятия"}</p><div className="chiziq1"></div></Col>
                                              <div style={{backgroundColor:'#6E7A8F',width:'100%',height:'2px'}}></div>
                                          </Row>
                                      </Col>
                                  </Row>
                          </div>
                          <div className="post-new">
                              <div>
                                  <Row>

                                              <Col className="post-hover"  lg={6} md={12} xs={24}  >
                                                  <div style={{width:'90%',position:'absolute',left:'15px',top:'10px'}}>
                                                      <img style={{width:'100%',height:'180px'}} src="http://213.230.99.101:2021/api/auth/file/aeb4bc52-870c-4be7-9a79-dfa529623aa4" alt="Xatolik"/>
                                                      <h2 style={{width:'100%',marginTop:'20px',color:'white',fontFamily:'sans-serif'}}>Institut va maktab o’rtasidagi hamkorlik aloqalari mustahkamlanib bormoqda</h2>
                                                  </div>
                                              </Col>


                                  </Row>
                              </div>
                              <div >
                                  <Row>
                                      <Col className="post-hover"  lg={6} md={12} xs={24}  >
                                          <div style={{width:'90%',position:'absolute',left:'15px',top:'10px'}}>
                                              <img style={{width:'100%',height:'180px'}} src="http://213.230.99.101:2021/api/auth/file/aeb4bc52-870c-4be7-9a79-dfa529623aa4" alt="Xatolik"/>
                                              <h2 style={{width:'100%',marginTop:'20px',color:'white',fontFamily:'sans-serif'}}>Institut va maktab o’rtasidagi hamkorlik aloqalari mustahkamlanib bormoqda</h2>
                                          </div>
                                      </Col>
                                      <Col className="post-hover" lg={6} md={12} xs={24}  >
                                          <div style={{width:'90%',position:'absolute',left:'15px',top:'10px'}}>
                                              <img style={{width:'100%',height:'180px'}} src="http://213.230.99.101:2021/api/auth/file/aeb4bc52-870c-4be7-9a79-dfa529623aa4" alt="Xatolik"/>
                                              <h2 style={{width:'100%',marginTop:'20px',color:'white',fontFamily:'sans-serif'}}>Institut va maktab o’rtasidagi hamkorlik aloqalari mustahkamlanib bormoqda</h2>
                                          </div>
                                      </Col>
                                      <Col className="post-hover"  lg={6} md={12} xs={24}  >
                                          <div style={{width:'90%',position:'absolute',left:'15px',top:'10px'}}>
                                              <img style={{width:'100%',height:'180px'}} src="http://213.230.99.101:2021/api/auth/file/aeb4bc52-870c-4be7-9a79-dfa529623aa4" alt="Xatolik"/>
                                              <h2 style={{width:'100%',marginTop:'20px',color:'white',fontFamily:'sans-serif'}}>Institut va maktab o’rtasidagi hamkorlik aloqalari mustahkamlanib bormoqda</h2>
                                          </div>
                                      </Col>
                                      <Col className="post-hover"  lg={6} md={12} xs={24}  >
                                          <div style={{width:'90%',position:'absolute',left:'15px',top:'10px'}}>
                                              <img style={{width:'100%',height:'180px'}} src="http://213.230.99.101:2021/api/auth/file/aeb4bc52-870c-4be7-9a79-dfa529623aa4" alt="Xatolik"/>
                                              <h2 style={{width:'100%',marginTop:'20px',color:'white',fontFamily:'sans-serif'}}>Institut va maktab o’rtasidagi hamkorlik aloqalari mustahkamlanib bormoqda</h2>
                                          </div>
                                      </Col>
                                  </Row>
                              </div>
                          </div>
                          <Row>
                              <Col xs={24}>
                                 <Link style={{color:'white'}} to="/home/barchasi"> <Button className="see-btn"><strong >{uzLang?"Barchasini ko'rish":!!enLang?"See them all":"Увидеть их всех"}</strong></Button></Link>
                              </Col>
                          </Row>
                      </div>
                    <div className="yangilikfoter">

                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        uzLang: state.changeLang.uzLang,
        enLang: state.changeLang.enLang,
    };
};
export default connect(mapStateToProps,{uzLanguage,ruLanguage,enLanguage})(
    Yangiliklar
)