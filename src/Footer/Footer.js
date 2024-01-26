import React from 'react';
import '../Footer/Footerr.css';
import {Col, Row,Card} from "antd";
import {Screenshot_3} from '../images/Screenshot_3.png'
import {FacebookOutlined, TwitterOutlined, YoutubeOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import {uzLanguage} from "../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../Redux/Actions/RuLanguage";
import {enLanguage} from "../Redux/Actions/EnLanguage";
class Footer extends  React.Component{
    render() {
        const {uzLang,enLang}=this.props;
        return(
            <section>
                <div className="footerrss">
                    <div>
                        <Row>
                            <Col  xs={24}>
                                <div className="container1">
                                    <p className="footerrs"  style={{width:'100%',padding:'10px',fontSize:'30px'}}><strong> {uzLang?"Biz  ijtimoiy  Tarmoqlarda ":!!enLang?"We are in Social":"МЫ В СОЦСЕТЯХ"}</strong></p>
                                    <p className="footerIcon"> <FacebookOutlined /></p><p className="footerIcon"><TwitterOutlined /></p><p className="footerIcon"><YoutubeOutlined /></p>
                                </div>
                            </Col>

                        </Row>
                    </div>
                    <div className="interComponent">
                        <div className="container1" style={{marginTop:'50px'}}>
                       <div style={{marginTop:'50px'}}>
                       <Row>
                           <Col md={12} xs={24}>
                               <h4 style={{paddingTop:'50px',paddingLeft:'20px'}}>Toshkent sh. Navoiy ko’chasi, 32 uy, 100011</h4>
                               <p style={{color:'#C1C1C1',paddingLeft:'20px'}}>Telefon: (998-71)244-79-20 Faks: (998-71)244-79-17 E-mail: info@tcti.uz, txti_rektor@edu.uz</p>
                           </Col>
                           <Col md={12} xs={24}>
                               <p style={{paddingTop:'50px',color:'#C1C1C1',paddingLeft:'20px'}}>AT markazi 2017. Barcha huquqlar himoyalangan.</p>
                           </Col>
                       </Row>
                       </div>
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
    Footer
)