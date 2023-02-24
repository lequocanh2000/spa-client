import '../../../assets/css/Spa/Contact.css'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Axios from 'axios'
function Contact(){
    const [tenKH,settenKH] = useState('')
    const [sdtKH,setsdtKH] = useState('')
    const [emailKH,setemailKH] = useState('')
    const [ghiChu,setghiChu] = useState('')


    const handleSubmit = ()=>{
        console.log(tenKH)
        console.log(sdtKH)
        console.log(emailKH)
        console.log(ghiChu)
        if( tenKH !=='' && sdtKH !==''){
            //Lấy số cuối của MaKH 
            Axios.get('http://localhost:3001/getFinalMaKH').then((response)=>{
                let socuoi 
                console.log(typeof response.data.length,response.data.length)
                if(response.data.length === 0 ){
                    socuoi = 1
                }else{
                    socuoi = (response.data[0].SoCuoiMaKH) + 1
                }
                const maKH = 'KH0' + socuoi
                console.log(maKH)
                return maKH
            }).then((maKH)=>{
                const customer = {
                    maKH,
                    tenKH,
                    emailKH,
                    sdtKH,
                    ghiChu,
                }
                console.log(customer)
                Axios.post('http://localhost:3001/addCustomerNeedHelp',customer).then((response)=>{
                    console.log(response.data)
                    if(response.data==='Success'){
                        window.confirm('Gửi thành công!!!\nVui lòng chờ ít phút để nhân viên chúng tôi liên hệ cho bạn')
                        settenKH('')
                        setsdtKH('')
                        setemailKH('')
                        setghiChu('')
                    }
                })
            })  
        }else{
            window.confirm('Vui lòng điền TÊN và SĐT để nhân viên liên hệ')
        }
        
    }

    return (
        <div className="section" id="ContactHelp">
            <h3 className="section__heading">Spa QA</h3>
            <h1 className="section__title">Liên hệ tư vấn - hỗ trợ</h1>

            <div className="contact">
                <form className="contact__form" action="#">
                    <div className="grid">
                        <div className="row">
                            <div className="col pc-12 mb-12">
                                <label htmlFor="name" className="contact__form-label">Họ tên*</label>
                                <input type="text" className="contact__form-control" name="name" id="name" placeholder="Họ tên của bạn"
                                    value={tenKH}
                                    onChange={(e)=>{
                                        settenKH(e.target.value)
                                        console.log('set tenKH')
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col pc-12 mb-12">
                                <label htmlFor="phone" className="contact__form-label">Số điện thoại*</label>
                                <input type="text" className="contact__form-control" name="phone" id="phone" placeholder="Số điện thoại của bạn"
                                    value={sdtKH}
                                    onChange={(e)=>{
                                        setsdtKH(e.target.value)
                                        console.log('set sdtKH')
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col pc-12 mb-12">
                                <label htmlFor="EmailTuVan" className="contact__form-label">Email (nếu có)</label>
                                <input type="text" className="contact__form-control" name="EmailTuVan" id="EmailTuVan" placeholder="Email của bạn"
                                    value={emailKH}
                                    onChange={(e)=>{
                                        setemailKH(e.target.value)
                                        console.log('set emailKH')
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col pc-12 mb-12">
                                <label htmlFor="ContentTuVan" className="contact__form-label">Nội dung cần tư vấn</label>
                                <textarea type="text" className="contact__form-control" name="ContentTuVan" id="ContentTuVan" rows={3} placeholder="Nhập nội dung bạn cần tư vấn"
                                    value={ghiChu}
                                    onChange={(e)=>{
                                        setghiChu(e.target.value)
                                        console.log('set ghiChu')
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="contact__btn">
                    <button className="btn contact__btn-form" style={{witdh: 120}} onClick={handleSubmit}>GỬI</button>
                </div>
            </div>
        </div>        
    )
}

export default Contact