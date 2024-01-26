import React from 'react';
import 'antd/dist/antd.css';
import '../Login/Login.css';
import { Form, Input, Button,Row,Col,Card,Checkbox } from 'antd';
import {GoogleOutlined, FacebookOutlined, InstagramOutlined,CheckOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {uzLanguage} from "../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../Redux/Actions/RuLanguage";
import {enLanguage} from "../Redux/Actions/EnLanguage";


class Login extends React.Component{
    state={
        isMessage:false,
        isUser:false,
    }
    render() {
        const {uzLang,enLang}=this.props;
        const {isUser,isMessage}=this.state;

        // const onFinish=(values)=>{
        //     console.log(values)
        //     signin(values).then(res=>{
        //         if (res && res.data && res.data.token){
        //             SetLocalStorage('token',res.data.token);
        //             this.setState({
        //                 isUser: true,
        //                 isMessage: false
        //
        //             })
        //         }else{
        //             console.log('xatolik');
        //         }
        //     }).catch(res=>{
        //         this.setState({
        //             isMessage: true,
        //             isUser: false
        //         })
        //     })
        // }
        return(
            <React.Fragment>
                {/*{*/}
                {/*    isUser?*/}
                {/*        <Redirect to={"/dashboard/menu"}/>:''*/}
                {/*}*/}
                <Row>
                    <Col md={16} sm={24} xs={24}>
                        <div className="login-div">
                            <div>
                                <Row>
                                    <Col xs={24}> <p className="login_text">{uzLang?"Toshkent ":!!enLang?"Tashkent":"Ташкент"}<br/>{uzLang?"Kimyo-texnologiyalari ":!!enLang?"Chemical technologies":"Химические технологии"}<br/>{uzLang?"instituti ":!!enLang?"institute":"институты"}</p></Col>
                                    <Col xs={24}><p className="login_little_text">{uzLang?"2021-yil Yoshlarni qo‘llab-quvvatlash  ":!!enLang?"Youth Support 2021":"2021 Молодежная поддержка"}<br/> {uzLang?"va aholi salomatligini mustahkamlash yili ":!!enLang?"and the Year of Public Health":"и Год общественного здравоохранения"}</p>
                                    </Col>
                                    <Col xs={24}> <Link to={"/home/homepage"}><Button className="login_button">{uzLang?"Bosh sahifa ":!!enLang?"Home":"Дома"}</Button></Link></Col>
                                </Row>


                            </div>
                        </div>
                    </Col>
                    <Col md={8} sm={24} xs={24}>
                        <div className="site-card-border-less-wrapper">
                            <Card title={<div> <h1 ><b>{uzLang?"Tizimga kirish ":!!enLang?"Log in":"Авторизоваться"}</b></h1></div> } bordered={false} style={{ width: 400 }}>
                                <div className="card_body">
                                    <Form
                                        layout="vertical"
                                        className="loginForm"
                                        name="Kirish"
                                        initialValues={{ remember: true }}
                                        // onFinish={onFinish}

                                    >
                                        <Button className="dangerText">{isMessage? `${uzLang?" Parol yoki guvohnoma raqami xato! ":!!enLang?"Password or certificate number is incorrect!":"Неверный пароль или номер сертификата!"}`:``}</Button>
                                        <Form.Item
                                            className="formitem"
                                            label={uzLang?"Talabalik Guvohnomasi raqami ":!!enLang?"Student Certificate Number":"Номер студенческого аттестата"}
                                            name="number"
                                            rules={[{ required: true, message: `${uzLang?"Talabalik Guvohnomasi raqamini kiriting! ":!!enLang?"Enter your Student ID number!":"Введите свой номер студенческого билета!"}` }]}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            className="formitem"
                                            label={uzLang?"Parol(pasport seriya va raqami) ":!!enLang?"Password (passport serial number)":"Пароль (серийный номер паспорта)"}
                                            name="password"
                                            rules={[{ required: true, message: `${uzLang?"Parolni kiriting! ":!!enLang?"Enter password!":"Введите пароль!"}` }]}
                                        >
                                            <Input.Password style={{borderRadius:'10px'}} />
                                        </Form.Item>
                                        <Form.Item  name="remember" valuePropName="checked">
                                            <Checkbox style={{marginLeft:'10px',float:'left'}}>{uzLang?"Eslab qolish ":!!enLang?"Remember":"Помните"}</Checkbox>
                                        </Form.Item>

                                        <Form.Item >
                                            <Button  className="card_footer" type="primary" htmlType="submit">
                                                <CheckOutlined />{uzLang?"Kirish ":!!enLang?"Introduction":"Вступление"}
                                            </Button>
                                        </Form.Item>
                                        <Form.Item >
                                            <p className="orcontinue">Or continue with</p> <hr/>
                                        </Form.Item>

                                    </Form>
                                    <Form>
                                        <Form.Item >
                                            <Button className="loginForm_button"><GoogleOutlined /></Button>
                                            <Button className="loginForm_button"><FacebookOutlined /></Button>
                                            <Button className="loginForm_button"><InstagramOutlined /></Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Card>
                        </div>

                    </Col>
                </Row>


            </React.Fragment>
        )
    }
}const mapStateToProps = (state) => {

    return {
        uzLang: state.changeLang.uzLang,
        enLang: state.changeLang.enLang,
    };
};
export default connect(mapStateToProps,{uzLanguage,ruLanguage,enLanguage})(
    Login
)