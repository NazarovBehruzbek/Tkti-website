import React,{Component} from 'react';
import {Button,Row,Col,Menu, Dropdown, message,Select,Tooltip} from "antd";
import {Umumiy,Tuzilma,Faoliyat,Abituryent,Talabalar,Qonunchilik} from "./menyular";
import './header.css';
import Scrollspy from 'react-scrollspy';
import Scroll from 'react-scroll'
import {AnchorElement, AnchorLink, ScrollPanel} from "react-spy-scroll";
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {uzLanguage} from "../Redux/Actions/Uzlanguage";
import {enLanguage} from "../Redux/Actions/EnLanguage";
import {ruLanguage} from "../Redux/Actions/RuLanguage";
import {GetLanguage,GetEnLanguage} from "../Utilitil";
import {HomeOutlined, SearchOutlined, CaretDownOutlined, PhoneOutlined, MenuOutlined,PlusOutlined,MinusOutlined} from '@ant-design/icons'
import Elonlar from "../Elonlar/Elonlar";
import axios from "axios";
var Linkk = Scroll.Link;
let scrollSpy=Scroll.scrollSpy;
const { Option } = Select;
class Header extends Component{
state={
    plus:'',
    menyular:[],
}
       GetMenyular=()=>{
        const {menyular}=this.state;
        axios.get(" http://213.230.99.101:2021/api/auth/mainMenus").then(res=>{
            this.setState({
                menyular:res.data,
            })
        }).catch(res=>{
            console.log("xatolik")
        })
    }
componentDidMount() {
    this.GetMenyular();
}
 render() {
        const {uzLang,enLang}=this.props;
        const {menyular}=this.state;
        const changeSelect=(value)=>{

            if (value==="UZ"){
                this.props.uzLanguage();
            }else if (value==="EN") {
                this.props.enLanguage();
            }else {
                this.props.ruLanguage();
            }
        }
        const {plus}=this.state;
        const OnClickHover=(string,id)=>{
            document.querySelector(".item1").classList.remove("menu_item_hover")
            // document.querySelector(".item2").classList.remove("menu_item_hover")
            // document.querySelector(".item3").classList.remove("menu_item_hover")
            // document.querySelector(".item4").classList.remove("menu_item_hover")
            // document.querySelector(".item5").classList.remove("menu_item_hover")
            // document.querySelector(".item6").classList.remove("menu_item_hover")
            // document.querySelector(".item7").classList.remove("menu_item_hover")
            document.querySelector(`.${string}`).classList.add("menu_item_hover")
            // menyular.map(item=>{
            //     if (item.id===id){
            //         alert("sdfasas")
            //     }
            // })
            console.log()
        }
        function handleButtonClick(e) {
            message.info('Click on left button.');
            console.log('click left button', e);
        }

        function handleMenuClick(e) {
            message.info('Click on menu item.');
            console.log('click', e);
        }
        const menu = (
   <div className="m">
       <Menu onClick={handleMenuClick} style={{width:"920px",backgroundColor:'#F3F2EE',boxShadow:'none',height:'300px'}}>
           <Row>
               <Col md={8}>
                   <Menu.Item key="1" >
                       <h3 style={{padding:'40px 50px 10px'}}> {uzLang?"Aloqa":!!enLang?"Communacation":"Коммуникасия"}</h3>
                   </Menu.Item>
               </Col>
               <Col md={8}>
                   <Menu.Item key="2" >
                       <h3 style={{padding:'40px 50px 10px'}}>{uzLang?"Institut haqida":!!enLang?"About the Institute":"Об Институте"}</h3>
                   </Menu.Item>
               </Col>
               <Col md={8}>
                   <Menu.Item key="3" >
                       <h3 style={{padding:'40px 50px 10px'}}>{uzLang?"Bizning manzil":!!enLang?"Our address":"Наш адрес"}</h3>
                   </Menu.Item>
               </Col>

           </Row>
       </Menu>
   </div>
        );
        // const menu1 = (
        //   <div className="m1">
        //       <Menu onClick={handleMenuClick} style={{width:"920px",backgroundColor:'#F3F2EE',boxShadow:'none',height:'300px'}}>
        //           <Row>
        //               <Col md={8}>
        //                   <Menu.Item key="1" >
        //                       <h3 style={{padding:'40px 50px 10px'}}>{uzLang?"Rahbariyat":!!enLang?"Management":"Управление"}</h3>
        //                   </Menu.Item>
        //               </Col>
        //               <Col md={8}>
        //                   <Menu.Item key="2" >
        //                       <h3 style={{padding:'40px 50px 10px'}}>{uzLang?"Fakultetlar":!!enLang?"Faculties":"Факултети"} </h3>
        //                   </Menu.Item>
        //               </Col>
        //               <Col md={8}>
        //                   <Menu.Item key="3" >
        //                       <h3 style={{padding:'40px 50px 10px'}}>{uzLang?"Kafedralar":!!enLang?"Chairs":"Cтулья"}</h3>
        //                   </Menu.Item>
        //               </Col>
        //               <Col md={8}>
        //                   <Menu.Item key="4" >
        //                       <h3 style={{padding:'40px 50px 10px'}}>{uzLang?"Markazlar va bo'limlar":!!enLang?"Centers and Departments":"Сентры и отдели "}</h3>
        //                   </Menu.Item>
        //               </Col>
        //           </Row>
        //       </Menu>
        //   </div>
        // );
        // const menu2 = (
        //   <div className="m2">
        //       <Menu onClick={handleMenuClick} style={{width:"920px",backgroundColor:'#F3F2EE',boxShadow:'none',height:'300px'}}>
        //           <Row>
        //               <Col md={8}>
        //                   <Menu.Item key="1" >
        //                       <h3 style={{padding:'40px 50px 10px',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}}>{uzLang?"Ilmiy-faoliyat":!!enLang?"Scientific activity":"Научная деятельность"}</h3>
        //                   </Menu.Item>
        //               </Col>
        //               <Col md={8}>
        //                   <Menu.Item key="2" >
        //                       <h3 style={{padding:'40px 50px 10px',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}}>{uzLang?"Xalqaro aloqalar":!!enLang?"International relations ":"Международные отношения"}</h3>
        //                   </Menu.Item>
        //               </Col>
        //               <Col md={8}>
        //                   <Menu.Item key="3" >
        //                       <h3 style={{padding:'40px 50px 10px',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}}>{uzLang?"Moliyaviy faoliyat":!!enLang?"Financial activity":"Финансовая деятельность"}</h3>
        //                   </Menu.Item>
        //               </Col>
        //               <Col md={8}>
        //                   <Menu.Item key="4" >
        //                       <h3 style={{padding:'40px 50px 10px',fontSize:`${uzLang?'14px':enLang?'14px':'10px'}`}}>{uzLang?"Madaniy-ma'rifiy faoliyat":!!enLang?"Cultural and educational ":"Културно-просветительская деятельность"}</h3>
        //                   </Menu.Item>
        //               </Col>
        //
        //           </Row>
        //       </Menu>
        //   </div>
        // );
        // const menu3 = (
        //    <div className="m3">
        //        <Menu onClick={handleMenuClick} style={{width:"920px",backgroundColor:'#F3F2EE',boxShadow:'none',height:'300px'}}>
        //            <Row>
        //                <Col md={8}>
        //                    <Menu.Item key="1" >
        //                        <h3 style={{padding:'40px 50px 10px'}}>{uzLang?"Bakalavr":!!enLang?"Bachelor ":"Бакалавр"}</h3>
        //                    </Menu.Item>
        //                </Col>
        //            </Row>
        //        </Menu>
        //    </div>
        // );
        // const menu4 = (
        //    <div className="m4">
        //        <Menu onClick={handleMenuClick} style={{width:"920px",backgroundColor:'#F3F2EE',boxShadow:'none',height:'300px'}}>
        //            <Row>
        //                <Col md={8}>
        //                    <Menu.Item key="1" >
        //                        <h3 style={{padding:'40px 50px 10px'}}>{uzLang?"Bakalavr":!!enLang?"Bachelor ":"Бакалавр"} </h3>
        //                    </Menu.Item>
        //                </Col>
        //                <Col md={8}>
        //                    <Menu.Item key="2" >
        //                        <h3 style={{padding:'40px 50px 10px'}}>{uzLang?"Magistratura":!!enLang?"Master's ":"Магистра"}</h3>
        //                    </Menu.Item>
        //                </Col>
        //            </Row>
        //        </Menu>
        //    </div>
        // );
        // const menu5 = (
        //  <div className="m5">
        //      <Menu onClick={handleMenuClick} style={{width:"920px",backgroundColor:'#F3F2EE',boxShadow:'none',height:'300px'}}>
        //          <Row>
        //
        //              <Col md={8}>
        //                  <Menu.Item key="1" >
        //                      <h5 style={{padding:'40px 10px 10px'}}>{uzLang?"Prezident farmoni va  qarorlari":!!enLang?"Presidental decress and resolutions ":"Указы и постановления Президента"}</h5>
        //                  </Menu.Item>
        //              </Col>
        //              <Col md={8}>
        //                  <Menu.Item key="2" >
        //                      <h5 style={{padding:'40px 10px 10px'}}>{uzLang?"Hukumat qarorlari va dasturlari":!!enLang?" Government decisions and programs":"Постановления и программы Правительства "}</h5>
        //                  </Menu.Item>
        //              </Col>
        //              <Col md={8}>
        //                  <Menu.Item key="3" >
        //                      <h5 style={{padding:'40px 10px 10px'}}>{uzLang?"Vazirlik buyruqlari va qarorlari":!!enLang?"Ministry decress and resolutions ":"Указы и постановления Министерство"}</h5>
        //                  </Menu.Item>
        //              </Col>
        //          </Row>
        //      </Menu>
        //  </div>
        // );
        // const menu6 = (
        // <div className="m6">
        //     <Menu onClick={handleMenuClick} style={{width:"920px",position:'absolute',left:'-1097%',backgroundColor:'#F3F2EE',boxShadow:'none',height:'300px'}}>
        //         <Row>
        //
        //         </Row>
        //     </Menu>
        // </div>
        // );
        const open=()=>{
            {
                document.querySelector(".sidebarmenu").classList.toggle("cancel")
                document.querySelector(".umumiy").classList.add("cancel")
                document.querySelector(".tuzilma").classList.add("cancel")
                document.querySelector(".faoliyat").classList.add("cancel")
                document.querySelector(".abituriyent").classList.add("cancel")
                document.querySelector(".talabalar").classList.add("cancel")
                document.querySelector(".qonunchilik").classList.add("cancel")
            }
            this.setState({
                plus: '',
            })
        }
        const umumiy=(element)=>{
            {
                document.querySelector(".umumiy").classList.toggle("cancel")
            }
            if (!plus){
                this.setState({
                    plus:`${element}`,
                })
            } else {
                this.setState({
                    plus:'',
                })
            }
        }
        const tuzilma=(element)=>{
            {
                document.querySelector(".tuzilma").classList.toggle("cancel")
            }
            if (!plus){
                this.setState({
                    plus:`${element}`,
                })
            } else {
                this.setState({
                    plus:'',
                })
            }
        }
        const faoliyat=(element)=>{
            {
                document.querySelector(".faoliyat").classList.toggle("cancel")
            }
            if (!plus){
                this.setState({
                    plus:`${element}`,
                })
            } else {
                this.setState({
                    plus:'',
                })
            }
        }
        const abituriyent=(element)=>{
            {
                document.querySelector(".abituriyent").classList.toggle("cancel")
            }
            if (!plus){
                this.setState({
                    plus:`${element}`,
                })
            } else {
                this.setState({
                    plus:'',
                })
            }
        }
        const talabalar=(element)=>{
            {
                document.querySelector(".talabalar").classList.toggle("cancel")
            }
            if (!plus){
                this.setState({
                    plus:`${element}`,
                })
            } else {
                this.setState({
                    plus:'',
                })
            }
        }
        const qonunchilik=(element)=>{
            {
                document.querySelector(".qonunchilik").classList.toggle("cancel")
            }
            if (!plus){
                this.setState({
                    plus:`${element}`,
                })
            } else {
                this.setState({
                    plus:'',
                })
            }
        }
        return (
           <section>
               <div className="container" >
                   <div style={{width:'40px',height:'190px',position:'fixed',right:'0px',top:'260px',backgroundColor:'#F3F2EE'}}>
             <Tooltip overlayStyle={{fontFamily:'sans-serif'}} placement="left" title={uzLang?"Bosh sahifa ":!!enLang?"Home":"Дома"}>
                 <div><Linkk activeClass="active" to="BoshSahifa" smopth={true} spy={true}>a</Linkk></div>
             </Tooltip>
             <Tooltip  overlayStyle={{fontFamily:'sans-serif'}}  placement="left" title={uzLang?"E'lonlar ":!!enLang?"Announcement":"Объявление"}>
                 <div><Linkk  activeClass="active" to="elonlar" smooth={true} spy={true}><div style={{width:'30px',height:'30px',backgroundColor:'yellow'}}>b</div></Linkk></div>
             </Tooltip>
             <Tooltip overlayStyle={{fontFamily:'sans-serif'}} placement="left" title={uzLang?"Yangiliklar":!!enLang?"News":"Новости"}>
                 <div><Linkk  activeClass="active"  to="yangiliklar" smooth={true} spy={true}><p>c</p></Linkk></div>
             </Tooltip>
             <Tooltip overlayStyle={{fontFamily:'sans-serif'}} placement="left" title={uzLang?"Interaktiv xizmatlar":!!enLang?"Interactive services":"Интерактивные сервисы"}>
                 <Linkk  activeClass="active" to="interaktiv" smooth={true}><div activeClassName="active" className="Toltipbtn"></div></Linkk>
             </Tooltip>
             <Tooltip overlayStyle={{fontFamily:'sans-serif'}} placement="left" title={uzLang?"Videolar":!!enLang?"Videos":"Pолики"}>
                 <Linkk activeClass="active" to="videolar" smooth={true}>  <div activeClassName="active" className="Toltipbtn"></div></Linkk>
             </Tooltip>
             <Tooltip overlayStyle={{fontFamily:'sans-serif'}} placement="left" title={uzLang?"Iqtidorli talabalar ":!!enLang?"Gifted students":"Одаренные студенты"}>
                 <Linkk activeClass="active" to="iqtidorli" smooth={true}>  <div className="Toltipbtn"></div></Linkk>
             </Tooltip>
                   </div>
              <div className="containerr">
                  <div className="icons-mobile none">
                      <ul>
                          <li><img className="logo" style={{width:'70px',height:'70px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmJAiYOQOddY-K1JCy0hGWqnElHW6bGCOCw&usqp=CAU" alt="Xatolik"/></li>
                          <div style={{paddingTop:'16px'}}>
                              <li><HomeOutlined/></li>
                              <li><strong>lt</strong></li>
                              <li><SearchOutlined /></li>
                              <li><img style={{width:'25px'}} src="https://ktu.edu/wp-content/themes/ktu/public/images/360-degree.svg" alt="error"/></li>
                          </div>
                      </ul>
                  </div>
                 <div className="ffff">
                     <Row gutter={[16, 16]}>
                         <Col xs={24}>
                             <div style={{marginTop:'20px'}}>
                                 <div style={{backgroundColor:'#F3F2EE'}}>
                                     <div style={{marginBottom:'15px',backgroundColor:'white'}}>
                                         <Row>
                                             <Col md={6}>
                                                 <div style={{float:'left'}} className="cancel">
                                                     <img className="logo" style={{width:'90px',height:'90px',float:'left',marginRight:'20px',marginTop:'10px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmJAiYOQOddY-K1JCy0hGWqnElHW6bGCOCw&usqp=CAU" alt="Xatolik"/>
                                                     <h2 style={{fontFamily:'sans-serif',marginTop:'20px',fontSize:`${uzLang?'20px':enLang?'20px':'18px'}`}}><a href="">{uzLang?"Toshkent Kimyo-Texnologiya Instituti":!!enLang?"Tashkent Institute of Chemical Technology":"Ташкентский Химико-течнологический институт"}</a></h2>
                                                 </div>
                                             </Col>
                                             <Col md={18}>
                                                 <div style={{float:'left',}} className="top-menu cancel " name={"boshsahifa"}>
                                                     <div>
                                                         <ul>
                                                             <li><HomeOutlined/></li>
                                                             <li><strong>lt</strong></li>
                                                             <li><SearchOutlined /></li>
                                                             <li><img style={{width:'3%'}} src="https://ktu.edu/wp-content/themes/ktu/public/images/360-degree.svg" alt="error"/></li>
                                                         </ul>
                                                         <div style={{position:'absolute',right:'0'}}>
                                                             <h3 style={{float:'left',marginTop:'5px',marginRight:'15px'}}><PhoneOutlined /> +998 90 555-22-33</h3>
                                                             <Button className="covid-btn" style={{marginRight:'5px',width:'120px',height:'40px'}}>COVID-19</Button>
                                                             <Link to={"/qabulxona"}><Button className="pochta-btn" style={{marginRight:'5px',width:'105px',height:'40px'}} type="danger">{uzLang?"Qabulxona":!!enLang?"Reception":"Прием"}</Button></Link>
                                                             <Button className="qabul-btn" style={{marginRight:'0px',width:'105px',height:'33px'}} type="danger">    <a href="#"><Select onChange={changeSelect} defaultValue={!GetLanguage()?"UZ":GetEnLanguage?"EN":"RU"}  style={{border:'0px solid black',width:'100%',color:'black',position:'absolute',right:'0px',top:'0px',fontSize:'15px',cursor:'pointer'}}>
                                                                 <Option value="EN"  ><p style={{color:'black'}} >EN</p></Option>
                                                                 <Option value="UZ"  ><p style={{color:'black'}} >UZ</p></Option>
                                                                 <Option value="RU"  ><p style={{color:'black'}} >RU</p></Option>                                                             </Select></a></Button>
                                                         </div>
                                                     </div>
                                                     <div className="menu">
                                                         <ul>
                                                             {
                                                                menyular.map(item=>(
                                                                    <li className="item1" style={{cursor:'pointer'}} onClick={()=>OnClickHover("item1")} >  <Dropdown trigger={"click"} overlay={menu}>
                                                                        <h4 style={{fontFamily:'sans-serif',fontSize:`${uzLang?'16px':enLang?'14px':'12px'}`}}><strong>{uzLang?item.titleUz:!!enLang?item.titleEn:item.titleRu} <CaretDownOutlined /></strong></h4>
                                                                    </Dropdown></li>
                                                                ))
                                                             }
                                                             {/*<li className="item2"  style={{cursor:'pointer'}} onClick={()=>OnClickHover("item2")}>  <Dropdown trigger={"click"} overlay={menu1}>*/}
                                                             {/*    <h4 style={{fontFamily:'sans-serif',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}}><strong>{uzLang?"Tuzilma":!!enLang?"Structure":"Структура"}<CaretDownOutlined /></strong></h4>*/}
                                                             {/*</Dropdown></li>*/}
                                                             {/*<li className="item3"  style={{cursor:'pointer'}} onClick={()=>OnClickHover("item3")}>  <Dropdown trigger={"click"} overlay={menu2}>*/}
                                                             {/*    <h4 style={{fontFamily:'sans-serif',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}}><strong>{uzLang?"Faoliyat":!!enLang?"Activity":"Мероприятия"}<CaretDownOutlined /></strong></h4>*/}
                                                             {/*</Dropdown></li>*/}
                                                             {/*<li className="item4"  style={{cursor:'pointer'}} onClick={()=>OnClickHover("item4")}>  <Dropdown trigger={"click"} overlay={menu3}>*/}
                                                             {/*    <h4 style={{fontFamily:'sans-serif',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}}><strong>{uzLang?"Abituriyent":!!enLang?"Applicant":"Заявител"}<CaretDownOutlined /></strong></h4>*/}
                                                             {/*</Dropdown></li>*/}
                                                             {/*<li className="item5"  style={{cursor:'pointer'}} onClick={()=>OnClickHover("item5")}>  <Dropdown trigger={"click"} overlay={menu4}>*/}
                                                             {/*    <h4 style={{fontFamily:'sans-serif',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}}><strong>{uzLang?"Talabalar":!!enLang?"Students":"Студенти"}<CaretDownOutlined /></strong></h4>*/}
                                                             {/*</Dropdown></li>*/}
                                                             {/*<li className="item6"  style={{cursor:'pointer'}} onClick={()=>OnClickHover("item6")}>  <Dropdown trigger={"click"} overlay={menu5}>*/}
                                                             {/*    <h4 style={{fontFamily:'sans-serif',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}}><strong>{uzLang?"Qonunchilik":!!enLang?"Legislation":"Законодательство"}<CaretDownOutlined /></strong></h4>*/}
                                                             {/*</Dropdown></li>*/}
                                                             {/*<li className="item7"  style={{cursor:'pointer',marginRight:'0'}} onClick={()=>OnClickHover("item7")}>  <Dropdown trigger={"click"} overlay={menu6}>*/}
                                                             {/*    <h4 style={{fontFamily:'sans-serif',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}}><strong>{uzLang?"Interaktiv":!!enLang?"Interactive":"Интерактивний"}<CaretDownOutlined /></strong></h4>*/}
                                                             {/*</Dropdown></li>*/}
                                                         </ul>
                                                     </div>
                                                 </div>
                                             </Col>
                                         </Row>
                                     </div>
                                 </div>
                             </div>
                         </Col>
                     </Row>
                 </div>
                  <p onClick={open} className="none" style={{position:'absolute',right:'10px',top:'10px',fontSize:'30px',cursor:'pointer'}}>
                      <MenuOutlined/>
                  </p>
              </div>
               </div>
<div className="sidebarmenu cancel">
    <Row>
        <Col sm={24} className="k-btn">
           <p style={{fontSize:'22px',color:'white',marginLeft:'20px',marginTop:'7px'}}><strong>COVID-19</strong></p>
        </Col>
        <Col sm={24} className="item">
            <a href="/homepage"> {uzLang?" Umumiy ma'lumotlar ":!!enLang?"General information":"Общая информация"}</a>
            <a onClick={()=>umumiy('um')} style={{position:'absolute', right:'35px', fontSize:'18px',marginTop:'10px'}}>{plus==='um'?<MinusOutlined/>:<PlusOutlined/>}</a>
        </Col>
         <div className="umumiy cancel">
             <Row>
             {
                 Umumiy.map(item=>(
                     <Col sm={24} className="item itemm">
                         <a href={item.path}>{item.nameUz}</a>
                     </Col>
                 ))
             }
             </Row>
         </div>
        <Col sm={24} className="item">
            <a href="/homepage" > {uzLang?"Tuzilma ":!!enLang?"Structure":"Структура"}</a>
            <a onClick={()=>tuzilma('tuz')} style={{position:'absolute', right:'35px', fontSize:'18px',marginTop:'10px'}}>{plus==='tuz'?<MinusOutlined/>:<PlusOutlined/>}</a>
        </Col>
        <div className="tuzilma cancel">
            <Row>
                {
                    Tuzilma.map(item=>(
                        <Col sm={24} className="item itemm">
                            <a href={item.path}>{item.nameUz}</a>
                        </Col>
                    ))
                }
            </Row>
        </div>
        <Col sm={24} className="item">
            <a href="/homepage"> {uzLang?"faoliyat ":!!enLang?"activity":"Мероприятия"}</a>
            <a onClick={()=>faoliyat('faol')} style={{position:'absolute', right:'35px', fontSize:'18px',marginTop:'10px'}}>{plus==='faol'?<MinusOutlined/>:<PlusOutlined/>}</a>
        </Col>
        <div className="faoliyat cancel">
            <Row>
                {
                    Faoliyat.map(item=>(
                        <Col sm={24} className="item itemm">
                            <a href={item.path}>{item.nameUz}</a>
                        </Col>
                    ))
                }
            </Row>
        </div>
        <Col sm={24} className="item">
            <a href="/homepage"> {uzLang?"Abituriyent  ":!!enLang?"Entrant":"абитуриент"}</a>
            <a onClick={()=>abituriyent('abt')} style={{position:'absolute', right:'35px', fontSize:'18px',marginTop:'10px'}}>{plus==='abt'?<MinusOutlined/>:<PlusOutlined/>}</a>
        </Col>
        <div className="abituriyent cancel">
            <Row>
                {
                    Abituryent.map(item=>(
                        <Col sm={24} className="item itemm">
                            <a href={item.path}>{item.nameUz}</a>
                        </Col>
                    ))
                }
            </Row>
        </div>
        <Col sm={24} className="item">
            <a href="/homepage"> {uzLang?"Talabalarga ":!!enLang?"To students":"Студентам"}</a>
            <a onClick={()=>talabalar('talaba')} style={{position:'absolute', right:'35px', fontSize:'18px',marginTop:'10px'}}>{plus==='talaba'?<MinusOutlined/>:<PlusOutlined/>}</a>
        </Col>
        <div className="talabalar cancel">
            <Row>
                {
                    Talabalar.map(item=>(
                        <Col sm={24} className="item itemm">
                            <a href={item.path}>{item.nameUz}</a>
                        </Col>
                    ))
                }
            </Row>
        </div>
        <Col sm={24} className="item">
            <a href="/homepage"> {uzLang?"Qonunchilik ":!!enLang?"Legislation":"Законодательство"}</a>
            <a onClick={()=>qonunchilik('qonun')} style={{position:'absolute', right:'35px', fontSize:'18px',marginTop:'10px'}}>{plus==='qonun'?<MinusOutlined/>:<PlusOutlined/>}</a>
        </Col>
        <div className="qonunchilik cancel">
            <Row>
                {
                    Qonunchilik.map(item=>(
                        <Col sm={24} className="item itemm">
                            <a href={item.path}>{item.nameUz}</a>
                        </Col>
                    ))
                }
            </Row>
        </div>
        <Col sm={24} className="item">
            <a href="/homepage"> {uzLang?" interaktiv xizmatlar ":!!enLang?"interactive services":"интерактивные услуги"}</a>
            <a style={{position:'absolute', right:'35px', fontSize:'18px',marginTop:'10px'}}>{<PlusOutlined/>}</a>
        </Col>
        <Col sm={24} className="p-btn" >
            <Link to={"/qabulxona"}> <p style={{fontSize:'20px',marginLeft:'20px',marginTop:'7px'}}><strong>{uzLang?"Qabulxona":!!enLang?"Reception":"Прием"}</strong></p></Link>
        </Col>
        <Col sm={24} className="x-btn" >
            <p style={{fontSize:'20px',marginLeft:'20px',marginTop:'7px'}}>
                <Select onChange={changeSelect} defaultValue={!GetLanguage()?"UZ":!GetEnLanguage?"EN":"RU"}  style={{color:'black',cursor:'pointer'}}>
                    <Option value="EN"  ><p style={{color:'black'}} >EN</p></Option>
                    <Option value="UZ"  ><p style={{color:'black'}} >UZ</p></Option>
                    <Option value="RU"  ><p style={{color:'black'}} >RU</p></Option>
                </Select>
            </p>
        </Col>
    </Row>
</div>
           </section>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        uzLang: state.changeLang.uzLang,
        enLang: state.changeLang.enLang,
    };
};
export default connect(mapStateToProps,{uzLanguage,ruLanguage,enLanguage})(
    Header
)
