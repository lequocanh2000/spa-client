import { useParams } from 'react-router-dom'
import admin from '../../../assets/img/user/admin.PNG'
import {useState, useEffect} from 'react'
import Axios from 'axios'
function InfoStaff(){
    const { maNV } = useParams()
    console.log( maNV )
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
        <div className="grid wide">
            <div className="content__card">
                <div className="content__card-title">
                    <h3 className="content__card-text">
                        Thông tin cá nhân
                    </h3>
                </div>
                <div className="content__card-body">
                    <div className="content__card-body-avatar">
                        <img src={hinhanhNV} alt="staff" className="content__card-body-img"/>
                        <p className="content__card-body-img-size">Hình 3x4</p>
                    </div>
                    
                    <div className="content__card-body-info">
                        <div className="grid">
                            <div className="row no-gutters">
                                <div className="col pc-12 mb-12">
                                    <div className="content__card-body-info-item">
                                        <label className="content__card-body-info-label">Mã nhân viên:</label>
                                        <p className="content__card-body-info-text">{maNV}</p>
                                    </div>
                                    <div className="content__card-body-info-item">                                        
                                        <label className="content__card-body-info-label">Tên nhân viên:</label>
                                        <p className="content__card-body-info-text">{tenNV}</p>
                                    </div>
                                    <div className="content__card-body-info-item">
                                        <label className="content__card-body-info-label">Gioi tính:</label>
                                        <p className="content__card-body-info-text">{gioitinhNV}</p>
                                    </div>
                                    <div className="content__card-body-info-item">
                                        <label className="content__card-body-info-label">Năm sinh:</label>
                                        <p className="content__card-body-info-text">{namsinhNV}</p>
                                    </div>
                                    <div className="content__card-body-info-item">
                                        <label className="content__card-body-info-label">SĐT:</label>
                                        <p className="content__card-body-info-text">{sdtNV}</p>
                                    </div>
                                    <div className="content__card-body-info-item">
                                        <label className="content__card-body-info-label">Email:</label>
                                        <p className="content__card-body-info-text">{emailNV}</p>
                                    </div>
                                    <div className="content__card-body-info-item">
                                        <label className="content__card-body-info-label">Địa chỉ:</label>
                                        <p className="content__card-body-info-text">{diachiNV}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoStaff