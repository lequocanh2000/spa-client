import '../assets/css/Staff/base.css'
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Axios from 'axios'

function Login(){
    const navtive = useNavigate()
    // const history = useHistory()
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    
    function handleLogin(){

        if(email==='admin'&&password==='123456'){
            navtive('/Admin/home',{ replace: true })
            console.log('Admin')
        }else if(email!=='admin'){
            const info = {
                email,
                password
            }
            Axios.post(`http://localhost:3001/loginStaff`,info).then((response)=>{
                console.log(response.data)
                if( response.data.length !== 0){
                    const staff = response.data[0]
                    console.log(staff.MaNV)
                    console.log(staff.Email)
                    console.log(staff.MatKhau)
                    navtive(`/Staff/infoStaff/${staff.MaNV}`,{ replace: true })
                }
                else{
                    console.log('Thông tin đăng nhập không chính xác')
                    window.confirm(`Thông tin đăng nhập không chính xác ${email} ${password}`)
                }
            })
        }
    }
    
    return (
        <div className="modal js-modal-login open" >
            <div className="modal__dialog js-modal-dialog">
                <div className="modal__content">
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                ĐĂNG NHẬP
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <form action="#" className="modal__form js-modal-form" method="get">
                            <div className="gird">
                                <div className="row mo-gutters">
                                    <div className="col pc-12 mb-12">
                                        <label htmlFor="EmailLogin" className="modal__label">Email</label>
                                        <input type="text" className="modal__control" id="EmailLogin" name="EmailLogin" placeholder="Nhập email của bạn" required 
                                            value={email}
                                            onChange={(e)=>{
                                                setemail(e.target.value)
                                                console.log('set email')
                                            }}/>
                                        <label htmlFor="Password" className="modal__label">Mật khẩu</label>
                                        <input type="text" className="modal__control" id="Password" name="Password" placeholder="Mật khẩu" required
                                            value={password} 
                                            onChange={(e)=>{
                                                setpassword(e.target.value)
                                                console.log('set password')
                                            }}/>                       
                                    </div>
                                </div>
                            </div>           
                        </form>                     
                    </div>
                    <div className="modal__footer">
                        <button className="btn-admin modal__btn js-btn-submit" onClick={handleLogin}>Đăng nhập</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login