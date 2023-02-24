import admin from '../../../assets/img/user/admin.PNG'
import user1 from '../../../assets/img/user/user1.png'
import user2 from '../../../assets/img/user/user2.PNG'
import user3 from '../../../assets/img/user/user3.PNG'
import user4 from '../../../assets/img/user/user4.PNG'
import { useState,memo } from 'react'
import  Axios from 'axios'

function ModalDeviceAdd(props){
    // const [maTB, setmaTB] = useState('')
    const [tenTB, settenTB] = useState('')
    const [hinhanhTB, sethinhanhTB] = useState('')
    const [showImgPreview, setshowImgPreview] = useState(false)

    // const addDevice = ()=>{
    //     const device = {
    //         maTB: maTB,
    //         tenTB: tenTB,
    //         hinhanhTB: hinhanhTB
    //     }
    //     if(device.maTB!==''&&device.tenTB!==''){
    //         Axios.post('http://localhost:3001/addDevice',device).then((response)=>{
    //         console.log('OK')
    //         HandleCloseModal()
    //         window.confirm('Thêm thành công')
    //         props.dataDevice.setlistDevice(listDevice=>[...listDevice,{
    //             MaTB: maTB,
    //             TenTB: tenTB,
    //             HinhAnh: hinhanhTB
    //         }])
    //     })
            
    //     }else{
    //         console.log('Enter again')
    //         window.confirm('Vui lòng nhập lại')
    //     }
    // }

    const addDevice = ()=>{
        Axios.get('http://localhost:3001/getFinalMaTB').then((response)=>{
            let socuoi 
            console.log(typeof response.data[0],response.data[0])
            if(typeof response.data[0] === 'undefined'){
                socuoi = 1
            }else{
                socuoi = (response.data[0].SoCuoiMaTB) + 1
            }
            const maTB = 'TB0' + socuoi
            return maTB
        }).then((maTB) => {
            const device = {
                maTB: maTB,
                tenTB: tenTB,
                hinhanhTB: hinhanhTB
            }
            if(device.maTB!==''&&device.tenTB!==''){
                Axios.post('http://localhost:3001/addDevice',device).then((response)=>{
                console.log('OK')
                HandleCloseModal()
                window.confirm('Thêm thành công')
                // props.dataDevice.setlistDevice(listDevice=>[...listDevice,{
                //     MaTB: maTB,
                //     TenTB: tenTB,
                //     HinhAnh: hinhanhTB
                // }])
                
                props.setshowList(!props.showList)
            })
                
            }else{
                console.log('Enter again')
                window.confirm('Vui lòng nhập lại')
            }
        })
        settenTB('')
        sethinhanhTB('')
        setshowImgPreview(false)
    }






    //Click btn Cancel
    function HandleModalCancel(e){
        // const btnCancelModal = document.querySelector('.js-btn-cancel')
        const modalAdd = document.querySelector('.js-modal-add')
        modalAdd.classList.remove('open')
        console.log('Click button cancel modal add')
        e.stopPropagation()
    }

    //Click modal
    function HandleCloseModal(e){
        const modalAdd = document.querySelector('.js-modal-add')
        modalAdd.classList.remove('open')
        // console.log('Close modal add')
    }

    //Click modal dialog
    function HandleModalDialog(e){
        // const modalDialogDetail = document.querySelector('.js-modal-dialog')
        // console.log(modalDialogDetail)
        // console.log(e.target)
        // console.log('Click modal dialog')
        e.stopPropagation()

    }

    //Preview image
    function HandleFileDevice(e){
        const modalImg = document.querySelector('.js-modal-preview-img')
        let file = e.target.files[0]
        console.log(file)
        let fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = (e) => {
            const url = e.target.result
            sethinhanhTB(url)
            // console.log(url)
            // console.log(typeof url)
            console.log('set hinhanhTB')
            // modalImg.setAttribute('src',url)
            // modalImg.style.zIndex = "1"
            setshowImgPreview(true)
        }
    }

    return (
        <div className="modal js-modal-add" onClick={HandleCloseModal}>
            <div className="modal__dialog js-modal-dialog" onClick={HandleModalDialog}>
                <div className="modal__content">
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                Thêm thiết bị
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <form action="#" className="modal__form js-modal-form" method="get">
                            {/* <label htmlFor="MaTB" className="modal__label">Mã thiết bị</label>
                            <input type="text" className="modal__control" id="modalPhone" name="MaTB" placeholder="Mã thiết bị" required
                                defaultValue={maTB}
                                onChange={(e)=>{
                                    setmaTB(e.target.value)
                                    console.log('set maTB')
                                }}
                            /> */}

                            <label htmlFor="TenTB" className="modal__label">Tên thiết bị</label>
                            <input type="text" className="modal__control" id="TenTB" name="TenTB" placeholder="Tên thiết bị"
                                value={tenTB}
                                onChange={(e)=>{
                                    settenTB(e.target.value)
                                    console.log('set maTB')
                                }}
                            />

                            {/* <label htmlFor="TrangThaiTB" className="modal__label">Trạng thái</label>
                            <select name="TrangThaiTB" id="TrangThaiTB" className="modal__select" required>
                                <option defaultValue="" className="modal__option">--Trạng thái--</option>
                                <option defaultValue="Hoạt động" className="modal__option">Hoạt động</option>
                                <option defaultValue="Không hoạt động" className="modal__option">Không hoạt động</option>
                            </select> */}
                            
                            {/* <!-- Preview image  --> */}
                            <label className="modal__label">Ảnh</label>
                            <div className="modal__preview">
                                <label htmlFor="AnhTB" className="modal__preview-label">
                                    <i className="modal__preview-icon ti-plus"></i>
                                </label>
                                <input type="file" name="AnhTB" id="AnhTB" className="modal__file js-modal-file"  hidden
                                    // defaultValue={hinhanhTB}
                                    onChange={HandleFileDevice}
                                />
                                <div className="modal__preview-content">
                                    {showImgPreview && <img src={hinhanhTB} alt="" className="modal__preview-img js-modal-preview-img" style={{zIndex: 1}}/>}
                                </div>
                            </div>

                        </form>                     
                    </div>
                    <div className="modal__footer">
                        <button className="btn-admin modal__btn btn--green js-btn-submit" onClick={addDevice}>Thêm</button>
                        <button className="btn-admin modal__btn btn--red js-btn-cancel" onClick={HandleModalCancel}>Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ModalDeviceAdd)