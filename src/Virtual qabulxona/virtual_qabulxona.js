import React from 'react';
import {Row,Col,  Form,
    Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch, Upload,Checkbox} from 'antd'
import {UploadOutlined} from "@ant-design/icons";
import {Chart} from "react-google-charts";
import "./virtual_qabulxona.css"
import {connect} from 'react-redux';
import {uzLanguage} from "../Redux/Actions/Uzlanguage";
import {enLanguage} from "../Redux/Actions/EnLanguage";
import {ruLanguage} from "../Redux/Actions/RuLanguage";
import {GetLanguage,GetEnLanguage} from "../Utilitil";
class Virtual_qabulxona extends React.Component{
    render() {
        const {uzLang,enLang}=this.props;
        return (
           <section>
<div className="vr-img">
    <div className="virtual-container">
        <div className="vir-header">
            <div style={{paddingTop:'20px',width:'90%'}}>
                <Row>
                    <Col md={4} lg={4} sm={15} xs={15}>
                        <img style={{width:'70%',marginLeft:'40px',marginBottom:'50px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmJAiYOQOddY-K1JCy0hGWqnElHW6bGCOCw&usqp=CAU" alt="Xatolik"/>
                    </Col>
                    <Col md={20} lg={20} sm={24} xs={24}>
                        <h3 className="nomi" style={{fontSize:'24px',fontFamily:'inherit',textAlign:'center',marginTop:'30px'}}>
                            {uzLang?"TOSHKENT KIMYO-TEXNOLOGIYA INSTITUTI REKTORI USMONOV BOTIR SHUKURILLAEVIVICHNING VIRTUAL QABULXONASI":!!enLang?"VIRTUAL RECEPTION OF TASHKENT INSTITUTE OF CHEMICAL TECHNOLOGY USMONOV BOTIR SHUKURILLAEVICH":"ВИРТУАЛЬНАЯ ПРИЕМ БОТИРА УСМАНОВА БОТИРА ШУКУРИЛЛАЕВИЧА, ректора ТАШКЕНТСКОГО ИНСТИТУТА ХИМИЧЕСКИХ ТЕХНОЛОГИЙ"} </h3>
                    </Col>
                </Row>
            </div>
        </div>
        <div className="form-page">
            <Row>
                <Col md={24} lg={12} sm={24} xs={24}>
                    <div style={{width:'90%',marginLeft:'50px',overflow:'hidden'}}>
                        <div style={{marginLeft:'30px',marginTop:'30px'}}>
                            <p style={{fontSize:'20px',color:'#338fd0'}}> {uzLang?"Murojatni yuboring":!!enLang?"Send the application":"Отправить заявку"}</p>
                            <hr style={{width:"90%"}}/>
                        </div>
                        <div style={{marginTop:'50px'}}>
                            <Form  layout={"vertical"}>
                                <Row>
                                    <Col md={7} sm={24} xs={24}>
                                        <label style={{fontSize:'18px',marginRight:'30px'}} htmlFor="fish"><strong>{uzLang?"F.I.SH":!!enLang?"F.I.SH":"Ф.И.Ш"}</strong></label>
                                    </Col>
                                    <Col md={17} sm={24} xs={24}>
                                        <Form.Item
                                            name="name"
                                            rules={[{ required: true, message:uzLang?"Iltimos to'ldiring":!!enLang?"Please fill it out":"Пожалуйста, заполните это"}]}
                                        >
                                            <Input style={{width:'90%',height:'35px',borderRadius:'6px'}}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={7} sm={24} xs={24} >
                                        <label style={{fontSize:'18px',marginRight:'30px'}} htmlFor="viloyat"><strong>{uzLang?"Viloyat":!!enLang?"Region":"Областъ"}</strong></label>
                                    </Col>
                                    <Col md={17} sm={24} xs={24} >
                                        <Form.Item
                                            name={uzLang?"Viloyat":!!enLang?"Region":"Областъ"}
                                            rules={[{ required: true, message:uzLang?"Viloyatingizni kiriting":!!enLang?"Enter your region":"Введите ваш регион"}]}
                                        >
                                            <Select defaultValue={uzLang?"Viloyatingizni tanlang":!!enLang?"Select your region":"\n" +
                                                "Выберите свой регион"} style={{width:'90%',height:'35px',borderRadius:'6px'}}>
                                                <Select.Option   value="viloyat1">{uzLang?"Toshkent":!!enLang?"Tashkent":"Ташкент"}</Select.Option>
                                                <Select.Option   value="viloyat2">{uzLang?"Andijon":!!enLang?"Andijon":"Андижан"}</Select.Option>
                                                <Select.Option   value="viloyat3">{uzLang?"Farg'ona":!!enLang?"Fergana":"Фергана"}</Select.Option>
                                                <Select.Option   value="viloyat4">{uzLang?"Namangan":!!enLang?"Namanagan":"Наманган"}</Select.Option>
                                                <Select.Option   value="viloyat5">{uzLang?"Surxondaryo":!!enLang?"Surxondaryo":"Сурхондарьинская область"}</Select.Option>
                                                <Select.Option   value="viloyat6">{uzLang?"Qashqadaryo":!!enLang?"Kashkadarya":"Кашкадарья"}</Select.Option>
                                                <Select.Option   value="viloyat7">{uzLang?"Xorazm":!!enLang?"Khorezm":"Хорезм"}</Select.Option>
                                                <Select.Option   value="viloyat8">{uzLang?"Buxoro":!!enLang?"Bukhara":"Бухоро"}</Select.Option>
                                                <Select.Option   value="viloyat9">{uzLang?"Sirdaryo":!!enLang?"Sirdaryo":"Сырдарья"}</Select.Option>
                                                <Select.Option   value="viloyat10">{uzLang?"Navoiy":!!enLang?"Navoi":"Навои"}</Select.Option>
                                                <Select.Option   value="viloyat11">{uzLang?"Samarqand":!!enLang?"Samarkand":"Самарканд"}</Select.Option>
                                                <Select.Option   value="viloyat12">{uzLang?"Toshkent viloyati":!!enLang?"Tashkent region":"Ташкентская область"}</Select.Option>
                                                <Select.Option   value="viloyat13">{uzLang?"Qoraqalpog'iston Respublikasi":!!enLang?"The Republic of Karakalpakstan":"Республика Каракалпакстан"}</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={7} sm={24} xs={24} >
                                        <label style={{fontSize:'18px',marginRight:'30px'}} htmlFor="tuman"><strong>{uzLang?"Tuman (shahar)":!!enLang?"District (city)":"Район (город)"}</strong></label>
                                    </Col>
                                    <Col md={17} sm={24} xs={24} >
                                        <Form.Item
                                            name="tuman"
                                            rules={[{ required: true, message:uzLang?"Tuman (shahar)":!!enLang?"District (city)":"Район (город)"}]}
                                        >
                                            <Select defaultValue="Tumaningizni tanlang" style={{width:'90%',height:'35px',borderRadius:'6px'}}>
                                                <Select.Option   value="viloyat">{uzLang?"Tumanlar":!!enLang?"region":"районы"}</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={7} sm={24} xs={24} >
                                        <label style={{fontSize:'18px',marginRight:'30px'}} htmlFor="manzil"><strong>Manzil*</strong></label>
                                    </Col>
                                    <Col md={17} sm={24} xs={24} >
                                        <Form.Item
                                            name="manzil"
                                            rules={[{ required: true, message: "Manzilingizni kiriting" }]}
                                        >
                                            <Input style={{width:'90%',height:'35px',borderRadius:'6px'}}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={7} sm={24} xs={24} >
                                        <label style={{fontSize:'18px',marginRight:'30px'}} htmlFor="pochta"><strong>Elektron pochta*</strong></label>
                                    </Col>
                                    <Col md={17} sm={24} xs={24} >
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    type: 'email',
                                                    message: "Kirish haqiqiy emas Emailni to'g'ri kiriting!",
                                                },
                                                {
                                                    required: true,
                                                    message: "Elektron pochtani kiriting",
                                                },
                                            ]}
                                        >
                                            <Input style={{width:'90%',height:'35px',borderRadius:'6px'}} placeholder="@gmail.com"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={7} sm={24} xs={24} >
                                        <label style={{fontSize:'18px',marginRight:'30px'}} htmlFor="phone"><strong>Telefon raqam*</strong></label>
                                    </Col>
                                    <Col md={17} sm={24} xs={24} >
                                        <Form.Item
                                            name="number"
                                            type="number"
                                            rules={[{ required: true, message: 'Telefon raqamingizni kiriting' }]}
                                        >
                                            <Input style={{width:'90%',height:'35px',borderRadius:'6px'}} placeholder="+998 90 866 60 51"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={7} sm={24} xs={24} >
                                        <label style={{fontSize:'18px',marginRight:'30px'}} htmlFor="jinsi"><strong>Jinsi*</strong></label>
                                    </Col>
                                    <Col md={17} sm={24} xs={24} >
                                        <Form.Item name="radio-group"
                                                   rules={[{ required: true, message: 'Shaxsingizni tanlang' }]}
                                        >
                                            <Radio.Group>
                                                <Radio value="erkak">Erkak</Radio>
                                                <Radio value="ayol">Ayol</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={7} sm={24} xs={24} style={{marginBottom:'30px'}} >
                                        <label style={{fontSize:'18px',marginRight:'30px'}} htmlFor="year"><strong>Tug'ilgan yilingiz*</strong></label>
                                    </Col>
                                    <Col md={17} sm={24} xs={24} >
                                        <Form.Item
                                            type="number"
                                            name="year"
                                            rules={[{ required: true, message: "Tug'ilgan yilingizni kiriting" }]}
                                        >
                                            <Input style={{width:'90%',height:'35px',borderRadius:'6px'}} placeholder="sana-oy-yil" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={7} sm={24} xs={24} >
                                        <label style={{fontSize:'18px',marginRight:'30px'}} htmlFor="murojat"><strong>Murojaat turi*</strong></label>
                                    </Col>
                                    <Col md={17} sm={24} xs={24} >
                                        <Form.Item name="radio-group"
                                                   rules={[{ required: true, message: "Murojat turini tanlang" }]}
                                        >
                                            <Radio.Group>
                                                <Radio value="ariza">Ariza</Radio>
                                                <Radio value="shikoyat">Shikoyat</Radio>
                                                <Radio value="taklif">Taklif</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={7} sm={24} xs={24} style={{marginBottom:'30px'}} >
                                        <label style={{fontSize:'18px',marginRight:'30px'}} htmlFor="murojattext"><strong>Murojat qisqacha <br/> mazmuni*</strong></label>
                                    </Col>
                                    <Col md={17} sm={24} xs={24} >
                                        <Form.Item
                                            name="murojat"
                                            rules={[{ required: true, message: "Iltimos to'ldiring" }]}
                                        >
                                            <Input style={{width:'90%',height:'35px',borderRadius:'6px'}}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={7} sm={24} xs={24} >
                                        <label style={{fontSize:'18px',marginRight:'30px',marginTop:'-80'}} htmlFor="textmurojat"><strong>Murojat matni*</strong></label>
                                    </Col>
                                    <Col md={17} sm={24} xs={24} >
                                        <Form.Item
                                            name="textarea"
                                            type="textarea"
                                            rules={[{ required: true, message: "Iltimos to'ldiring" }]}
                                        >

                                            <Input.TextArea style={{width:'90%',height:'80px',borderRadius:'6px'}}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={7} sm={24} xs={24} >
                                        <label style={{fontSize:'18px',marginRight:'30px',marginTop:'-80'}} htmlFor="fayl"><strong>Faylni tanlang*</strong></label>
                                    </Col>
                                    <Col md={17} sm={24} xs={24} >
                                        <Form.Item
                                            name="upload"
                                            valuePropName="fileList"
                                        >
                                            <Upload name="logo" action="/upload.do" listType="picture">
                                                <Button icon={<UploadOutlined />}>Faylni tanlang</Button>
                                            </Upload>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={7} sm={24} xs={24} ></Col>
                                    <Col md={17} sm={24} xs={24} >
                                        <Form.Item className={{marginLeft:'100px'}} name="remember" valuePropName="checked">
                                            <Checkbox style={{fontSize:'18px'}}>Barcha shartlar bilan tanishdim</Checkbox>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={7} sm={24} xs={24} >
                                        <label style={{fontSize:'18px',marginRight:'30px',float:'left'}} htmlFor="parol"><strong>Xavfsizlik kodini <br/> kiriting*</strong></label>
                                    </Col>
                                    <Col md={17} sm={24} xs={24} >
                                        <Form.Item>
                                            <img src="http://rector.tcti.uz/home/default/captcha?v=604536a71e6a3" alt="Xatolik"/>
                                            <Input style={{width:'90%',height:'35px',borderRadius:'6px'}}/>
                                            <p style={{width:'90%',fontSize:'15px',marginTop:'20px'}}>Xavfsizlik kodini o'zgartirish uchun rasmni cherting</p>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={8} sm={24} xs={24} ></Col>
                                    <Col md={16} sm={24} xs={24} >
                                        <Form.Item >
                                            <Button style={{width:'300px',height:'40px'}} type="primary" htmlType="submit">
                                                Yuborish
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>

                            </Form>
                        </div>
                    </div>
                </Col>
                <Col md={24} lg={12} sm={24} xs={24}>
                    <div style={{marginLeft:'30px',marginTop:'30px'}}>
                        <p style={{fontSize:'20px',color:'#338FD0'}}>Murojatni natijasini tekshirish</p>
                        <hr style={{width:"90%"}}/>
                    </div>
                    <div style={{marginLeft:'30px',marginTop:'30px'}}>
                        <p style={{fontSize:'20px',color:'black',textAlign:'center'}}>Murojatni maqomini tekshirib ko'ring</p>
                        <div style={{textAlign:'center',marginBottom:"20px"}}> <Button style={{width:'150px',}} type="primary">Murojat natijasi</Button></div>
                        <hr style={{width:"90%"}}/>
                    </div>
                    <div style={{marginLeft:'30px',marginTop:'30px'}}>
                        <p style={{fontSize:'25px',color:'#338FD0'}}>Ommaviy oferta</p>
                        <p style={{width:'90%',fontSize:'16px'}}>
                            Ҳурматли фойдаланувчи! <br/>
                            Сизга Ўзбекистон Республикаси Олий ва ўрта махсус таълим вазирлиги ТОШКEНТ КИМЁ-ТEХНОЛОГИЯ ИНСТИТУТИ РЕКТОРИ Усмонов Ботир ШукуриллаевичНИНГ ВИРТУАЛ ҚАБУЛХОНАСИ бевосита электрон тарзда мурожаатларни юбориш имконияти тақдим этилмоқда. Шу билан бирга,   Сизнинг юбораётган мурожаатингиз расмий мақомга эга эканлигини ҳам эслатиб қўймоқчимиз. <br/>
                            Шу сабабли, Сиздан қуйидагиларни унутмаслигингизни сўраймиз: <br/>
                            1. Жисмоний шахс сифатида мурожаат йўлласангиз фамилиянгиз (исмингиз, отангизнинг исми), яшаш жойингиз тўғрисидаги маълумотлар кўрсатилган ва мурожаатингиз моҳияти баён этилган бўлиши шарт. Юридик шахс сифатида мурожаат йўлласангиз юридик шахснинг тўлиқ номи, унинг жойлашган жойи (почта манзили) тўғрисидаги маълумотлар кўрсатилган ва мурожаатнинг моҳияти баён этилиши талаб этилади. <br/>
                            2. Алоҳида эътибор беринг! Туҳмат, ҳақорат сўзлар ишлатилган ва ёлғон хабар берувчи мурожаатларни тақдим этиш мумкин эмас. <br/>
                            3. Шунингдек, қуйидаги ҳолатларда мурожаатларингиз рад этилиши мумкинлигини эслатиб ўтмоқчимиз: <br/>
                            • одобсизлик мазмунидаги мурожаатлар (уятсиз ёхуд ҳақоратли иборалар, таҳдидлар, мантиқ ва маъноси бўлмаган таклифлар ва шунга ўхшаш мурожаатлар);
                            • мурожаат матнида тушунарсиз қисқартиришлар ёки реклама материаллари мавжуд бўлган, таркибида аниқ аризалар, шикоятлар ёки таклифлар бўлмаган мурожаатлар <br/>
                            4. Шунингдек, фойдаланувчининг бир неча бор битта масала бўйича жавоб берилган мурожаатини қайта юборилганда агар унда янги важлар ёки ҳолатлар келтирилмаган бўлса, кўриб чиқилмайди. <br/>
                            Мазкур шартларнинг барчаси Ўзбекистон Республикасининг амалдаги қонунчилигидан келиб чиққан ҳолда белгиланган.
                        </p>
                    </div>
                    <div style={{marginLeft:'30px',marginTop:'30px'}}>
                        <p style={{fontSize:'30px',color:'#338FD0'}}>Murojatlar statistikasi</p>
                        {/*<div style={{border:'1px solid black',width:'90%'}}></div>*/}
                        <hr style={{width:"90%"}}/>
                    </div>
                    <Chart
                        width={'700px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        labels={[
                            'Yellow',
                            'red',
                            'grey',
                        ]}
                        data={[
                            ['Task', 'Hours per '],
                            ["Ko'rib chiqilgan", 98],
                            ["Ko'rib chiqilayotganlar", 2],
                            ['Rad etilganlar',0],
                        ]}
                        options={{
                            is3D: true,
                        }}
                        rootProps={{ 'data-testid': '2' }}
                    />
                </Col>
            </Row>
        </div>
    </div>
    <div style={{width:'100%',height:'70px',backgroundColor:"white",marginTop:'70px',}}>
        <div className="virtual-container">
            <Row>
                <Col md={12} xs={9} lg={18}></Col>
                <Col md={12} xs={13} lg={6}><p style={{fontSize:'18px',lineHeight:"60px"}}>Axborot tehnologiyalari markazi 2016</p></Col>
            </Row>
        </div>
    </div>
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
    Virtual_qabulxona
)