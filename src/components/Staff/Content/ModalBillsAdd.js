import {useState, useEffect} from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
function ModalBillsAdd({showList, setshowList}){

    const { maNV } = useParams()

    const [listRegistration,setlistRegistration] = useState([]) //Danh sách những phiếu đăng ký chưa thanh toán
    const [maPhieu,setmaPhieu] = useState('')
    const [showAgain,setshowAgain] = useState(false)

    useEffect(()=>{
        //Lấy những phiếu đăng ký chưa thanh toán
        Axios.get(`http://localhost:3001/getListRegistrationNotPay`).then((response)=>{
            console.log(response)
            setlistRegistration(response.data)
        })
    },[showAgain])



    const handleAddBill = ()=>{
        // console.log(listRegistration)
        if(maPhieu !==''){
            console.log(maPhieu)
            const currentDay = new Date()
            const day = currentDay.getDate()
            const month = currentDay.getMonth() + 1
            const year = currentDay.getFullYear()
            const ngayLapHD = `${year.toString()}-${month.toString()}-${day.toString()}`
            console.log(ngayLapHD)
          

            //Lấy số cuối của hóa đơn
            Axios.get('http://localhost:3001/getFinalMaHD').then((response)=>{
                console.log(response)
                let socuoi 
                console.log(typeof response.data.length,response.data.length)
                if(response.data.length === 0 ){
                    socuoi = 1
                }else{
                    socuoi = (response.data[0].SoCuoiMaHD) + 1
                }
                const maHD = 'HD0' + socuoi
                console.log(maHD)
    
                return maHD
            }).then((maHD)=>{
                const bill={
                    maHD,
                    maPhieu,
                    maNV,
                    ngayLapHD
                }
                //thêm hóa đơn
                Axios.post(`http://localhost:3001/addBill`,bill).then((response)=>{
                    console.log(response)
                    if(response.data==='Success'){
                        return response.data
                    }else{
                        window.confirm('Lập thất bại')
                    }
                }).then((success)=>{
                    if(success==='Success'){
                        //Cập nhật lại trạng thái của phiếu đăng ký có MaPhieu = maPhieu là 'Đã thanh toán'
                        Axios.put(`http://localhost:3001/updateRegistrationState`,{maPhieu}).then((response)=>{
                            console.log(response)
                            if(response.data==='Success'){
                                setshowList(!showList)
                                setshowAgain(!showAgain)
                                HandleCloseModal()
                                window.confirm('Lập thành công')
                                
                            }else{
                                window.confirm('Lập  thất bại')
                            }
                        })
                    }else{
                        window.confirm('Lập  thất bại')
                    }       
                })
            })
        }else{
            window.confirm('Vui lòng chọn mã phiếu')
        }


    }











    //Click btn Cancel
    function HandleModalCancel(e){
        // const btnCancelModal = document.querySelector('.js-btn-cancel')
        const modalAdd = document.querySelector('.js-modal-add')
        modalAdd.classList.remove('open')
        // console.log('Click button cancel modal add')
        e.stopPropagation()
    }

    //Click modal
    function HandleCloseModal(e){
        const modalAdd = document.querySelector('.js-modal-add')
        modalAdd.classList.remove('open')
        console.log('Close modal add')
    }

    //Click modal dialog
    function HandleModalDialog(e){
        // const modalDialog = document.querySelector('.js-modal-dialog')
        // console.log(modalDialogDetail)
        // console.log(e.target)
        // console.log('Click modal dialog')
        e.stopPropagation()
    }

    return (
        <div className="modal js-modal-add" onClick={HandleCloseModal}>
            <div className="modal__dialog js-modal-dialog" onClick={HandleModalDialog}>
                <div className="modal__content">
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                Lập hóa đơn
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <form action="#" className="modal__form js-modal-form" method="get">

                            <div className="gird">
                                <div className="row mo-gutters">
                                    <div className="col pc-12 mb-12">

                                        <label className="modal__label">Chọn mã phiếu cần lập hóa đơn</label>
                                        <select name="HoaDon" id="HoaDon" className="modal__select" required
                                            value={maPhieu}
                                            onChange={(e)=>{
                                                setmaPhieu(e.target.value)
                                                console.log('set maPhieu')
                                            }}
                                        >   
                                            <option  value={''} className="modal__option">--Chọn mã phiếu--</option>
                                            {listRegistration.map((regis,index)=>{
                                                
                                                return (
                                                    <option key={index} value={regis.MaPhieu} className="modal__option">{regis.MaPhieu}</option>
                                                )
                                            })}
                                        </select>
                                    
                                    </div>
                                </div>
                            </div>           
                        </form>                     
                    </div>
                    <div className="modal__footer">
                        <button className="btn-admin modal__btn js-btn-submit" onClick={handleAddBill}>Lập</button>
                        <button className="btn-admin modal__btn js-btn-cancel" onClick={HandleModalCancel}>Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBillsAdd