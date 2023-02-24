import {useState, useEffect} from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
function ModalTakeCareOfDetail({maKH}){


    const [tenKH,settenKH] = useState('')
    const [sdtKH,setsdtKH] = useState('')
    const [emailKH,setemailKH] = useState('')
    const [ghiChu,setghiChu] = useState('')

    useEffect(()=>{
        //Lấy thông thin khách hàng cần tư vấn có MaKH = maKH
        Axios.get(`http://localhost:3001/getCustomerNeedHelp/${maKH}`).then((response)=>{
            console.log(response)
            const customer = response.data[0]
            settenKH(customer.TenKH)
            setsdtKH(customer.SDT)
            setemailKH(customer.Email)
            setghiChu(customer.GhiChu)
        })
    },[maKH])





















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
            <div className="modal__dialog js-modal-dialog" onClick={HandleModalDialog}>
                <div className="modal__content">
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                Chi tiết hổ trợ
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <div className="modal__detail">
                            <label className="modal__label">Họ tên:</label>
                            <p className="modal__detail-info">{tenKH}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Email:</label>
                            <p className="modal__detail-info">{emailKH}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">SĐT:</label>
                            <p className="modal__detail-info">{sdtKH}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Nội dung:</label>
                            <p className="modal__detail-info">{ghiChu}</p>
                        </div>
                    </div>
                    <div className="modal__footer">
                        <button className="btn modal__btn js-btn-cancel" onClick={HandleModalCancel}>Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalTakeCareOfDetail