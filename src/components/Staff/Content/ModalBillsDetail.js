import {useState, useEffect} from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
function ModalBillsDetail({maHD, maPhieu}){
    const { maNV } = useParams()

    const [maKH,setmaKH] = useState('')
    const [tenKH,settenKH] = useState('')
    const [gioitinhKH,setgioitinhKH] = useState('')
    const [namsinhKH,setnamsinhKH] = useState('')
    const [emailKH,setemailKH] = useState('')
    const [sdtKH,setsdtKH] = useState('')
    const [diachiKH,setdiachiKH] = useState('')

    const [tenNV,settenNV] = useState('')
    const [ngayLapHD,setngayLapHD] = useState('')
    const [dichvuSD,setdichvuSD] = useState([])
    const [tongTien,settongTien] = useState('')

    useEffect(()=>{
        //Lấy thông tin hóa đơn có MaHD = maHD
        Axios.get(`http://localhost:3001/getBill/${maHD}`).then((response)=>{
            console.log(response)
            const bill = response.data[0]
            settenNV(bill.TenNV)
            setmaKH(bill.MaKH)
            settenKH(bill.TenKH)
            setgioitinhKH(bill.GioiTinh)
            setnamsinhKH(bill.NamSinh)
            setemailKH(bill.Email)
            setsdtKH(bill.SDT)
            setdiachiKH(bill.DiaChiKH)
            setngayLapHD(bill.NgayLapHD)
        })

        //Lấy các dịch vụ có MaPhieu = maPhieuEdit trong bảng PhieuDangKy_DichVu
        Axios.get(`http://localhost:3001/getRegistration_Services/${maPhieu}`).then((response)=>{
            console.log('Các dịch vụ có trong phiếu')
            console.log(response)
            setdichvuSD(response.data)
        })

        //Tổng tiền của hóa đơn được tính bằng tổng các dịch vụ 
        //trong phiếu có MaPhieu = maPhieu
        Axios.get(`http://localhost:3001/getTotalMoneyBill/${maPhieu}`).then((response)=>{
            console.log('Các dịch vụ có trong phiếu')
            console.log(response)
            const tongtien = response.data[0]
            settongTien(tongtien.TongTien)
        })


        console.log('useEffect của BillDetail')
    },[maHD])















    //Click btn Cancel
    function HandleModalCancel(e){
        // const btnCancelModal = document.querySelector('.js-btn-cancel')
        const modalDetail = document.querySelector('.js-modal-detail')
        // console.log('Click button cancel modal detail')
        modalDetail.classList.remove('open')
        e.stopPropagation()
    }

    //Click modal
    function HandleCloseModal(e){
        const modalDetail = document.querySelector('.js-modal-detail')
        // console.log('Close modal detail')
        modalDetail.classList.remove('open')
    }

    //Click modal dialog
    function HandleModalDialog(e){
        // const modalDialogDetail = document.querySelector('.js-modal-dialog')
        // console.log('Click modal dialog')
        e.stopPropagation()

    }

    return (
        <div className="modal js-modal-detail" onClick={HandleCloseModal}>
            <div className="modal__dialog js-modal-dialog max-width800" onClick={HandleModalDialog}>
                <div className="modal__content">
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                Chi tiết hóa đơn
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">

                        <div className="gird">
                            <div className="row mo-gutters">
                                <div className="col pc-6 mb-12">
                                    <div className="modal__detail">
                                        <label className="modal__label">Mã nhân viên:</label>
                                        <p className="modal__detail-info">{maNV}</p>
                                    </div>
            
                                    <div className="modal__detail">
                                        <label className="modal__label">Tên nhân viên:</label>
                                        <p className="modal__detail-info">{tenNV}</p>
                                    </div>
            
                                    <div className="modal__detail">
                                        <label className="modal__label">Mã hóa đơn:</label>
                                        <p className="modal__detail-info">{maHD}</p>
                                    </div>
            
                                    <div className="modal__detail">
                                        <label className="modal__label">Ngày lập:</label>
                                        <p className="modal__detail-info">{ngayLapHD}</p>
                                    </div>

                                    <div className="modal__detail">
                                        <label className="modal__label">Mã phiếu:</label>
                                        <p className="modal__detail-info">{maPhieu}</p>
                                    </div>

                                    <div className="modal__detail">
                                        <label className="modal__label">Mã khách hàng:</label>
                                        <p className="modal__detail-info">{maKH}</p>
                                    </div>
            
                                    <div className="modal__detail">
                                        <label className="modal__label">Tên khách hàng:</label>
                                        <p className="modal__detail-info">{tenKH}</p>
                                    </div>
            
                                    <div className="modal__detail">
                                        <label className="modal__label">Giới tính:</label>
                                        <p className="modal__detail-info">{gioitinhKH}</p>
                                    </div>
            
                                    <div className="modal__detail">
                                        <label className="modal__label">Năm sinh:</label>
                                        <p className="modal__detail-info">{namsinhKH}</p>
                                    </div>
                                </div>
                                <div className="col pc-6 mb-12">
                                    
            
                                    <div className="modal__detail">
                                        <label className="modal__label">SĐT:</label>
                                        <p className="modal__detail-info">{sdtKH}</p>
                                    </div>
            
                                    <div className="modal__detail">
                                        <label className="modal__label">Email:</label>
                                        <p className="modal__detail-info">{emailKH}</p>
                                    </div>
            
                                    <div className="modal__detail">
                                        <label className="modal__label">Địa chỉ:</label>
                                        <p className="modal__detail-info">{diachiKH}</p>
                                    </div>
            
                                    <div className="modal__detail no-flex">
                                        <label className="modal__label">Dịch vụ sử dụng:</label>
                                        <ul className="modal__detail-list">
                                            <li className="modal__detail-item">
                                                {/* <p className="modal__detail-item-name">Tên dịch vụ</p> */}
                                                {/* <p className="modal__detail-item-status">Giá</p> */}
                                            </li>
                                            {dichvuSD.map((dichvu,index)=>{
                                                return (
                                                    <li key={index} className="modal__detail-item" >
                                                        <p className="modal__detail-item-name">{`${index+1}. ${dichvu.TenDV} (  ${dichvu.Gia.toLocaleString()} đ)`}</p>
                                                        {/* <p className="modal__detail-item-status">{}</p> */}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
            
                                    <div className="modal__detail">
                                        <label className="modal__label">Tổng tiền:</label>
                                        <p className="modal__detail-info">{`${(+tongTien).toLocaleString()} đ`}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal__footer">
                        <button className="btn-admin modal__btn js-btn-cancel" onClick={HandleModalCancel}>Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBillsDetail