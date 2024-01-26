import React,{Component} from 'react';
import "antd/dist/antd.css"
import './header/header.css'
import { BrowserRouter as Router, Route, Switch,Redirect,Link} from 'react-router-dom';
import Header from "./header/header";
import Elonlar from "./Elonlar/Elonlar";
import Yangiliklar from "./yangiliklar/yangiliklar";
import Interactive from "./InteraktivXizmatlar/Interactive";
import Videolar from "./Videolar/Videolar";
import Iqtidorli from "./Iqtidorli/Iqtidorli";
import Footer from "./Footer/Footer";
import Karousel from "./Karousel/Karousel";
import MainSlider from "./MainSlider/MainSlider";
import FirstSlider from "./Karousel/first";
import ElektronDekanat from "./ElektronDekanat/ElektronDekanat";
import Login from "./Login/Login";
import Abituriyentlar from "./Abituriyentlar uchun/Abituriyentlar";
import Virtual_qabulxona from "./Virtual qabulxona/virtual_qabulxona";
import Barchasi from "./Barchasi/Barchasi";
import ElektronK from "./ElektronK/ElektronK";
import {connect} from "react-redux";
import {enLanguage} from "./Redux/Actions/EnLanguage";
import {uzLanguage} from "./Redux/Actions/Uzlanguage";
import {ruLanguage} from "./Redux/Actions/RuLanguage";
import {GetEnLanguage, GetLanguage,GetRuLanguage} from "./Utilitil";
import Qabulxona from "./qabulxona/Qabulxona";
import Scroll from "react-scroll";
import Spyexample from "./spy";
import Element1 from "./element1";
import Element2 from "./element2";
var Linkk = Scroll.Link;
class App extends Component{
    componentDidMount() {
        if (!GetLanguage() && GetEnLanguage() || !GetLanguage() && GetRuLanguage()){
            this.props.uzLanguage();
        }else {
           if (!GetEnLanguage() && GetRuLanguage() || !GetEnLanguage() && GetLanguage()){
               this.props.enLanguage()
           }else if (GetRuLanguage() && GetEnLanguage() || !GetRuLanguage() && GetLanguage()) {
               this.props.ruLanguage()
           }
        }

    }

    render() {
    return (
       <section>
           {/*<Spyexample/>*/}
           {/*<Element1/>*/}
           {/*<Element2/>*/}
           <div className="body">
               <div className="container">
                   <Router>
                       <Switch>
                           <Route path={"/home/homepage"}>
                               <Header/>
                               <FirstSlider/>
                               <Elonlar />
                               <Yangiliklar/>
                               <Interactive/>
                               <Videolar/>
                               <Iqtidorli/>
                               <Footer/>
                           </Route>
                           <Route path={"/home/barchasi"}>
                               <Header/>
                               <Barchasi/>
                               <Footer/>
                           </Route>
                           <Route path={"/home/elektrondekanat"}>
                               <ElektronDekanat/>
                           </Route>
                           <Route path={"/shaxsiykabinet"}>
                               <Login/>
                           </Route>
                           <Route path={"/virtualqabulxona"}>
                               <Virtual_qabulxona/>
                           </Route>
                           <Route path={"/abituriyentlaruchun"}>
                               <Abituriyentlar/>
                           </Route>
                           <Route path={"/sorovnoma"}>
                               <Abituriyentlar/>
                           </Route>
                           <Route path={"/elektronkutubxona"}>
                               <ElektronK/>
                           </Route>
                           <Route path={"/qabulxona"}>
                               <Qabulxona/>
                           </Route>
                           <Redirect from={"/"} to={"/home/homepage"}/>
                       </Switch>
                   </Router>
               </div>
           </div >
           <div style={{backgroundColor:'#2A5867',width:'100%'}}>
           </div>



       </section>
    );
  }
}
const mapStateToProps = (state) => {

    return {
        uzLang: state.changeLang.uzLang,
    };
};
export default connect(mapStateToProps,{enLanguage,uzLanguage,ruLanguage})(
    App
)
