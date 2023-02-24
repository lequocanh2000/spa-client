import device1 from '../../../assets/img/devices/device1.PNG'
import { useState, useEffect ,memo } from "react";
import Axios from 'axios'

function ModalRoomDetail( {maphongDetail,showListDetail, setshowListDetail} ){
    const [tenPhong, settenPhong] = useState('');
    const [trangthaiPhong, settrangthaiPhong] = useState('');
    const [thietbiPhong, setthietbiPhong] = useState([]);

    
    useEffect(()=>{
        Axios.get(`http://localhost:3001/getRoom/${maphongDetail}`).then((response)=>{
            console.log(response.data)
            const room = response.data[0]
            settenPhong(room.TenPhong)
            settrangthaiPhong(room.TrangThai)
            return response.data[0]
        }).then((response)=>{
            if(response){
                Axios.get(`http://localhost:3001/getDeviceInRoom/${maphongDetail}`).then((response)=>{
                    console.log(response.data)
                    setthietbiPhong(response.data)
                })
            }
        })
    console.log('Đã gọi useEffect của RoomDtail')
    },[maphongDetail,showListDetail])



















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
                                Chi tiết phòng
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <div className="modal__detail">
                            <label className="modal__label">Mã phòng:</label>
                            <p className="modal__detail-info">{maphongDetail}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Tên phòng:</label>
                            <p className="modal__detail-info">{tenPhong}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Trạng thái:</label>
                            <p className="modal__detail-info">{trangthaiPhong}</p>
                        </div>

                        <div className="modal__detail no-flex">
                            <label className="modal__label">Thiết bị phòng:</label>
                            <ul className="modal__detail-list">
                                <li className="modal__detail-item">
                                    <p className="modal__detail-item-title">Ảnh</p>
                                    <p className="modal__detail-item-title">Tên</p>
                                </li>
                                {thietbiPhong.map((device,index)=>{
                                    return (
                                        <li className="modal__detail-item" key={index}>
                                            <img src={device.HinhAnh} className="modal__detail-item-img"/>
                                            <p className="modal__detail-item-name">{device.TenTB}</p>
                                        </li>
                                    )
                                })}
                                {/* <li className="modal__detail-item">
                                    <img src={device1} className="modal__detail-item-img"/>
                                    <p className="modal__detail-item-name">Máy hơi sương</p>
                                </li>
                                <li className="modal__detail-item">
                                    <img src={device1} className="modal__detail-item-img"/>
                                    <p className="modal__detail-item-name">Máy hơi sương</p>
                                </li> */}
                            </ul>
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

export default ModalRoomDetail