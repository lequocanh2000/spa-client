import {useState, useEffect} from 'react'
import Axios from 'axios'

function ModalRegisterServicesDetail({maPhieuDetail, setmaPhieuDetail, showListDetail, setshowListDetail}){

    const [trangthaiPDK,settrangthaiPDK] = useState('')
    const [ngaySD,setngaySD] = useState('')
    const [ngayLapPhieu,setngayLapPhieu] = useState('')

    const [tenKH,settenKH] = useState('')
    const [namsinhKH,setnamsinhKH] = useState('')
    const [gioitinhKH,setgioitinhKH] = useState('')
    const [emailKH,setemailKH] = useState('')
    const [sdtKH,setsdtKH] = useState('')
    const [diachiKH,setdiachiKH] = useState('')

    const [dichvuKH,setdichvuKH] = useState([])
    const [phong,setphong] = useState([])
    const [thoigian,setthoigian] = useState([])


    useEffect(()=>{
        Axios.get(`http://localhost:3001/getRegistration_Customer_Room_Time/${maPhieuDetail}`).then((pesponse)=>{
            console.log(pesponse)
            const customer = pesponse.data[0]
            settenKH(customer.TenKH)
            setnamsinhKH(customer.NamSinh)
            setgioitinhKH(customer.GioiTinh)
            setemailKH(customer.Email)
            setsdtKH(customer.SDT)
            setdiachiKH(customer.DiaChiKH)
            settrangthaiPDK(customer.TrangThai)
            setphong(customer.TenPhong)
            setthoigian(customer.Gio)
            setngaySD(customer.NgaySuDung)
            setngayLapPhieu(customer.NgayLapPhieu)


            console.log(customer.TenKH)
            console.log(customer.NamSinh)
            console.log(customer.GioiTinh)
            console.log(customer.Email)
            console.log(customer.SDT)
            console.log(customer.DiaChiKH)
            // setdichvuKH(customer.)
            return pesponse.data[0].length
            
        }).then((success)=>{
            if(success!==0){
                Axios.get(`http://localhost:3001/getRegistration_Registration-Service_Service/${maPhieuDetail}`).then((pesponse)=>{
                    console.log(pesponse)
                    setdichvuKH(pesponse.data)
                })
            }
        })

        


        console.log('useEffect of ModalRegisterServicesDetail')
    },[maPhieuDetail,showListDetail])









    //Click btn Cancel
    function HandleModalCancel(e){
        const btnCancelModal = document.querySelector('.js-btn-cancel')
        const modalDetail = document.querySelector('.js-modal-detail')
        console.log('Click button cancel modal detail')
        modalDetail.classList.remove('open')
        e.stopPropagation()
    }

    //Click modal
    function HandleCloseModal(e){
        const modalDetail = document.querySelector('.js-modal-detail')
        console.log('Close modal detail')
        modalDetail.classList.remove('open')
    }

    //Click modal dialog
    function HandleModalDialog(e){
        const modalDialogDetail = document.querySelector('.js-modal-dialog')
        console.log('Click modal dialog')
        e.stopPropagation()

    }

    return (
        <div className="modal js-modal-detail" onClick={HandleCloseModal}>
            <div className="modal__dialog js-modal-dialog" onClick={HandleModalDialog}>
                <div className="modal__content">
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                Chi ti???t phi???u
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <div className="modal__detail">
                            <label className="modal__label">M?? phi???u:</label>
                            <p className="modal__detail-info">{maPhieuDetail}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Ng??y l???p phi???u:</label>
                            <p className="modal__detail-info">{ngayLapPhieu}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Ng??y s??? d???ng:</label>
                            <p className="modal__detail-info">{ngaySD}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Tr???ng th??i phi???u:</label>
                            <p className="modal__detail-info">{trangthaiPDK}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">H??? t??n:</label>
                            <p className="modal__detail-info">{tenKH}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">N??m sinh:</label>
                            <p className="modal__detail-info">{namsinhKH}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Gi???i t??nh:</label>
                            <p className="modal__detail-info">{gioitinhKH}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">S??? ??i???n tho???i:</label>
                            <p className="modal__detail-info">{sdtKH}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Email:</label>
                            <p className="modal__detail-info">{emailKH}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">?????a ch???:</label>
                            <p className="modal__detail-info">{diachiKH}</p>
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Ph??ng:</label>
                            {phong === 'Tr???ng' ? 
                                <p className="modal__detail-info" style={{color: 'red'}}>{phong}</p>
                                               :
                                <p className="modal__detail-info">{phong}</p>
                            }
                        </div>

                        <div className="modal__detail">
                            <label className="modal__label">Gi???:</label>
                            <p className="modal__detail-info">{thoigian}</p>
                        </div>

                        <div className="modal__detail no-flex">
                            <label className="modal__label">D???ch v??? ????ng k??:</label>
                            <ul className="modal__detail-list">
                                {dichvuKH.map((dichvu,index)=>{
                                    return (
                                        <li className="modal__detail-item" key={index+1}>
                                            <p className="modal__detail-item-name">{`${index+1}. ${dichvu.TenDV}`}</p>
                                        </li>
                                    )
                                })}
                                {/* <li className="modal__detail-item">
                                    <p className="modal__detail-item-name">1. T???y da ch???t</p>
                                </li>
                                <li className="modal__detail-item">
                                    <p className="modal__detail-item-name">2. L??m s??ng da</p>
                                </li>
                                <li className="modal__detail-item">
                                    <p className="modal__detail-item-name">3. T???y tr???ng da</p>
                                </li> */}
                            </ul>
                        </div>

                    </div>
                    <div className="modal__footer">
                        <button className="btn-admin modal__btn js-btn-cancel" onClick={HandleModalCancel}>????ng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRegisterServicesDetail