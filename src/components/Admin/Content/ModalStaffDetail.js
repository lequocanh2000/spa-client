import { useState, useEffect ,memo } from "react";
import Axios from 'axios'
function ModalStaffDetail({manvDetail}){
    const [tenNV, settenNV] = useState('');
    const [gioitinhNV, setgioitinhNV] = useState('');
    const [namsinhNV, setnamsinhNV] = useState('');
    const [emailNV, setemailNV] = useState('');
    const [sdtNV, setsdtNV] = useState('');
    const [diachiNV, setdiachiNV] = useState('');
    const [matkhauNV, setmatkhauNV] = useState('');

    useEffect(()=>{
        Axios.get(`http://localhost:3001/getStaff/${manvDetail}`).then((response)=>{
            console.log(response.data)
            const staff = response.data[0]
            settenNV(staff.TenNV)
            setgioitinhNV(staff.GioiTinh)
            setnamsinhNV(staff.NamSinh)
            setemailNV(staff.Email)
            setsdtNV(staff.SDT)
            setdiachiNV(staff.DiaChiNV)
            setmatkhauNV(staff.MatKhau)
        })
    },[manvDetail])

    //
    function HandleModalCancel(e){
        // const btnCancelModal = document.querySelector('.js-btn-cancel')
        const modalDetail = document.querySelector('.js-modal-detail')
        // console.log('Click button cancel modal detail')
        modalDetail.classList.remove('open')
        e.stopPropagation()
    }

    function HandleCloseModal(e){
        const modalDetail = document.querySelector('.js-modal-detail')
        // console.log('Close modal detail')
        modalDetail.classList.remove('open')
    }

    function HandleModalDialog(e){
        // const modalDialogDetail = document.querySelector('.js-modal-dialog')
        // console.log('Click modal dialog')
        e.stopPropagation()

    }

    return (
        <div className="modal js-modal-detail" onClick={HandleCloseModal}>
            <div className="modal__dialog js-modal-dialog" onClick={HandleModalDialog}>
                <div className="modal__content">
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                Chi tiết nhân viên
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <div className="modal__detail">
                            <label className="modal__label">Họ tên:</label>
                            <p className="modal__detail-info">{tenNV}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Giới tính:</label>
                            <p className="modal__detail-info">{gioitinhNV}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Năm sinh:</label>
                            <p className="modal__detail-info">{namsinhNV}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Email:</label>
                            <p className="modal__detail-info">{emailNV}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Số điện thoại:</label>
                            <p className="modal__detail-info">{sdtNV}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Địa chỉ:</label>
                            <p className="modal__detail-info">{diachiNV}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Mật khẩu:</label>
                            <p className="modal__detail-info">{matkhauNV}</p>
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

export default ModalStaffDetail