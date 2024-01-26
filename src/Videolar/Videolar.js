import React from 'react';
import '../Videolar/Videos.css';
import {Col, Row,Card} from "antd";
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {uzLanguage} from "../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../Redux/Actions/RuLanguage";
import {enLanguage} from "../Redux/Actions/EnLanguage";
import axios from "axios";
const {Meta}=Card;
class Videolar extends  React.Component{
    state={
        NewsId:0,
        Videocategories:[],
        videos:[],
    }
    GetVideocategories=()=>{
        const {Videocategories}=this.state;
        axios.get(" http://213.230.99.101:2021/api/auth/videoCategories").then(res=>{
            this.setState({
                Videocategories:res.data,
            })
        }).catch(res=>{
            console.log("xatolik")
        })
    }
    componentDidMount() {
        this.GetVideocategories();
    }
    render() {
        const {uzLang,enLang}=this.props;
        const {Videocategories,videos}=this.state;
        const Border1=(id)=>{
            document.querySelector(".institut").addEventListener("click",function (){
                document.querySelector(".institut").classList.remove("bordernone")
            })
            const {videos}=this.state;
            axios.get(`http://213.230.99.101:2021/api/auth/videos/${id}`).then(res=>{
                this.setState({
                    videos:res.data.content,
                })
            }).catch(res=>{
                console.log("xatolik")
            })

        }
        return(
            <section>
                <div className="interactive">
                    <div className="container1" name={"videolar"}>
                        <Row>
                            <Col lg={16} md={14} sm={14}  xs={14}>
                                <p style={{width:'100%',padding:'10px',fontSize:'30px'}}><strong>{uzLang?"Videolar":!!enLang?"Videos":"Pолики"}</strong></p>
                            </Col>
                            <Col lg={8} md={10} sm={10} xs={10}>
                                <Row>
                                    {
                                        Videocategories.map(item=>(
                                            <Col md={10} sm={12} xs={12}> <div><h4 onClick={Border1} className="institut" style={{width:'70%',padding:'30px',margin:'0 auto'}}>{item.nameUz}</h4></div></Col>
                                        ))
                                    }

                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div className="interComponent">
                        <div className="container1">
                            <Row>
                                {
                                  videos.map(item=>(
                                      <Col lg={6} md={12} xs={24}>
                                          <div style={{width:'100%',padding:'20px'}} >
                                              <Card
                                                  hoverable
                                                  style={{ width: "100%",boxShadow:'none'}}
                                                  cover={<img alt="example" src="http://213.230.99.101:2021/api/auth/file/a8cc5fc7-fb2b-400e-a3f1-6e4239094c58.jpg" />}
                                              >
                                                  <Meta  description={<h3>{item.titleUz}</h3>} title="06.06.2021"/>
                                              </Card>
                                          </div>
                                      </Col>
                                  ))
                                }
                                <Col xs={24}>
                                   <Link style={{color:'black'}} className="linkK" > <button onClick={Border1}  className="select-main-btn1"><strong >{uzLang?"Barchasini ko'rish":!!enLang?"See them all":"Увидеть их всех"}</strong></button></Link>
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
    Videolar
)