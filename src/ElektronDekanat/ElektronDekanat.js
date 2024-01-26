import React from 'react';
import '../ElektronDekanat/ElektronD.css';
import {Link} from "react-router-dom"
import {Row,Col,Card,Form,Input,Button,Radio} from 'antd';
import {connect} from "react-redux";
import {uzLanguage} from "../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../Redux/Actions/RuLanguage";
import {enLanguage} from "../Redux/Actions/EnLanguage";
 class ElektronDekanat extends React.Component{
     render() {
         const {uzLang,enLang}=this.props;
         return(
             <section>
              <div className="mainE">
                  <div className="container1">
                     <Row>
                         <Col xs={24}>
                             <img className="LogoE" src="http://unisys.tcti.uz/images/unisys-logo.png" alt="errorLogo"/>
                         </Col>
                     </Row>
                  </div>
              </div>
                 <div className="mainEarea">
                   <div className="mainContainer">
                       <Card className="mainCard"   style={{ width: "60%" }}>
                          <Row>
                              <Col xs={24}>
                                  <p className="cardTitleE"> {uzLang?"TKTI - o'quv jarayoni monitoringi axborot tizimi ":!!enLang?"TKTI is an information system for monitoring the educational process":"ТКТИ - информационная система мониторинга учебного процесса"}</p><hr/>
                              </Col>
                          </Row>

                           <Row>
                               <Col md={12} xs={24} style={{padding:'40px'}}>
                                   <p style={{fontFamily:'sans-serif'}}>{uzLang?"Ushbu axborot tizimi oliy ta'lim muassasalarida o'quv jarayoni monitoringini yuritishga mo`ljallangan ":!!enLang?"This information system is designed to monitor the educational process in higher education institutions":"Данная информационная система предназначена для мониторинга образовательного процесса в высших учебных заведениях."}</p>
                                   <h3 style={{color:'#3399FF',fontFamily:'sans-serif'}}>{uzLang?"Tizimga ruxsat ":!!enLang?"System access":"Доступ к системе"}</h3><hr/>
                                   <p style={{fontFamily:'sans-serif'}}>{uzLang?"Bu manzil orqali tizimga kirishni rektorat, o'quv bo'limi, dekanat, kafedra mudirlari hamda pedagog xodimlar tomonidan amalga oshirilishi mumkin. ":!!enLang?"Access to the system through this address can be made by the administration, the department of education, the dean's office, heads of departments and teachers.":"Доступ к системе через этот адрес могут осуществить ректор, отдел образования, деканат, заведующие кафедрами и преподаватели."}</p>
                                   <h3 style={{color:'#3399FF',fontFamily:'sans-serif'}}>{uzLang?"Talabalar uchun ":!!enLang?"For students":"Для студентов"}</h3><hr/>
                                   <p style={{fontFamily:'sans-serif'}}>{uzLang?"Tizimda talabalar shaxsiy kabineti moduli ishlab chiqilgan. ":!!enLang?"The system has a module for students' personal cabinets.":"В системе есть модуль для личных кабинетов студентов."}
                                       <Link to="/shaxsiykabinet"> <a style={{color:'green'}} href="#">{uzLang?"Shaxsiy kabinet ":!!enLang?"Personal cabinet":"Личный кабинет"}</a></Link></p>
                                   <h3 style={{color:'#3399FF',fontFamily:'sans-serif'}}>{uzLang?"Yodda saqlang ":!!enLang?"Remember":"Помните"}</h3><hr/>
                                   <p style={{fontFamily:'sans-serif'}}>{uzLang?"Tizimga kirishni amalga oshirgandan so`ng chiqayotgan paytda albatta  ":!!enLang?"Of course, when you log out after logging in":"Конечно, когда вы выходите из системы после входа в систему"}<a style={{color:'red'}} href="#">{uzLang?"Chiqish ":!!enLang?"Exit":"выход"}</a> {uzLang?"tugmasini bosgan holda chiqing. ":!!enLang?"exit by pressing the button.":"выйти, нажав кнопку."}
                                       </p>
                               </Col>
                               <Col md={12} xs={24}>
                                   <Card style={{width:'100%', backgroundColor:'#F5F5F5',marginTop:'10px',border:'1px solid #E4E4E4'}}>
                                       <p style={{fontSize:'20px',fontFamily:'sans-serif'}}>{uzLang?"Tizimga kirish ":!!enLang?"Log in":"Авторизоваться"}</p>
                                       <Form

                                           initialValues="Salom"
                                           // onValuesChange={onFormLayoutChange}
                                           layout="vertical"
                                       >
                                           <Form.Item label={uzLang?"Foydalanuvchi nomi ":!!enLang?"Username":"Имя пользователя"}>
                                               <Input  />
                                           </Form.Item>
                                           <Form.Item label={uzLang?"Parol ":!!enLang?"Password":"пароль"}>
                                               <Input.Password  />
                                           </Form.Item>
                                           <Form.Item label={uzLang?"Rasmdagi kodni kiriting.Nol qatnashmagan. ":!!enLang?"Enter the code in the image.Nero is not involved.":"Введите код с изображения. Неро не участвует."}>
                                               <img src="http://unisys.tcti.uz/captcha/1615105697.1349.png" alt="ErrorCode"/>
                                           </Form.Item>
                                           <Form.Item label={uzLang?"Xavfsizlik kodi ":!!enLang?"security code":"код безопасности"}>
                                               <Input  />
                                           </Form.Item>
                                           <Form.Item >
                                               <Button type="primary">{uzLang?"Tizimga kirish ":!!enLang?"Log in":"Авторизоваться"}</Button>
                                           </Form.Item>
                                       </Form>

                                   </Card>
                               </Col>
                           </Row>
                       </Card>
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
    ElektronDekanat
)