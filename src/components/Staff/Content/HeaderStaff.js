import '../../../assets/css/Staff/HeaderStaff.css'
import logo from '../../../assets/img/logo.PNG'
import admin from '../../../assets/img/user/admin.PNG'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Axios from 'axios'
function HeaderStaff(){
    const { maNV } = useParams()
    // console.log( maNV )
    const [tenNV,settenNV] = useState('')
    const [gioitinhNV,setgioitinhNV] = useState('')
    const [namsinhNV,setnamsinhNV] = useState('')
    const [emailNV,setemailNV] = useState('')
    const [sdtNV,setsdtNV] = useState('')
    const [matkhauNV,setmatkhauNV] = useState('')
    const [diachiNV,setdiachiNV] = useState('')
    const [hinhanhNV,sethinhanhNV] = useState('')

    useEffect(()=>{
        Axios.get(`http://localhost:3001/getStaff/${maNV}`).then((pesponse)=>{
            console.log(pesponse)
            const staff = pesponse.data[0]
            settenNV(staff.TenNV)
            setgioitinhNV(staff.GioiTinh)
            setnamsinhNV(staff.NamSinh)
            setemailNV(staff.Email)
            setsdtNV(staff.SDT)
            setmatkhauNV(staff.MatKhau)
            setdiachiNV(staff.DiaChiNV)
            sethinhanhNV(staff.HinhAnh)
        })
    },[])

    return (
        <header className="header-staff">
            <div className="header-staff__heading">
                <div className="grid wide">
                    <div className="header-staff__heading-wrapper">
                        <div className="header-staff__logo">
                            <img src={logo} alt="logo" className="header-staff__logo-img"/>
                        </div>
                        <div className="header-staff__login">
                            <div className="header-staff__login-name">{tenNV}</div>
                            <div className="header-staff__login-avatar">
                                <img src={hinhanhNV} alt="admin" className="header-staff__login-img"/>
                            </div>
                            <Link to='/Login' className='btn-admin btn' style={{textDecorationLine: "none",marginLeft: 14}}>Đăng xuất</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-staff__body js-header-staff-body">
                <div className="grid wide">
                    <div className="header-staff__body-wrapper">
                        
                        <div className="header-staff__body-btn">
                            <button className="header-staff__body-btn-menu js-header-staff-body-btn-menu">
                                <i className="header-staff__body-btn-menu-icon ti-menu"></i>
                            </button>
                        </div>

                        <ul className="header-staff__nav">
                            <li className="header-staff__nav-item">
                                <Link to={`/Staff/infoStaff/${maNV}`} className="header-staff__nav-link">Thông tin cá nhân</Link>
                            </li>
                            <li className="header-staff__nav-item">
                                <Link to={`/Staff/registerService/${maNV}`} className="header-staff__nav-link">Phiếu đăng ký</Link>
                            </li>
                            <li className="header-staff__nav-item">
                                <Link to={`/Staff/bills/${maNV}`} className="header-staff__nav-link">Hóa đơn</Link>
                            </li>
                            <li className="header-staff__nav-item">
                                <Link to={`/Staff/takeCareOf/${maNV}`} className="header-staff__nav-link">Chăm sóc</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderStaff