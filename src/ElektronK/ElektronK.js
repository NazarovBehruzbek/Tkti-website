import React from 'react';
import '../ElektronK/Elektron.css';
import {Col, Row,Button,Card,Input} from "antd";

import {DownloadOutlined} from '@ant-design/icons'
import {connect} from "react-redux";
import {uzLanguage} from "../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../Redux/Actions/RuLanguage";
import {enLanguage} from "../Redux/Actions/EnLanguage";

const { Search } = Input;class ElektronK extends React.Component{

    render() {
        const {uzLang,enLang}=this.props;

        const onSearch = value => console.log(value);
        return(
            <section className="bodyEK">
                <div className="ElLogo">
                    <Row>
                        <Col lg={16} md={24} sm={24} xs={24}> <img style={{width:'60%'}} src="http://lib.tcti.uz/wp-content/uploads/2018/06/untitled-14.png" alt="KtuLogo"/></Col>
                        <Col lg={8} md={24} sm={24} xs={24}><Button className="BoshBtn">{uzLang?"ASOSIY ":!!enLang?"MAIN":"ГЛАВНЫЙ"}</Button><Button className="BoshBtn tct">TKTI.UZ</Button></Col>
                    </Row>
                </div>
                <div className="mainAreaE">
                    <div className="container1223">
                        <div className="workPage">
                            <Row>
                                <Col lg={6} md={24} xs={24}>
                                    <div style={{padding:'30px'}}>
                                        <Search placeholder="izlash" onSearch={onSearch} enterButton />
                                        <Card title={<div className="titleK"><h2>{uzLang?"KAFEDRALAR ":!!enLang?"DEPARTMENTS":"ОТДЕЛЕНИЯ"}</h2></div>}  style={{ width: "100%" ,marginTop:'20px',backgroundColor:'#E8EEEE'}}>
                                          <div className="CardE">
                                             <h5>Badiy adabiyotlar (125)</h5>
                                              <h5>“Bijg‘ish mahsulotlari va alkogolsiz ichimliklar texnologiyasi” (1)</h5>
                                              <h5>Xorijiy Tillar (8)</h5>
                                              <h5>Fizika va elektrotexnika kafedrasi (7)</h5>
                                              <h5>Falsafa va ma`naviyat asoslari kafedrasi (14)</h5>
                                          </div>
                                        </Card>
                                    </div>
                                </Col>
                                <Col lg={18} md={24} xs={24}>
                                    <div className="workPageHeader">
                                        <h3>{uzLang?"Asosiy ":!!enLang?"Main":"ГЛАВНЫЙ"}/{uzLang?"Elektron kutubxona ":!!enLang?"Electronic library":"Электронная библиотека"}</h3>
                                    </div>
                                    <div className="workPageArea">
                                      <Card style={{width:'115%',margin:'0 auto',backgroundColor:'#E8EEEE',color:'#003F8F',fontSize:'16px',marginBottom:'30px'}}>
                                          <p className="cradTitle">
                                              «O’zbekcha/inglizcha Lug’at»
                                          </p>
                                          <Row>
                                              <Col xs={6}>{uzLang?"Saqlandi ":!!enLang?"Saved":"Сохранено"},</Col>
                                              <Col xs={6}>09.03.2021,</Col>
                                              <Col xs={6}>{uzLang?"Tillar kafedrasi ":!!enLang?"Department of Languages":"Кафедра языков"}</Col>
                                              <Col xs={6}>{uzLang?"Yuklab olish ":!!enLang?"Download":"Скачать"} <DownloadOutlined /></Col>
                                          </Row>
                                          <div className='downImg'>
                                              <img src="http://lib.tcti.uz/wp-content/uploads/2018/04/Pdf_by_mimooh-e1524306102634.png" alt="Error"/>
                                          </div>
                                      </Card>
                                        <Card style={{width:'115%',margin:'0 auto',backgroundColor:'#E8EEEE',color:'#003F8F',fontSize:'16px',marginBottom:'30px'}}>
                                            <p className="cradTitle">
                                                «O’zbekcha/inglizcha Lug’at»
                                            </p>
                                            <Row>
                                                <Col xs={6}>{uzLang?"Saqlandi ":!!enLang?"Saved":"Сохранено"},</Col>
                                                <Col xs={6}>09.03.2021,</Col>
                                                <Col xs={6}>{uzLang?"Tillar kafedrasi ":!!enLang?"Department of Languages":"Кафедра языков"}</Col>
                                                <Col xs={6}>{uzLang?"Yuklab olish ":!!enLang?"Download":"Скачать"} <DownloadOutlined /></Col>
                                            </Row>
                                            <div className='downImg'>
                                                <img src="http://lib.tcti.uz/wp-content/uploads/2018/04/Pdf_by_mimooh-e1524306102634.png" alt="Error"/>
                                            </div>
                                        </Card>
                                        <Card style={{width:'115%',margin:'0 auto',backgroundColor:'#E8EEEE',color:'#003F8F',fontSize:'16px',marginBottom:'30px'}}>
                                            <p className="cradTitle">
                                                «O’zbekcha/inglizcha Lug’at»
                                            </p>
                                            <Row>
                                                <Col xs={6}>{uzLang?"Saqlandi ":!!enLang?"Saved":"Сохранено"},</Col>
                                                <Col xs={6}>09.03.2021,</Col>
                                                <Col xs={6}>{uzLang?"Tillar kafedrasi ":!!enLang?"Department of Languages":"Кафедра языков"}</Col>
                                                <Col xs={6}>{uzLang?"Yuklab olish ":!!enLang?"Download":"Скачать"} <DownloadOutlined /></Col>
                                            </Row>
                                            <div className='downImg'>
                                                <img src="http://lib.tcti.uz/wp-content/uploads/2018/04/Pdf_by_mimooh-e1524306102634.png" alt="Error"/>
                                            </div>
                                        </Card>
                                        <Card style={{width:'115%',margin:'0 auto',backgroundColor:'#E8EEEE',color:'#003F8F',fontSize:'16px',marginBottom:'30px'}}>
                                            <p className="cradTitle">
                                                «O’zbekcha/inglizcha Lug’at»
                                            </p>
                                            <Row>
                                                <Col xs={6}>{uzLang?"Saqlandi ":!!enLang?"Saved":"Сохранено"},</Col>
                                                <Col xs={6}>09.03.2021,</Col>
                                                <Col xs={6}>{uzLang?"Tillar kafedrasi ":!!enLang?"Department of Languages":"Кафедра языков"}</Col>
                                                <Col xs={6}>{uzLang?"Yuklab olish ":!!enLang?"Download":"Скачать"} <DownloadOutlined /></Col>
                                            </Row>
                                            <div className='downImg'>
                                                <img src="http://lib.tcti.uz/wp-content/uploads/2018/04/Pdf_by_mimooh-e1524306102634.png" alt="Error"/>
                                            </div>
                                        </Card>
                                        <Card style={{width:'115%',margin:'0 auto',backgroundColor:'#E8EEEE',color:'#003F8F',fontSize:'16px',marginBottom:'30px'}}>
                                            <p className="cradTitle">
                                                «O’zbekcha/inglizcha Lug’at»
                                            </p>
                                            <Row>
                                                <Col xs={6}>{uzLang?"Saqlandi ":!!enLang?"Saved":"Сохранено"},</Col>
                                                <Col xs={6}>09.03.2021,</Col>
                                                <Col xs={6}>{uzLang?"Tillar kafedrasi ":!!enLang?"Department of Languages":"Кафедра языков"}</Col>
                                                <Col xs={6}>{uzLang?"Yuklab olish ":!!enLang?"Download":"Скачать"} <DownloadOutlined /></Col>
                                            </Row>
                                            <div className='downImg'>
                                                <img src="http://lib.tcti.uz/wp-content/uploads/2018/04/Pdf_by_mimooh-e1524306102634.png" alt="Error"/>
                                            </div>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="Afooter EKfooter">
                            <Row>
                                <Col md={12} sm={24} xs={24}>
                                    <ul className="Ful">
                                        <li><h1><strong>{uzLang?"ALOQALAR ":!!enLang?"CONTACTS":"КОНТАКТЫ"}</strong></h1></li>
                                        <li>{uzLang?"Toshkent sh. Navoiy ko’chasi, 32 uy ":!!enLang?"Tashkent Navoi street, 32":"Ташкент Улица Навои, 32"}, 100011</li>
                                        <li>{uzLang?"Telefon ":!!enLang?"Phone":"Телефон"}: (998-71)244-79-20 Faks: (998-71)244-79-17</li>
                                        <li>E-mail: info@tcti.uz,</li>
                                        <li><a href="#">tkti_rektor@edu.uz, @tktimatbuotxizmati</a></li>
                                    </ul>
                                </Col>
                                <Col md={12} xs={24} sm={24}>
                                    <img src="http://www.uz/plugins/top_rating/count/cnt.png?id=30473&r=&pg=http%3A//tkti.uz/uz/pages/info/201&c=Y&j=N&wh=1536x864&px=24&js=1.3&col=0063AF&t=ffffff&p=DD7900" alt="Error" style={{position:'absolute',bottom:'10%',right:'20%'}} />
                                </Col>
                            </Row>
                        </div>
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
    ElektronK
)