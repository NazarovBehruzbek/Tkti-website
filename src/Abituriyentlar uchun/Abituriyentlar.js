import React from 'react';
import '../Abituriyentlar uchun/Abituriyent.css';
import {Col, Row, Menu, Dropdown, Input, Button, Select} from "antd";
import {Link} from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {
    HomeOutlined,
    DownOutlined,
    SearchOutlined,
    ApartmentOutlined,
    PlusOutlined,
    MinusOutlined,
    MenuOutlined
} from '@ant-design/icons'
import {Abituryent, Faoliyat, Qonunchilik, Talabalar, Tuzilma, Umumiy} from "../header/menyular";
import {connect} from "react-redux";
import {uzLanguage} from "../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../Redux/Actions/RuLanguage";
import {enLanguage} from "../Redux/Actions/EnLanguage";
import {GetEnLanguage, GetLanguage} from "../Utilitil";
const { Search } = Input;
const { Option } = Select;
class Abituriyentlar extends React.Component{
    state={
        plus:'',
        uzbek:false,
    }

    render() {
        const {uzLang,enLang}=this.props;
        const style = {
            width:"100%",marginTop:'10px',color:'white'

        }
        const Uzbek=()=>{
            if (this.state.uzbek){
                uzLanguage();
            }else{
                console.log("xato bor")
            }
        }
        const  {plus}=this.state;
        const Minus=(classname)=>{
            this.setState({
                plus:`${classname}`,
            })
        }
        const Plus=()=>{
            this.setState({
                plus:'',
            })
        }
        const menu1 = (
            <div className="hoverMenu">
              <Menu className="hoverMenu">
                  <Menu.Item className="hoverItem">{uzLang?"Institut haqida":!!enLang?"About the Institute":"Об Институте"}</Menu.Item>
                  <Menu.Item className="hoverItem">{uzLang?"Bizning manzil":!!enLang?"Our address":"Наш адрес"}</Menu.Item>
                  <Menu.Item className="hoverItem"> {uzLang?"Aloqa":!!enLang?"Communacation":"Коммуникасия"}</Menu.Item>
              </Menu>
          </div>
        );
        const men1 = (
            <div className="hoverMenu1">
                <Menu className="hoverMenu1">
                    <Menu.Item className="hoverItem hoverItem1">{uzLang?"Institut haqida":!!enLang?"About the Institute":"Об Институте"}</Menu.Item>
                    <Menu.Item className="hoverItem hoverItem1">{uzLang?"Tarkibiy tuzilma ":!!enLang?"Structural structure":"Структурная структура"} </Menu.Item>
                    <Menu.Item className="hoverItem hoverItem1">{uzLang?"Bizning manzil":!!enLang?"Our address":"Наш адрес"} </Menu.Item>
                    <Menu.Item className="hoverItem hoverItem1">{uzLang?"Rahbariyat":!!enLang?"Management":"Управление"} </Menu.Item>
                </Menu>
            </div>
        );
        const menu2 = (
            <div className="hoverMenu">
                <Menu className="hoverMenu">
                    <Menu.Item className="hoverItem">{uzLang?"Rahbariyat":!!enLang?"Management":"Управление"}</Menu.Item>
                    <Menu.Item className="hoverItem">{uzLang?"Yoshlar ittifoqi ":!!enLang?"Youth Union":"Союз Молодежи"}</Menu.Item>
                    <Menu.Item className="hoverItem">{uzLang?"Fakultetlar":!!enLang?"Faculties":"Факултети"}</Menu.Item>
                    <Menu.Item className="hoverItem">{uzLang?"TKTI Shahrisabz filiali ":!!enLang?"TKTI Shahrisabz branch":"ТКТИ Шахрисабзский филиал"}</Menu.Item>
                    <Menu.Item className="hoverItem">{uzLang?"Markazlar va bo'limlar":!!enLang?"Centers and Departments":"Сентры и отдели "}</Menu.Item>
                    <Menu.Item className="hoverItem">{uzLang?"Kafedralar":!!enLang?"Chairs":"Cтулья"}</Menu.Item>
                    <Menu.Item className="hoverItem">{uzLang?"TKTI qoshidagi akademik litsey ":!!enLang?"Academic lyceum under TKTI":"Академический лицей при ТКТИ"}</Menu.Item>
                    <Menu.Item className="hoverItem">{uzLang?"OTM ustavi ":!!enLang?"University charter":"Устав университета"}</Menu.Item>
                    <Menu.Item className="hoverItem">{uzLang?"Tarkibiy tuzilma ":!!enLang?"Structural structure":"Структурная структура"}</Menu.Item>
                </Menu>
            </div>
        );
        const menu3 = (
            <div className="hoverMenu">
            <Menu className="hoverMenu">
                <Menu.Item className="hoverItem">{uzLang?"Ikki tomonlama diplom ":!!enLang?"Double diploma":"Двойной диплом"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Kerakli hujjatlar ":!!enLang?"Required documents":"Необходимые документы"} </Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"O'tish ballari ":!!enLang?"Transition points":"Точки перехода"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Qabul kvotalari ":!!enLang?"Admission quotas":"Квоты приема"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Test topshiriladigan binolar ":!!enLang?"Test buildings":"Тестовые здания"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Abituriyentlarga eslatma ":!!enLang?"Note to applicants":"Примечание для соискателей "}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Kunlik arizalar tushumi ":!!enLang?"Receipt of daily applications":"Прием ежедневных заявок"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Test topshiriladigan fanlar ro'yxati ":!!enLang?"List of subjects to be tested":"Список предметов для тестирования"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Qabul jarayoniga oid me'yoriy hujjatlar ":!!enLang?"Regulatory documents related to the admission process":"Нормативные документы, связанные с приемом"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Abituriyentlar ma’lumotlari va arizalarini online ro‘yxatga olish tizimi ":!!enLang?"Online registration system for applicants' information and applications":"Система онлайн-регистрации для информации и заявок соискателей"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"To'lov-kontrakt mablag'lari ":!!enLang?"Payment-contract funds":"Платежно-договорные фонды"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Muddatli harbiy xizmatni o`tagan abituriyentlar uchun ":!!enLang?"For applicants who have served in the military":"Для поступающих, прошедших военную службу  "}</Menu.Item>

            </Menu></div>
        );
        const menu4 = (
            <div className="hoverMenu">
            <Menu className="hoverMenu">
                <Menu.Item className="hoverItem">{uzLang?"Masofaviy ta'lim ":!!enLang?"Distance learning":"Дистанционное обучение"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Bakalavriat ":!!enLang?"Bachelor's degree":"Степень бакалавра"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Magistratura ":!!enLang?"Master's":"Магистра"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Dars jadvali ":!!enLang?"Class schedule":"Расписание занятий"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Bitiruvchilar ":!!enLang?"Alumni":"Выпускников"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Kontrakt narxlari ":!!enLang?"Contract price":"Договорная цена"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Shaxsiy kabinet ":!!enLang?"Personal cabinet":"Личный кабинет"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Iqtidorli talabalar ":!!enLang?"Gifted students":"Одаренные студенты"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Stipendiyalar ":!!enLang?"Scholarships":"Стипендии"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Yo'riqnoma ":!!enLang?"Instructions":"инструкции"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Talabalar turar joylari ":!!enLang?"Student accommodation":"Студенческая гостиница"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Xorijiy talabalar ":!!enLang?"International students":"Международные студенты"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Sport ":!!enLang?"Sport":"Спорт"}</Menu.Item>
            </Menu></div>
        );
        const menu5 = (
            <div className="hoverMenu">
            <Menu className="hoverMenu">
                <Menu.Item className="hoverItem">{uzLang?"Bo'sh ish o'rinlari ":!!enLang?"Vacancies":"Свободные места"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Dars jadvali ":!!enLang?"Class schedule":"Расписание занятий"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Bitiruvchilar ":!!enLang?"Alumni":"Выпускников"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Diplom olganligi haqida ma'lumot ":!!enLang?"Information about graduation":"Информация об окончании"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Elektron kutubxona ":!!enLang?"Electronic library":"Электронная библиотека"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"O'quv-uslubiy hujjatlar ":!!enLang?"Educational-methodical documents":"Учебно-методические документы"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Me'yoriy hujjatlar ":!!enLang?"Normative documents":"Нормативная документация"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Abituriyentlar uchun":!!enLang?"For applicants":"Для соискателей"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Interaktiv xizmatlar reglamentlari ":!!enLang?"Regulations for interactive services":"Регламент интерактивных услуг"}</Menu.Item>
                {/*<Menu.Item className="hoverItem">Jurnallar{uzLang?"Sport ":!!enLang?"Sport":"Спорт"}</Menu.Item>*/}
                <Menu.Item className="hoverItem">{uzLang?"Abituriyentlarning hujjatlar to'plamini qaytarib olish ":!!enLang?"Withdrawal of the applicant's set of documents":"Изъятие пакета документов заявителя"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Tijorat takliflari ":!!enLang?"Commercial offers":"Коммерческие предложения"}</Menu.Item>
                <Menu.Item className="hoverItem">ILM-FAN 2020 </Menu.Item>
            </Menu></div>
        );
        const menu6 = (
            <div className="hoverMenu1">
            <Menu className="hoverMenu">
                <Menu.Item className="hoverItem">{uzLang?"Ilmiy-faoliyat":!!enLang?"Scientific activity":"Научная деятельность"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Madaniy-ma'rifiy faoliyat":!!enLang?"Cultural and educational activity":"Културно-просветительская деятельность"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Ekologiya va atrof-muhit muhofazasi ":!!enLang?"Ecology and environmental protection":"Экология и охрана окружающей среды"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"O'quv faoliyati ":!!enLang?"Learning activities":"Учебные мероприятия"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Moliyaviy faoliyat":!!enLang?"Financial activity":"Финансовая деятельность"}</Menu.Item>
            </Menu></div>
        );
 const salom=(value)=>{
     console.log(value)
 }

  const menu7 = (
            <div className="hoverMenu1">
            <Menu className="hoverMenu">
                <Menu.Item className="hoverItem">{uzLang?"Xalqaro aloqalar bo`limi ":!!enLang?"Department of International Relations":"Департамент международных отношений"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Xalqaro loyihalar ":!!enLang?"International projects":"Международные проекты"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Xamkorlar ":!!enLang?"Partners":"Партнеры"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Xalqaro hamkorlik ":!!enLang?"International cooperation":"Международное сотрудничество"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Xalqaro grantlar ":!!enLang?"International grants":"Международные гранты"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Akademik almashinuv dasturlari ":!!enLang?"Academic exchange programs":"Программы академического обмена"}</Menu.Item>
                <Menu.Item className="hoverItem">{uzLang?"Xorijiy stajirovkalar ":!!enLang?"Foreign internships":"Зарубежные стажировки"}</Menu.Item>
            </Menu></div>
        );
        const preventDefault=()=>{

        }
        const open=()=>{
            {
                document.querySelector(".sidebarmenu12").classList.toggle("cancel")
                document.querySelector(".umumiy").classList.add("cancel")
                document.querySelector(".tuzilma").classList.add("cancel")
                document.querySelector(".faoliyat").classList.add("cancel")
                document.querySelector(".abituriyent").classList.add("cancel")
                document.querySelector(".talabalar").classList.add("cancel")
                document.querySelector(".qonunchilik").classList.add("cancel")
            }
            this.setState({
                plus:'',
            })
        }
        const changeSelect=(value)=>{

            if (value==="UZ"){
                this.props.uzLanguage();
            }else if (value==="EN") {
                this.props.enLanguage();
            }else {
                this.props.ruLanguage();
            }
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
        const search=()=>{
            document.querySelector(".search-btn").classList.toggle("close")
        }
        return(
            <section>
             <div className="mainAreaA">
              <div className="container122">
                  <div className="Aheader AHead">
                      <Row>
                          <Col lg={16} md={24} sm={24} xs={24}>
                            <div style={{width:'100%'}}>
                                <ul>
                                    <li><ApartmentOutlined /></li>
                                    <li><div className="Achiziq"></div></li>
                                    <li>{uzLang?"Ishonch telefoni ":!!enLang?"Helpline":"Телефон доверия"}: (+99871) 244-78-49</li>
                                    <li><div className="Achiziq"></div></li>
                                    <li>{uzLang?"Pochta ":!!enLang?"Mail":"Почта"}</li>

                                </ul>
                            </div>
                          </Col>
                          <Col lg={8} md={24} sm={24} xs={24}>
                             <div style={{width:'100%'}}>
                                 <ul className="UzFlag">
                                     <li><abbr title={uzLang?"Davlat Ramzi ":!!enLang?"State Symbol":"Государственный символ"}><img style={{width:'50%',cursor:'pointer'}} src="http://tkti.uz/images/gerb.png" alt="Gerb"/></abbr></li>
                                     <li><div className="Achiziq"></div></li>
                                     <li>A-</li>
                                     <li><div className="Achiziq"></div></li>
                                     <li>A</li>
                                     <li><div className="Achiziq"></div></li>
                                     <li>A+</li>
                                     <li><div className="Achiziq"></div></li>
                                     <li><img width="20%" src="http://tkti.uz/images/contrast.png" alt="Contrast"/></li>
                                     <li><div className="Achiziq"></div></li>
                                     <li><a href="#"><Select onChange={changeSelect} defaultValue={!GetLanguage()?"UZ":GetEnLanguage?"EN":"RU"}  style={{border:'0px solid black',width:'20%',color:'black',position:'absolute',right:'50px',top:'0px',fontSize:'15px',cursor:'pointer'}}>
                                         <Option value="EN"  ><p style={{color:'black'}} ><img width="80%" src="http://tkti.uz/images/uk_flag.png" alt="Inglizcha"/></p></Option>
                                         <Option value="UZ"  ><p style={{color:'black'}} ><img  width="80%" src="http://tkti.uz/images/uz_flag.png" alt="Uzbekcha" /></p></Option>
                                         <Option value="RU"  ><p style={{color:'black'}} ><img width="80%" src="http://tkti.uz/images/ru_flag.png" alt="Ruscha"/></p></Option>
                                     </Select></a></li>

                                 </ul>
                             </div>
                          </Col>
                      </Row>
                  </div>
                         <div className="KtuYo">
                             <div className="sidebarmenu12 cancel">
                                 <Row>
                                     <Col sm={24} className="k-btn">
                                         <p style={{fontSize:'22px',color:'white',marginLeft:'20px',marginTop:'7px'}}><strong>COVID-19</strong></p>
                                     </Col>
                                     <Col sm={24} className="item">
                                         <a  href="/homepage">  {uzLang?" Umumiy ma'lumotlar ":!!enLang?"General information":"Общая информация"}</a>
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
                                         <a href="/homepage">  {uzLang?"Tuzilma ":!!enLang?"Structure":"Структура"}</a>
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
                                         <a href="/homepage">  {uzLang?"faoliyat ":!!enLang?"activity":"Мероприятия"}</a>
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
                                         <a href="/homepage">  {uzLang?"Qonunchilik ":!!enLang?"Legislation":"Законодательство"}</a>
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
                                         <a href="/homepage">  {uzLang?" interaktiv xizmatlar ":!!enLang?"interactive services":"интерактивные услуги"}</a>
                                         <a style={{position:'absolute', right:'35px', fontSize:'18px',marginTop:'10px'}}>{<PlusOutlined/>}</a>
                                     </Col>
                                     <Col sm={24} className="p-btn" >
                                         <p style={{fontSize:'20px',marginLeft:'20px',marginTop:'7px'}}><strong>{uzLang?"Pochta ":!!enLang?"Mail":"Почта"}</strong></p>
                                     </Col>
                                     <Col sm={24} className="x-btn" >
                                         <Link to={"/qabulxona"}>  <p style={{fontSize:'20px',marginLeft:'20px',marginTop:'7px'}}><strong>{uzLang?"Qabulxona":!!enLang?"Reception":"Прием"}</strong></p></Link>
                                     </Col>
                                 </Row>
                             </div>
                             <img style={{width:'100%'}} src="http://tkti.uz/images/logo-header.png" alt="KtuLogo"/>
                         </div>
                  <div className="Aheader MEnuA">
                      <Row>
                          <Col xs={24}>
                              <ul className="UlCancel">
                                  <li className="hoverItem" style={{cursor:'pointer'}}><HomeOutlined /></li>
                                  <li className="hoverItem">  <Dropdown overlay={menu1}>
                                      <a  style={{color:'white',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}} onClick={e => e.preventDefault()}>
                                          {uzLang?" Umumiy ma'lumotlar ":!!enLang?"General information":"Общая информация"} <DownOutlined />
                                      </a>
                                  </Dropdown></li>
                                  <li className="hoverItem">  <Dropdown overlay={menu2}>
                                      <a  style={{color:'white',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}} onClick={e => e.preventDefault()}>
                                          {uzLang?"Tuzilma ":!!enLang?"Structure":"Структура"} <DownOutlined />
                                      </a>
                                  </Dropdown></li>
                                  <li className="hoverItem">  <Dropdown overlay={menu3}>
                                      <a   style={{color:'white',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}} onClick={e => e.preventDefault()}>
                                          {uzLang?"Abituriyent  ":!!enLang?"Entrant":"абитуриент"}<DownOutlined />
                                      </a>
                                  </Dropdown></li>
                                  <li className="hoverItem">  <Dropdown overlay={menu4}>
                                      <a   style={{color:'white',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}} onClick={e => e.preventDefault()}>
                                          {uzLang?"Talabalarga ":!!enLang?"To students":"Студентам"} <DownOutlined />
                                      </a>
                                  </Dropdown></li>
                                  <li className="hoverItem">  <Dropdown overlay={menu5}>
                                      <a  style={{color:'white',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}} onClick={e => e.preventDefault()}>
                                          {uzLang?" interaktiv xizmatlar ":!!enLang?"interactive services":"интерактивные услуги"} <DownOutlined />
                                      </a>
                                  </Dropdown></li>
                                  <li className="hoverItem">  <Dropdown overlay={menu6}>
                                      <a style={{color:'white',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}} onClick={e => e.preventDefault()}>
                                          {uzLang?"faoliyat ":!!enLang?"activity":"Мероприятия"} <DownOutlined />
                                      </a>
                                  </Dropdown></li>
                                  <li className="hoverItem">  <Dropdown overlay={menu7}>
                                      <a  style={{color:'white',fontSize:`${uzLang?'14px':enLang?'14px':'12px'}`}}  onClick={e => e.preventDefault()}>
                                          {uzLang?"Xalqaro aloqalar ":!!enLang?"International relations":"Международные отношения"}<DownOutlined />
                                      </a>
                                  </Dropdown></li>
                                  <li onClick={search} className="hoverItem">
                                      <a style={{color:'white'}} >
                                          <SearchOutlined />
                                      </a>
                                   </li>
                              </ul>
                          </Col>
                      </Row>
                  </div>
                  <div className="search-btn close">
                      <Search
                          className="search-btn"
                          placeholder={uzLang?"Izlash ":!!enLang?"Search":"поиск"}
                          enterButton={uzLang?"Qidirish ":!!enLang?"Search":"поиск"}
                          onSearch={salom}
                      />
                  </div>
                  <div className="workPage">
                      <Row>
                          <Col lg={6} md={24} xs={24}>
                             <div style={{padding:'30px'}}>
                                <ul className="workUl">
                                    <li> <h2>{uzLang?"Yangiliklar ":!!enLang?"News":"Новости"}</h2></li>
                                    <li className="workMenu" onClick={()=>Minus('bir')} onMouseLeave={Plus}>  <Dropdown trigger={['click']}  overlay={men1}>
                                        <a onClick={e => e.preventDefault()}>
                                            {plus==='bir'?<MinusOutlined/>:<PlusOutlined/>} {uzLang?" Umumiy ma'lumotlar ":!!enLang?"General information":"Общая информация"}
                                        </a>
                                    </Dropdown></li>
                                    <li className="workMenu" onClick={()=>Minus('ikki')} onMouseLeave={Plus}>  <Dropdown trigger={['click']}  overlay={men1}>
                                        <a onClick={e => e.preventDefault()}>
                                            {plus==='ikki'?<MinusOutlined/>:<PlusOutlined/>}{uzLang?" Fakultetlar":!!enLang?"Faculties":"Факультеты"}
                                        </a>
                                    </Dropdown></li>
                                    <li className="workMenu" onClick={()=>Minus('uch')} onMouseLeave={Plus}>  <Dropdown trigger={['click']}  overlay={men1}>
                                        <a onClick={e => e.preventDefault()}>
                                            {plus==='uch'?<MinusOutlined/>:<PlusOutlined/>} {uzLang?"Markazlar va bo'limlar":!!enLang?"Centers and Departments":"Сентры и отдели "}
                                        </a>
                                    </Dropdown></li>
                                    <li className="workMenu" onClick={()=>Minus('tort')} onMouseLeave={Plus}>  <Dropdown trigger={['click']}  overlay={men1}>
                                        <a onClick={e => e.preventDefault()}>
                                            {plus==='tort'?<MinusOutlined/>:<PlusOutlined/>} {uzLang?"Kafedralar":!!enLang?"Chairs":"Cтулья"}
                                        </a>
                                    </Dropdown></li>
                                    <li className="workMenu" onClick={()=>Minus('besh')} onMouseLeave={Plus}>  <Dropdown trigger={['click']}  overlay={men1}>
                                        <a onClick={e => e.preventDefault()}>
                                            {plus==='besh'?<MinusOutlined/>:<PlusOutlined/>}{uzLang?"Yoshlar Ittifoqi faoliyati":!!enLang?"Youth Union activities":"Деятельность Союза Молодежи"}
                                        </a>
                                    </Dropdown></li>
                                    <li className="workMenu" onClick={()=>Minus('olti')} onMouseLeave={Plus}>  <Dropdown trigger={['click']}  overlay={men1}>
                                        <a onClick={e => e.preventDefault()}>
                                            {plus==='olti'?<MinusOutlined/>:<PlusOutlined/>} {uzLang?"Ilmiy-faoliyat":!!enLang?"Scientific activity":"Научная деятельность"}
                                        </a>
                                    </Dropdown></li>
                                    <li className="workMenu" onClick={()=>Minus('yetti')} onMouseLeave={Plus}>  <Dropdown trigger={['click']}  overlay={men1}>
                                        <a onClick={e => e.preventDefault()}>
                                            {plus==='yetti'?<MinusOutlined/>:<PlusOutlined/>} {uzLang?"Madaniy-ma'rifiy faoliyat":!!enLang?"Cultural and educational activity":"Културно-просветительская деятельность"}
                                        </a>
                                    </Dropdown></li>
                                    <li className="workMenu" onClick={()=>Minus('on')} onMouseLeave={Plus}>  <Dropdown trigger={['click']}  overlay={men1}>
                                        <a onClick={e => e.preventDefault()}>
                                            {plus==='on'?<MinusOutlined/>:<PlusOutlined/>}{uzLang?"Moliyaviy faoliyat":!!enLang?"Financial activity":"Финансовая деятельность"}
                                        </a>
                                    </Dropdown></li>
                                    <li className="workMenu " onClick={()=>Minus('sakkiz')} onMouseLeave={Plus}>  <Dropdown trigger={['click']}  overlay={men1}>
                                        <a onClick={e => e.preventDefault()}>
                                            {plus==='sakkiz'?<MinusOutlined/>:<PlusOutlined/>}  {uzLang?"Talabalarga ":!!enLang?"To students":"Студентам"}
                                        </a>
                                    </Dropdown></li>
                                    <li className="workMenu" onClick={()=>Minus('toqqiz')} onMouseLeave={Plus}>  <Dropdown trigger={['click']}  overlay={men1}>
                                        <a onClick={e => e.preventDefault()}>
                                            {plus==='toqqiz'?<MinusOutlined/>:<PlusOutlined/>}  {uzLang?"Abituriyent  ":!!enLang?"Entrant":"абитуриент"}
                                        </a>
                                    </Dropdown></li>

                                </ul>
                             </div>
                              <div className="havolalar">
                                  <Row>
                                      <Col xs={24}>
                                          <div className="Telegram">
                                          <h1 style={{color:'white',padding:'10px',marginLeft:'40px'}}> {uzLang?"TEZKOR HAVOLALAR  ":!!enLang?"QUICK RELATIONS":"БЫСТРЫЕ ОТНОШЕНИЯ"}</h1>
                                          </div>
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Col xs={24}  md={24} lg={12}>
                                          <div style={{width:'99%'}}>
                                              <Row>
                                                  <Col xs={24} sm={24} md={24}><div className="imgCenter"><img width={'15%'} src="http://tkti.uz/images/fast_links/e-decanat.png" alt="Error"/></div></Col>
                                                  <Col xs={24} sm={24} md={24}>
                                                      <div className="Telegram1">
                                                          <Link to={"/home/elektrondekanat"}><h3 style={{color:'white',padding:'5px',marginLeft:'10px'}}>{uzLang?"Elektron dekanat":!!enLang?"Electronic dean's office":"Электронный деканат"}</h3></Link>
                                                      </div>
                                                  </Col>
                                              </Row>
                                          </div>
                                      </Col>
                                      <Col xs={24}  md={24} lg={12}>
                                          <div style={{width:'99%'}}>
                                              <Row>
                                                  <Col xs={24} sm={24} md={24}><div className="imgCenter"><img width={'15%'} src="http://tkti.uz/images/fast_links/email-icon.png" alt="Error"/></div></Col>
                                                  <Col xs={24} sm={24} md={24}>
                                                      <div className="Telegram1">
                                                       <Link to={"/virtualqabulxona"}>   <h3 style={{color:'white',padding:'5px',marginLeft:'10px'}}>{uzLang?"Virtual qabulxona":!!enLang?"Virtual reception":"Виртуальный прием"}</h3></Link>
                                                      </div>
                                                  </Col>
                                              </Row>
                                          </div>
                                      </Col>
                                      <Col xs={24}  md={24} lg={12}>
                                          <div style={{width:'99%'}}>
                                              <Row>
                                                  <Col xs={24} sm={24} md={24}><div className="imgCenter"><img width={'15%'} src="http://tkti.uz/images/fast_links/quest.png" alt="Error"/></div></Col>
                                                  <Col sm={24} md={24} xs={24}>
                                                      <div className="Telegram1">
                                                        <Link to={"/sorovnoma"}>  <h3 style={{color:'white',padding:'5px',marginLeft:'10px'}}>{uzLang?"So'rovnoma":!!enLang?"Survey":"Опрос"}</h3></Link>
                                                      </div>
                                                  </Col>
                                              </Row>
                                          </div>
                                      </Col>
                                      <Col xs={24}   md={24} lg={12}>
                                          <div style={{width:'99%'}}>
                                              <Row>
                                                  <Col xs={24} sm={24} md={24}><div className="imgCenter"><img width={'15%'} src="http://tkti.uz/images/fast_links/e-library.png" alt="Error"/></div></Col>
                                                  <Col xs={24} sm={24} md={24}>
                                                      <div className="Telegram1">
                                                         <Link tp={"/elektronkutubxona"}> <h3 style={{color:'white',padding:'5px',marginLeft:'10px'}}>{uzLang?"Elektron kutubxona":!!enLang?"Electronic library":"Электронная библиотека"}</h3></Link>
                                                      </div>
                                                  </Col>
                                              </Row>
                                          </div>
                                      </Col>
                                      <Col xs={24}  md={24} lg={12} >
                                          <div style={{width:'99%'}}>
                                              <Row>
                                                  <Col sm={24} md={24} xs={24}><div className="imgCenter"><img width={'15%'} src="http://tkti.uz/uploads/df48f9ed50_1498320705.png" alt="Error"/></div></Col>
                                                  <Col sm={24} md={24} xs={24}>
                                                      <div className="Telegram1">
                                                         <Link to={"/abituriyentlaruchun"}> <h3 style={{color:'white',padding:'5px',marginLeft:'10px'}}>{uzLang?"Abituriyentlar uchun":!!enLang?"For applicants":"Для соискателей"}</h3></Link>
                                                      </div>
                                                  </Col>
                                              </Row>
                                          </div>
                                      </Col>
                                      <Col xs={24} md={24} lg={12} >
                                          <div style={{width:'99%'}}>
                                              <Row>
                                                  <Col sm={24} md={24} xs={24}><div className="imgCenter"><img width={'15%'} src="http://tkti.uz/images/fast_links/documents2.jpg" alt="Error"/></div></Col>
                                                  <Col sm={24} md={24} xs={24}>
                                                      <div className="Telegram1">
                                                          <h3 style={{color:'white',padding:'5px',marginLeft:'10px'}}>{uzLang?"Meyoriy-huquqiy hujjatlar":!!enLang?"Regulatory documents":"Нормативные документы"}</h3>
                                                      </div>
                                                  </Col>
                                              </Row>
                                          </div>
                                      </Col>
                                  </Row>
                              </div>
                          </Col>
                          <Col lg={18} md={24} xs={24}>
                              <div className="workPageHeader">
                              <h3>{uzLang?"Asosiy":!!enLang?"Main":"Главний"}/{uzLang?"Abituriyentlar uchun":!!enLang?"For applicants":"Для соискателей"}</h3>
                              </div>
                              <div className="workPageArea">
                                  <h1>{uzLang?"Abituriyentlar uchun":!!enLang?"For applicants":"Для соискателей"}</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae delectus deserunt distinctio ducimus eum, explicabo inventore minima, necessitatibus nisi non quae quasi quidem soluta suscipit tempora tempore temporibus veritatis, voluptatum!</p>
                              </div>
                          </Col>
                      </Row>
                  </div>
                  <div className="Afooter">
                  <Row>
                      <Col md={8} sm={24} xs={24}>
                          <ul className="Ful">
                              <li>{uzLang?"Toshkent sh. Navoiy ko’chasi, 32 uy ":!!enLang?"Tashkent Navoi street, 32":"Ташкент Улица Навои, 32"}</li>
                              <li>{uzLang?"Telefon ":!!enLang?"Phone":"Телефон"}: (998-71)244-79-20 Faks: (998-71)244-79-17</li>
                              <li>E-mail: info@tcti.uz,</li>
                              <li>txti_rektor@edu.uz, @tktimatbuotxizmati</li>
                          </ul>
                      </Col>
                      <Col md={8} xs={24} sm={24}>
                          <Map google={this.props.google} zoom={15}  style={style}
                               initialCenter={{
                                   lat: 41.3221444,
                                   lng: 69.2441166

                               }}  >

                              <Marker onClick={this.onMarkerClick}
                                      name={'Current location'} />

                              <InfoWindow onClose={this.onInfoWindowClose}>

                              </InfoWindow>
                          </Map>
                      </Col>
                      <Col md={8} xs={24} sm={24}>
                          <img src="http://www.uz/plugins/top_rating/count/cnt.png?id=30473&r=&pg=http%3A//tkti.uz/uz/pages/info/201&c=Y&j=N&wh=1536x864&px=24&js=1.3&col=0063AF&t=ffffff&p=DD7900" alt="Error" style={{position:'absolute',bottom:'10%',right:'20%'}} />
                      </Col>
                  </Row>
                  </div>
              </div>
             </div>
                <p onClick={open} className="none1 BarMenu" style={{position:'absolute',right:'10px',top:'10px',fontSize:'30px',cursor:'pointer'}}>
                    <MenuOutlined/>
                </p>
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

export default connect(mapStateToProps,{uzLanguage,ruLanguage,enLanguage})(Abituriyentlar)
// GoogleApiWrapper({
//     apiKey: ("AIzaSyC9C2DqNhE0W--wYPmZjjJBQ3_gGHCatO4")
// })
