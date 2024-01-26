import React,{Component} from 'react';
import {Card, Form, Input, DatePicker, Select, Upload, Button,Switch,Avatar} from 'antd';
import {CheckOutlined,CloseOutlined} from "@ant-design/icons"
import "./qabulxona.css"
import {Col, Row} from "antd";
import {UploadOutlined} from "@ant-design/icons";
const { Meta } = Card;
class Qabulxona extends Component{
open=()=>{
    {
        document.querySelector(".harbiy").classList.toggle("display-none")
    }
}
    open1=()=>{
        {
            document.querySelector(".harbiy1").classList.toggle("display-none")
        }
    }
    open2=()=>{
        {
            document.querySelector(".english").classList.toggle("display-none")
        }
    }
    render() {
        return (
         <section>
             <div className="orqa-fon">
                <Form>
                    <div className="qabul-container">
                        <div>
                            <div style={{paddingTop:'20px',width:'90%'}}>
                                <Row>
                                    <Col md={3} lg={3} sm={15} xs={15}>
                                        <img style={{width:'50%',marginBottom:'20px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmJAiYOQOddY-K1JCy0hGWqnElHW6bGCOCw&usqp=CAU" alt="Xatolik"/>
                                    </Col>
                                    <Col md={3} >
                                        <p><strong>TOSHKENT KIMYO-TEXNOLOGIYA INSTITUTI</strong></p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="ariza">
                            <div style={{width:"35px",height:"35px",borderRadius:'50px',border:'solid 1px black',float:'left'}}>
                                <p className="raqam1">1</p>
                            </div>
                            <p style={{marginLeft:'15px',marginTop:'6px',float:'left'}}>Ariza topshirish</p>
                            <hr className="hr1"/>
                            <div style={{width:"35px",height:"35px",borderRadius:'50px',border:'solid 1px black',float:'left',marginLeft:'360px'}}>
                                <p className="raqam1">2</p>
                            </div>
                            <p style={{marginLeft:'15px',marginTop:'6px',float:'left'}}>Ariza ko'rib chiqish</p>
                            <hr className="hr2"/>
                            <div style={{width:"35px",height:"35px",borderRadius:'50px',border:'solid 1px black',float:'left',marginLeft:'360px'}}>
                                <p className="raqam1">3</p>
                            </div>
                            <p style={{marginLeft:'15px',marginTop:'6px',float:'left'}}>Yo'nalish tanlash</p>
                        </div>
                        <div>
                            <Card className="birinchi">
                                <Row>
                                    <Col md={24} xs={24} sm={24}>
                                        <h1 style={{textAlign:'center',fontSize:'30px'}}><strong><u>Shaxsiy ma'lumotlar</u></strong></h1>
                                    </Col>
                                </Row>
                                <div>
                                    <div name="control-hooks">
                                        <Row style={{marginLeft:'40px'}}>
                                            <Col md={12} xs={24} sm={24}>
                                                <Row>
                                                    <div style={{width:'100%'}}>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="ism">Ism</label>
                                                            <Form.Item
                                                                       name="name"
                                                                       rules={[{ required: true, message:"Ismingizni kiriting"}]}
                                                            >
                                                                <Input placeholder="Ism" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="ism">Familiya</label>
                                                            <Form.Item
                                                                name="name"
                                                                rules={[{ required: true, message:"familiyangizni kiriting"}]}
                                                            >
                                                                <Input placeholder="Familiya" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="ism">Sharif</label>
                                                            <Form.Item
                                                                name="name"
                                                                rules={[{ required: true, message:"Sharifingizni kiriting"}]}
                                                            >
                                                                <Input placeholder="Sharif" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                            </Form.Item>
                                                        </Col>
                                                    </div>
                                                </Row>
                                            </Col>
                                            <Col md={12} xs={24} sm={24}>
                                                <div style={{width:'100%'}}>
                                                    <Col md={24} xs={24} sm={24}>
                                                        <label style={{marginBottom:'50px'}} htmlFor="ism">Tug'ilgan sana</label>
                                                        <Form.Item
                                                            name="name"
                                                            rules={[{ required: true, message:"Tug'ilgan sanangizni kiriting"}]}
                                                        >
                                                            <DatePicker placeholder="Sanani tanlang" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                        </Form.Item>
                                                    </Col>
                                                    <Col md={24} xs={24} sm={24}>
                                                        <label style={{marginBottom:'50px'}} htmlFor="Jinsi">Jinsi</label>
                                                        <Form.Item
                                                            name="name"
                                                            rules={[{ required: true, message:"Jinsingizni tanlang"}]}
                                                        >
                                                            <Select defaultValue="Jinsi" style={{width:"90%",marginTop:'10px',height:'35px'}}>
                                                                <Select.Option value="erkak">Erkak</Select.Option>
                                                                <Select.Option value="ayol">Ayol</Select.Option>
                                                            </Select>
                                                        </Form.Item>
                                                    </Col>
                                                    <Col md={24} xs={24} sm={24}>
                                                        <label htmlFor="ism">Fotosurat (3,5 x 4,5)</label>
                                                        <Form.Item
                                                            name="name"
                                                            rules={[{ required: true, message:"Fotosurat yuklang"}]}
                                                        >
                                                            <Upload name="logo" action="/upload.jpg" listType="picture">
                                                                <Button style={{marginTop:'10px',marginBottom:'5px'}} icon={<UploadOutlined />}>Faylni tanlang</Button>
                                                            </Upload>
                                                            <p>Rasm jpeg, jpg, png formatida bo'lishi va 5mb dan oshmasligi zarur</p>
                                                        </Form.Item>
                                                    </Col>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                            <Card className="birinchi">
                                <Row>
                                    <Col md={24} xs={24} sm={24}>
                                        <h1 style={{textAlign:'center',fontSize:'30px'}}><strong><u>Passport ma'lumotlari</u></strong></h1>
                                    </Col>
                                </Row>
                                <div>
                                    <div name="control-hooks">
                                        <Row style={{marginLeft:'40px'}}>
                                            <Col md={12} xs={24} sm={24}>
                                                <Row>
                                                    <div style={{width:'100%'}}>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="Jinsi">Fuqaroligi</label>
                                                            <Form.Item
                                                                name="name"
                                                                rules={[{ required: true, message:"Fuqaroligingizni tanlang"}]}
                                                            >
                                                                <Select defaultValue="Fuqaroligi" style={{width:"90%",marginTop:'10px',height:'35px'}}>
                                                                    <Select.Option value="uzbek">O'zbek</Select.Option>
                                                                    <Select.Option value="russia">Russia</Select.Option>
                                                                </Select>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="Jinsi">Viloyat</label>
                                                            <Form.Item
                                                                name="name"
                                                                rules={[{ required: true, message:"viloyatingizni tanlang"}]}
                                                            >
                                                                <Select defaultValue="Viloyat" style={{width:"90%",marginTop:'10px',height:'35px'}}>
                                                                    <Select.Option value="qarshi">Qashqadaryo</Select.Option>
                                                                    <Select.Option value="surxon">Surxandaryo</Select.Option>
                                                                </Select>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="Jinsi">Tuman</label>
                                                            <Form.Item
                                                                name="name"
                                                                rules={[{ required: true, message:"Tumaningizni tanlang"}]}
                                                            >
                                                                <Select defaultValue="Tuman" style={{width:"90%",marginTop:'10px',height:'35px'}}>
                                                                    <Select.Option value="yakkabog">Yakkabog'</Select.Option>
                                                                    <Select.Option value="boysun">Boysun</Select.Option>
                                                                </Select>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="ism">Ko'cha nomi, uy, xonadon raqami</label>
                                                            <Form.Item
                                                                name="name"
                                                                rules={[{ required: true, message:"Manzilingizni kiriting"}]}
                                                            >
                                                                <Input placeholder="Manzil" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                            </Form.Item>
                                                        </Col>
                                                    </div>
                                                </Row>
                                            </Col>
                                            <Col md={12} xs={24} sm={24}>
                                                <div style={{width:'100%'}}>
                                                    <Col md={24} xs={24} sm={24}>
                                                        <label style={{marginBottom:'50px'}} htmlFor="millat">Millat</label>
                                                        <Form.Item
                                                            name="name"
                                                            rules={[{ required: true, message:"Millatingizni tanlang"}]}
                                                        >
                                                            <Select defaultValue="Fuqaroligi" style={{width:"90%",marginTop:'10px',height:'35px'}}>
                                                                <Select.Option value="uzbek">O'zbek</Select.Option>
                                                                <Select.Option value="russia">Rus</Select.Option>
                                                            </Select>
                                                        </Form.Item>
                                                    </Col>
                                                    <Col md={24} xs={24} sm={24}>
                                                        <Row>
                                                            <Col md={4}>
                                                                <label style={{marginBottom:'50px'}} htmlFor="ism">Seriya</label>
                                                                <Form.Item
                                                                    name="name"
                                                                    rules={[{ required: true, message:"Seriyangizni kiriting"}]}
                                                                >
                                                                    <Input placeholder="AA" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col md={20}>
                                                                <label style={{marginBottom:'50px'}} htmlFor="ism">Passport raqami</label>
                                                                <Form.Item
                                                                    name="name"
                                                                    rules={[{ required: true, message:"Passport raqamingizni kiriting"}]}
                                                                >
                                                                    <Input placeholder="1234567" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                                </Form.Item>
                                                            </Col>
                                                        </Row></Col>
                                                    <Col md={24} sm={24} xs={24}>
                                                        <label style={{marginBottom:'50px'}} htmlFor="ism">Kim tomonidan berilgan</label>
                                                        <Form.Item
                                                            name="name"
                                                            rules={[{ required: true, message:"Iltimos to'ldiring"}]}
                                                        >
                                                            <Input placeholder="Toshkent IIB" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                        </Form.Item>
                                                    </Col>
                                                    <Col md={24} xs={24} sm={24}>
                                                        <label htmlFor="ism">Passport(pdf)</label>
                                                        <Form.Item
                                                            name="pasport"
                                                            rules={[{ required: true, message:"Pasportingizni yuklang"}]}
                                                        >
                                                            <Upload name="logo" action="/upload.jpg" listType="picture">
                                                                <Button style={{marginTop:'10px',marginBottom:'5px'}} icon={<UploadOutlined />}>Faylni tanlang</Button>
                                                            </Upload>
                                                        </Form.Item>
                                                    </Col>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                            <Card className="birinchi">
                                <Row>
                                    <Col md={24} xs={24} sm={24}>
                                        <h1 style={{textAlign:'center',fontSize:'30px'}}><strong><u>Ma'lumotlari</u></strong></h1>
                                    </Col>
                                </Row>
                                <div>
                                    <div name="control-hooks">
                                        <Row style={{marginLeft:'40px'}}>
                                            <Col md={12} xs={24} sm={24}>
                                                <Row>
                                                    <div style={{width:'100%'}}>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="malumoti">Ma'lumoti</label>
                                                            <Form.Item
                                                                name="name"
                                                                rules={[{ required: true, message:"Ma'lumotingizni tanlang"}]}
                                                            >
                                                                <Select placeholder="Ma'lumoti" style={{width:"90%",marginTop:'10px',height:'35px'}}>
                                                                    <Select.Option value="uzbek">Bakalavr</Select.Option>
                                                                    <Select.Option value="russia">Magistr</Select.Option>
                                                                </Select>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="ism">Muassasa nomi</label>
                                                            <Form.Item
                                                                name="name"
                                                                rules={[{ required: true, message:"Muassasa nomini kiriting"}]}
                                                            >
                                                                <Input placeholder="Muassasa nomi" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="mviloyat">Muassasa joylashgan viloyat</label>
                                                            <Form.Item
                                                                name="muassasa"
                                                                rules={[{ required: true, message:"Muassasa joylashgan viloyatni tanlang"}]}
                                                            >
                                                                <Select placeholder="Muassasa joylashgan viloyat" style={{width:"90%",marginTop:'10px',height:'35px'}}>
                                                                    <Select.Option value="qarshii">Qashqadaryo'</Select.Option>
                                                                    <Select.Option value="surxonn">Boysun</Select.Option>
                                                                </Select>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="mtuman">Muassasa joylashgan tuman</label>
                                                            <Form.Item
                                                                name="muassasatuman"
                                                                rules={[{ required: true, message:"Muassasa joylashgan tumanni tanlang"}]}
                                                            >
                                                                <Select placeholder="Muassasa joylashgan tuman" style={{width:"90%",marginTop:'10px',height:'35px'}}>
                                                                    <Select.Option value="boysunt">Boysun</Select.Option>
                                                                    <Select.Option value="yakkabogt">Yakkabog'</Select.Option>
                                                                </Select>
                                                            </Form.Item>
                                                        </Col>
                                                    </div>
                                                </Row>
                                            </Col>
                                            <Col md={12} xs={24} sm={24}>
                                                <div style={{width:'100%'}}>
                                                    <Col md={24} xs={24} sm={24}>
                                                        <label style={{marginBottom:'50px'}} htmlFor="Jinsi">Muassasa turi</label>
                                                        <Form.Item
                                                            name="muassasaturi"
                                                            rules={[{ required: true, message:"Muassasa turini tanlang"}]}
                                                        >
                                                            <Select placeholder="Muassasa turi" style={{width:"90%",marginTop:'10px',height:'35px'}}>
                                                                <Select.Option value="uzbek">Maktab</Select.Option>
                                                                <Select.Option value="russia">Litsey</Select.Option>
                                                            </Select>
                                                        </Form.Item>
                                                    </Col>
                                                    <Col md={24} xs={24} sm={24}>
                                                        <label style={{marginBottom:'50px'}} htmlFor="ism">Tugatgan yili</label>
                                                        <Form.Item
                                                            name="muassasa"
                                                            rules={[{ required: true, message:"Tugatgan yilingizni kiriting"}]}
                                                        >
                                                            <Input placeholder="2020" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                        </Form.Item>
                                                    </Col>
                                                    <Col md={24} sm={24} xs={24}>
                                                        <Row>
                                                            <Col md={4}>
                                                                <label style={{marginBottom:'50px'}} htmlFor="ism">Diplom</label>
                                                                <Form.Item
                                                                    name="muassasa"
                                                                    rules={[{ required: true, message:"Diplom seriyasini kiriting"}]}
                                                                >
                                                                    <Input placeholder="BC" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col md={20}>
                                                                <label style={{marginBottom:'50px'}} htmlFor="ism">Diplom raqami</label>
                                                                <Form.Item
                                                                    name="muassasa"
                                                                    rules={[{ required: true, message:"Diplom raqamini kiriting"}]}
                                                                >
                                                                    <Input placeholder="1234567" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                                </Form.Item>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md={24} xs={24} sm={24}>
                                                        <label htmlFor="ism">Attestat yoki diplom (pdf)</label>
                                                        <Form.Item
                                                            name="muassasa"
                                                            rules={[{ required: true, message:"Faylni yuklang"}]}
                                                        >
                                                            <Upload name="logo" action="/upload.jpg" listType="picture">
                                                                <Button style={{marginTop:'10px',marginBottom:'5px'}} icon={<UploadOutlined />}>Faylni tanlang</Button>
                                                            </Upload>
                                                        </Form.Item>
                                                    </Col>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                            <Card className="birinchi">
                                <Row >
                                    <Col md={24} xs={24} sm={24}>
                                        <h1 style={{textAlign:'center',fontSize:'30px'}}><strong><u>Qo'shimcha ma'lumotlari</u></strong></h1>
                                    </Col>
                                </Row>
                                <div>
                                    <div>
                                        <Row style={{marginLeft:'40px'}}>
                                            <Col md={22}>
                                                <p style={{fontSize:'25px'}}>Muddatli harbiy xizmat tavsiyanomasiga ega abituriyent</p>
                                            </Col>
                                            <Col md={2}>
                                                <Switch  onChange={this.open}
                                                         checkedChildren={<CheckOutlined />}
                                                         unCheckedChildren={<CloseOutlined />}
                                                />
                                            </Col>
                                        </Row>
                                        <hr style={{width:'92%',marginLeft:'40px',marginBottom:'20px'}}/>
                                    </div>
                                    <div className="harbiy display-none">
                                        <div name="control-hooks">
                                            <Row style={{marginLeft:'40px'}}>
                                                <Col md={12} xs={24} sm={24}>
                                                    <Row>
                                                        <div style={{width:'100%'}}>
                                                            <Col md={24} xs={24} sm={24}>
                                                                <label style={{marginBottom:'50px'}} htmlFor="hujjatseriya">Hujjat seriyasi</label>
                                                                <Form.Item
                                                                    name="muassasa"
                                                                    rules={[{ required: true, message:"Hujjat seriyasini kiriting"}]}
                                                                >
                                                                    <Input placeholder="Hujjat seriyasi" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col md={24} xs={24} sm={24}>
                                                                <label style={{marginBottom:'50px'}} htmlFor="hujjatraqam">Hujjat raqami</label>
                                                                <Form.Item
                                                                    name="muassasa"
                                                                    rules={[{ required: true, message:"Hujjat raqamini kiriting"}]}
                                                                >
                                                                    <Input placeholder="Hujjat raqami" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col md={24} xs={24} sm={24}>
                                                                <label style={{marginBottom:'50px'}} htmlFor="harbiyqism">Nogironlik guruhi</label>
                                                                <Form.Item
                                                                    name="muassasa"
                                                                    rules={[{ required: true, message:"Iltimos to'ldiring"}]}
                                                                >
                                                                    <Input placeholder="Nogironlik guruhi" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                                </Form.Item>
                                                            </Col>
                                                        </div>
                                                    </Row>
                                                </Col>
                                                <Col md={12} xs={24} sm={24}>
                                                    <div style={{width:'100%'}}>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="ism">Hujjat berilgan sana</label>
                                                            <Form.Item
                                                                name="muassasa"
                                                                rules={[{ required: true, message:"Hujjat berilgan sanani tanlang"}]}
                                                            >
                                                                <DatePicker placeholder="Sanani tanlang" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label htmlFor="ism">Fotosurat (3,5 x 4,5)</label>
                                                            <Form.Item
                                                                name="muassasa"
                                                                rules={[{ required: true, message:"Diplom seriyasini kiriting"}]}
                                                            >
                                                                <Upload name="logo" action="/upload.jpg" listType="picture">
                                                                    <Button style={{marginTop:'10px',marginBottom:'5px'}} icon={<UploadOutlined />}>Faylni tanlang</Button>
                                                                </Upload>
                                                                <p>Rasm jpeg, jpg, png formatida bo'lishi va 5mb dan oshmasligi zarur</p>
                                                            </Form.Item>
                                                        </Col>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Row style={{marginLeft:'40px'}}>
                                            <Col md={22}>
                                                <p style={{fontSize:'25px'}}>
                                                    Nogironligi bor shaxslar uchun imtiyoz</p>
                                            </Col>
                                            <Col md={2}>
                                                <Switch  onChange={this.open1}
                                                         checkedChildren={<CheckOutlined />}
                                                         unCheckedChildren={<CloseOutlined />}
                                                />
                                            </Col>
                                        </Row>
                                        <hr style={{width:'92%',marginLeft:'40px',marginBottom:'20px'}}/>
                                    </div>
                                    <div className="harbiy1 display-none">
                                        <div name="control-hooks">
                                            <Row style={{marginLeft:'40px'}}>
                                                <Col md={12} xs={24} sm={24}>
                                                    <Row>
                                                        <div style={{width:'100%'}}>
                                                            <Col md={24} xs={24} sm={24}>
                                                                <label style={{marginBottom:'50px'}} htmlFor="hujjatseriya">Hujjat seriyasi</label>
                                                                <Form.Item rules={[{ required: true }]}>
                                                                    <Input placeholder="Hujjat seriyasi" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col md={24} xs={24} sm={24}>
                                                                <label style={{marginBottom:'50px'}} htmlFor="hujjatraqam">Hujjat raqami</label>
                                                                <Form.Item rules={[{ required: true }]}>
                                                                    <Input placeholder="Hujjat raqami" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col md={24} xs={24} sm={24}>
                                                                <label style={{marginBottom:'50px'}} htmlFor="harbiyqism">Harbiy qism</label>
                                                                <Form.Item rules={[{ required: true }]}>
                                                                    <Input placeholder="Harbiy qism" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                                </Form.Item>
                                                            </Col>
                                                        </div>
                                                    </Row>
                                                </Col>
                                                <Col md={12} xs={24} sm={24}>
                                                    <div style={{width:'100%'}}>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="ism">Hujjat berilgan sana</label>
                                                            <Form.Item rules={[{ required: true }]}>
                                                                <DatePicker placeholder="Sanani tanlang" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label htmlFor="ism">Fotosurat (3,5 x 4,5)</label>
                                                            <Form.Item
                                                                name="upload"
                                                                rules={[{ required: true }]}
                                                            >
                                                                <Upload name="logo" action="/upload.jpg" listType="picture">
                                                                    <Button style={{marginTop:'10px',marginBottom:'5px'}} icon={<UploadOutlined />}>Faylni tanlang</Button>
                                                                </Upload>
                                                                <p>Rasm jpeg, jpg, png formatida bo'lishi va 5mb dan oshmasligi zarur</p>
                                                            </Form.Item>
                                                        </Col>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Row style={{marginLeft:'40px'}}>
                                            <Col md={22}>
                                                <p style={{fontSize:'25px'}}>
                                                    Chet el sertifikati</p>
                                            </Col>
                                            <Col md={2}>
                                                <Switch  onChange={this.open2}
                                                         checkedChildren={<CheckOutlined />}
                                                         unCheckedChildren={<CloseOutlined />}
                                                />
                                            </Col>
                                        </Row>
                                        <hr style={{width:'92%',marginLeft:'40px',marginBottom:'20px'}}/>
                                    </div>
                                    <div className="english display-none">
                                        <div name="control-hooks">
                                            <Row style={{marginLeft:'40px'}}>
                                                <Col md={12} xs={24} sm={24}>
                                                    <Row>
                                                        <div style={{width:'100%'}}>
                                                            <Col md={24} xs={24} sm={24}>
                                                                <label style={{marginBottom:'50px'}} htmlFor="Jinsi">Chet tili</label>
                                                                <Form.Item rules={[{ required: true }]}>
                                                                    <Select placeholder="Chet tili" style={{width:"90%",marginTop:'10px',height:'35px'}}>
                                                                        <Select.Option value="english">English</Select.Option>
                                                                        <Select.Option value="russia">Russia</Select.Option>
                                                                    </Select>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col md={24} xs={24} sm={24}>
                                                                <label style={{marginBottom:'50px'}} htmlFor="Jinsi">Sertifikat turi</label>
                                                                <Form.Item rules={[{ required: true }]}>
                                                                    <Select placeholder="Muassasa turi" style={{width:"90%",marginTop:'10px',height:'35px'}}>
                                                                        <Select.Option value="ielts">IELTS</Select.Option>
                                                                        <Select.Option value="toefl">TOEFL</Select.Option>
                                                                    </Select>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col md={24} xs={24} sm={24}>
                                                                <label style={{marginBottom:'50px'}} htmlFor="Jinsi">Daraja</label>
                                                                <Form.Item rules={[{ required: true }]}>
                                                                    <Select placeholder="Daraja" style={{width:"90%",marginTop:'10px',height:'35px'}}>
                                                                        <Select.Option value="daraja8">8</Select.Option>
                                                                        <Select.Option value="daraja9">9</Select.Option>
                                                                    </Select>
                                                                </Form.Item>
                                                            </Col>
                                                        </div>
                                                    </Row>
                                                </Col>
                                                <Col md={12} xs={24} sm={24}>
                                                    <div style={{width:'100%'}}>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="hujjatseriya">Hujjat seriyasi</label>
                                                            <Form.Item rules={[{ required: true }]}>
                                                                <Input placeholder="Hujjat seriyasi" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="hujjatseriya">Hujjat raqami</label>
                                                            <Form.Item rules={[{ required: true }]}>
                                                                <Input placeholder="Hujjat seriyasi" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="hujjatberilgansana">Hujjat berilgan sana</label>
                                                            <Form.Item rules={[{ required: true }]}>
                                                                <DatePicker placeholder="Sanani tanlang" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label htmlFor="ism">Hujjat rasmi</label>
                                                            <Form.Item
                                                                name="upload"
                                                                rules={[{ required: true }]}
                                                            >
                                                                <Upload name="logo" action="/upload.jpg" listType="picture">
                                                                    <Button style={{marginTop:'10px',marginBottom:'5px'}} icon={<UploadOutlined />}>Faylni tanlang</Button>
                                                                </Upload>
                                                                <p>Rasm jpeg, jpg, png formatida bo'lishi va 5mb dan oshmasligi zarur</p>
                                                            </Form.Item>
                                                        </Col>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <Card style={{marginBottom:'30px'}} className="birinchi">
                                <Row>
                                    <Col md={24} xs={24} sm={24}>
                                        <h1 style={{textAlign:'center',fontSize:'30px'}}><strong><u>Bog'lanish uchun ma'lumotlar</u></strong></h1>
                                    </Col>
                                </Row>
                                <div>
                                    <div name="control-hooks" >
                                        <Row style={{marginLeft:'40px'}}>
                                            <Col md={12} xs={24} sm={24}>
                                                <Row>
                                                    <div style={{width:'100%'}}>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="ism">Uyali aloqa raqami</label>
                                                            <Form.Item rules={[{ required: true }]}>
                                                                <Input placeholder="998908666051" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                            </Form.Item>
                                                        </Col>
                                                        <Col md={24} xs={24} sm={24}>
                                                            <label style={{marginBottom:'50px'}} htmlFor="ism">Email</label>
                                                            <Form.Item
                                                                name="email"
                                                                rules={[
                                                                    {
                                                                        type: 'email',
                                                                        message: 'The input is not valid E-mail!',
                                                                    },
                                                                    {
                                                                        required: true,
                                                                        message: 'Please input your E-mail!',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input placeholder="user.@example.com" style={{width:"90%",marginTop:'10px',height:'35px'}} />
                                                            </Form.Item>
                                                        </Col>
                                                    </div>
                                                </Row>
                                            </Col>
                                            <Col md={12} xs={24} sm={24}>
                                                <div style={{width:'100%'}}>
                                                    <Col md={24} xs={24} sm={24}>
                                                        <label style={{marginBottom:'50px'}} htmlFor="ism">Qo'shimcha telefon raqami</label>
                                                        <Form.Item rules={[{ required: true }]}>
                                                            <Input placeholder="+998908666051" style={{width:"90%",marginTop:'10px',height:'35px'}}/>
                                                        </Form.Item>
                                                    </Col>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
             </div>
         </section>
        );
    }
}
export default Qabulxona;