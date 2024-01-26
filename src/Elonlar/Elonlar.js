import React from 'react';
import {Link} from "react-router-dom"
import '../Elonlar/Elon.css';
import {Button, Col, Row, Select,Card} from "antd";
import {CaretDownOutlined,CalendarOutlined,EnvironmentOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import {uzLanguage} from "../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../Redux/Actions/RuLanguage";
import {enLanguage} from "../Redux/Actions/EnLanguage";
import {GetEnLanguage, GetLanguage, GetRuLanguage} from "../Utilitil";
import axios from "axios";
const { Option } = Select;
const { Meta } = Card;
function handleChange(value) {
    console.log(`selected ${value}`);
}
class Elonlar extends React.Component{
    state={
        Elonlar:[],
        EventsId:0,
        Events:[],
        Talim:[],
        Fakultet:[],
    }
    EventsId=(id)=>{
        const {EventsId}=this.state
        this.setState({
            EventsId: id,
        })
    }
    GetEvents=()=>{
        const {Elonlar,EventsId}=this.state;
        axios.get(`http://213.230.99.101:2021/api/auth/notification/categorie/1?page=${EventsId}&size=4`).then(res=>{
            this.setState({
                Elonlar:res.data.content,
            })
        }).catch(res=>{
            console.log("xatolik")
        })
    }
    GetTalim=()=>{
        const {Talim}=this.state;
        axios.get(" http://213.230.99.101:2021/api/auth/eduTypes").then(res=>{
            console.log(res)
            this.setState({
                Talim:res.data,
            })
        }).catch(res=>{
            console.log("xatolik")
        })
    }
    GetFakultet=()=>{
        const {Fakultet}=this.state;
        axios.get(` http://213.230.99.101:2021/api/auth/facultets/`).then(res=>{
            console.log(res)
            this.setState({
                Fakultet:res.data,
            })
        }).catch(res=>{
            console.log("xatolik")
        })
    }
    componentDidMount() {
        this.GetTalim();
        this.GetFakultet();
        this.GetEvents();
        this.EventsId();
    }

    render() {
        const {EventsId,Talim,Elonlar}=this.state;
        const {uzLang,enLang}=this.props;
        const HoverItem=(string)=>{
            document.querySelector(`.${string}`).classList.remove("close")
        }
        const HoverItemDown=(string)=>{
            // document.querySelector(`.${string}`).classList.toggle("close")
            document.querySelector(`.${string}`).classList.add("close") ;
        }

        const SelectBack=()=>{
            document.querySelector(".select-main").addEventListener('click',function (){
                document.querySelector(".select-main").classList.add("bacccolor");
            })
        }
      const Border=()=>{
          document.querySelector(".event-switch-btn1").addEventListener("click",function (){
              document.querySelector(".event-switch-btn").classList.add("bordernone") ;
              document.querySelector(".event-switch-btn1").classList.remove("bordernone")
          })
          const {Elonlar,EventsId}=this.state;
          axios.get(`http://213.230.99.101:2021/api/auth/notification/categorie/2?page=0&size=4`).then(res=>{
              this.setState({
                  Elonlar:res.data.content,
              })
          }).catch(res=>{
              console.log("xatolik")
          })
      }
        const Border1=()=>{
            document.querySelector(".event-switch-btn").addEventListener("click",function (){
                document.querySelector(".event-switch-btn").classList.remove("bordernone") ;
                document.querySelector(".event-switch-btn1").classList.add("bordernone")
            })
            const {Elonlar,EventsId}=this.state;
            axios.get(`http://213.230.99.101:2021/api/auth/notification/categorie/1?page=0&size=4`).then(res=>{
                this.setState({
                    Elonlar:res.data.content,
                })
            }).catch(res=>{
                console.log("xatolik")
            })
        }

        return(
            <section>
                <div className="Select-area" name="elonlar">
                   <div className="select-top">
                       <div className="container1">
                      <Row gutter={[16,16]}>
                          <Col md={6} sm={24} style={{width:'100%'}}>
                              <h2 style={{paddingTop:'40px'}}><strong className="select-switch">{uzLang?"O'Z YO'NALISHINGNI O'ZING TANLA ":!!enLang?"CHOOSE YOUR FACULTY":"ВЫБЕРИТЕ СВОЙ ФАКУЛЬТЕТ"}</strong></h2>
                          </Col>
                          <Col md={5} sm={24} style={{width:'100%'}}>
                              <Select defaultValue={<h3>{GetLanguage()?"Tanlang ":GetEnLanguage()?"Select":"Вибрат"}</h3>}  style={{ width: '100%' }} onChange={handleChange}   suffixIcon={<CaretDownOutlined/>} bordered={false}  className="select-main1">
                                  {
                                   Talim.map(item=>(
                                       <Option id="jack" style={{backgroundColor:'#F3F2EE'}} value="jack"><h4>{uzLang?item.nameUz:!!enLang?item.nameUz:item.nameUz}</h4></Option>
                                      ))
                                  }
                              </Select>
                          </Col>
                          <Col md={5} sm={24} style={{width:'100%'}}>
                              <Select id="fakultet" defaultValue={<h3 >{GetLanguage()?"Tanlang ":GetEnLanguage()?"Select":"Вибрат"}</h3>}  style={{ width:'100%' }}    suffixIcon={<CaretDownOutlined/>} bordered={false}  className="select-main" onClick={SelectBack}>
                                  {/*<Option style={{backgroundColor:'#F3F2EE'}} value="jack"><h5 style={{textTransform:'uppercase'}}>Qo‘ng‘irot soda zavodi qoshidagi maxsus sirtqi bo‘lim</h5></Option>*/}
                                  {/*<Option style={{backgroundColor:'#F3F2EE'}} value="jack1"><h5>VINOCHILIK TEXNOLOGIYASI VA SANOAT UZUMCHILIGI FAKULTETI</h5></Option>*/}
                                  {/*<Option style={{backgroundColor:'#F3F2EE'}} value="jack2"><h5>NOORGANIK MODDALAR TEXNOLOGIYASI FAKULTETI</h5></Option>*/}
                                  {/*<Option style={{backgroundColor:'#F3F2EE'}} value="jack3"><h5>OZIQ-OVQAT MAHSULOTLARI TEXNOLOGIYASI FAKULTETI</h5></Option>*/}
                                  {/*<Option style={{backgroundColor:'#F3F2EE'}} value="jack4"><h5>MENEJMENT VA KASB TA`LIMI FAKULTETI</h5></Option>*/}
                                  {/*<Option style={{backgroundColor:'#F3F2EE'}} value="jack5"><h5>YOQILG`I VA ORGANIK BIRIKMALAR KIMYOVIY TEXNOLOGIYASI FAKULTETI</h5></Option>*/}

                              </Select>
                          </Col>
                          <Col md={5} sm={24} style={{width:'100%'}}>
                              <Select defaultValue={<h3>{GetLanguage()?"Tanlang ":GetEnLanguage()?"Select":"Вибрат"}</h3>} onDropdownVisibleChange={SelectBack} style={{ width: '100%' }} onChange={handleChange}   suffixIcon={<CaretDownOutlined/>} bordered={false}  className="select-main">

                              </Select>
                          </Col>
                          <Col md={3} style={{width:'100%'}}>
                              <button  className="select-main-btn">{uzLang?"Qidirish ":!!enLang?"Search":"Поиск"}</button>
                          </Col>
                      </Row>
                       </div>
                   </div>
                </div>
                <div className="event-area">
                    <div className="events-top">
                    <div className="container1">
                        <Row>
                            <Col lg={16} md={14} sm={14}  xs={14}>
                                <p style={{width:'100%',padding:'10px',fontSize:'30px'}}><strong>{uzLang?"E'lonlar ":!!enLang?"Announcement":"Объявление"}</strong></p>
                            </Col>
                            <Col lg={8} md={10} sm={10} xs={10}>
                               <Row>
                                   <Col md={10} sm={10} xs={10}> <div onClick={Border1} className="event-switch-btn">
                                       <h4  style={{width:'100%',padding:'30px'}}>{uzLang?"Institut":!!enLang?"Institute":"Институт"}</h4>
                                   </div></Col>
                                   <Col md={14} sm={14} xs={14}> <div onClick={Border} className="event-switch-btn1 bordernone" style={{width:'80%'}}><h4 style={{width:'100%',padding:'30px'}}>{uzLang?"Ilmiy izlanishlar ":!!enLang?"Scientific research":"Научное исследование"}</h4></div></Col>
                               </Row>
                            </Col>
                        </Row>
                    </div>
                    </div>
                    <div className="event-post-area">
                        <div className="container1">
                            <Row>
                                {
                                    Elonlar.map(item=>(
                                        <Col lg={6} md={12} xs={24}>
                                            <div style={{width:'100%',padding:'20px'}} onMouseEnter={()=>HoverItem("event-post-hover")} onMouseLeave={()=>HoverItemDown("event-post-hover")}>
                                                <Card
                                                    hoverable
                                                    style={{ width: "100%",boxShadow:'none' }}
                                                    cover={<img alt="example" src={"http://213.230.99.101:2021/"+item.logo} />}
                                                >
                                                    <Meta  description={<h3>{item.titleUz}</h3>} />
                                                </Card>
                                                <div className="event-post-hover close">
                                                    <Row>
                                                        <Col xs={4}>
                                                            <CalendarOutlined />
                                                        </Col>
                                                        <Col xs={10}>
                                                            {uzLang?"03 Mart ":!!enLang?" March 03":"3-марта"}
                                                        </Col>
                                                        <Col xs={10}>
                                                            10:00
                                                        </Col>
                                                        <Col xs={24}>
                                                            <Row>
                                                                <Col xs={4}><EnvironmentOutlined /></Col>
                                                                <Col xs={20}><h4>{uzLang?"Toshkent Kimyo-Texnologiya Instituti":!!enLang?"Tashkent Institute of Chemical Technology":"Ташкентский Химико-течнологический институт"}</h4></Col>
                                                            </Row>

                                                        </Col>
                                                    </Row>
                                                </div>

                                            </div>
                                        </Col>
                                    ))
                                }



                                <Col xs={24}>
                                   <Link style={{color:'black'}} className="linkK" to="/home/barchasi"> <button  className="select-main-btn1"><strong >{uzLang?"Barchasini ko'rish":!!enLang?"See them all":"Увидеть их всех"}</strong></button></Link>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}const mapStateToProps = (state) => {

    return {
        uzLang: state.changeLang.uzLang,
        enLang: state.changeLang.enLang,
    };
};
export default connect(mapStateToProps,{uzLanguage,ruLanguage,enLanguage})(
    Elonlar
)
