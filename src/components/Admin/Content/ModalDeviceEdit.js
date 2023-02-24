import { useState, useEffect ,memo } from "react";
import Axios from 'axios'

function ModalDeviceEdit( {matbEdit, listDevice, setlistDevice,showList ,setshowList} ){

    const [tentbEdit,settentbEdit] = useState('')
    const [hinhanhtbEdit,sethinhanhtbEdit] = useState('')


    useEffect(()=>{
        Axios.get(`http://localhost:3001/getDevice/${matbEdit}`).then((response)=>{
            console.log(response.data[0].MaTB)
            console.log(response.data[0].TenTB)
            console.log(response.data[0].HinhAnh)
            settentbEdit(response.data[0].TenTB)
            sethinhanhtbEdit(response.data[0].HinhAnh)
        })
    },[matbEdit])

    const handleDeviceEdit = ()=>{
        const deviceEdit = {
            tentbEdit,
            hinhanhtbEdit
        }
        if(tentbEdit!==''&&hinhanhtbEdit!==''){
            Axios.put(`http://localhost:3001/updateDevice/${matbEdit}`,deviceEdit).then((response)=>{
                if(response.data!=='Error'){
                    console.log(response)
                    window.confirm('Cập nhật thành công')
                    HandleCloseModal()
                    // setlistDevice(listDevice.map((device)=>{
                    //     return device.MaTB === matbEdit ? {MaTB: matbEdit, TenTB: tentbEdit, HinhAnh: hinhanhtbEdit} : device
                    // }))
                    setshowList(!showList)
                }
            })
            console.log(matbEdit)
            console.log(tentbEdit)
            console.log(hinhanhtbEdit)   
        }else{
            window.confirm('Vui lòng điền đầy đủ thông tin')
        }
        
    }


    //Click btn Cancel
    function HandleModalCancel(e){
        // const btnCancelModal = document.querySelector('.js-btn-cancel')
        const modalEdit = document.querySelector('.js-modal-edit')
        modalEdit.classList.remove('open')
        // console.log('Click button cancel modal edit')
        e.stopPropagation()
    }

    //Click modal
    function HandleCloseModal(e){
        const modalEdit = document.querySelector('.js-modal-edit')
        modalEdit.classList.remove('open')
        // console.log('Close modal edit')
    }

    //Click modal dialog
    function HandleModalDialog(e){
        // const modalDialogDetail = document.querySelector('.js-modal-dialog')
        // console.log('Click modal dialog')
        e.stopPropagation()

    }

    //Preview image
    function HandleModalFile(e){
        const modalImg = document.querySelector('.js-modal-preview-img-edit')
        let file = e.target.files[0]
        console.log(file)
        let fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = (e) => {
            const url = e.target.result
            sethinhanhtbEdit(url)
            console.log(url)
            // modalImg.setAttribute('src',url)
            // modalImg.style.zIndex = "1"
        }
    }

    return (
        <div className="modal js-modal-edit" onClick={HandleCloseModal}>
            <div className="modal__dialog js-modal-dialog" onClick={HandleModalDialog}>
                <div className="modal__content"> 
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                Sửa thiết bị
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <form action="#" className="modal__form js-modal-form" method="get">
                            <div className="gird">
                                <div className="row mo-gutters">
                                    <div className="col pc-12 mb-12">

                                        <label htmlFor="MaTB" className="modal__label">Mã thiết bị</label>
                                        <input type="text" className="modal__control" id="MaTB" name="MaTB"  disabled 
                                            defaultValue={matbEdit} 
                                        />

                                        <label htmlFor="TenTB" className="modal__label">Tên</label>
                                        <input type="text" className="modal__control" id="TenTB" name="TenTB" placeholder="Tên thiết bị" required
                                            value={tentbEdit}
                                            onChange={(e)=>{
                                                settentbEdit(e.target.value)
                                                console.log('set ten thiet bi edit')
                                            }}
                                        />

                                        {/* <label className="modal__label">Trạng thái</label>
                                        <select name="GioiTinhNV" id="" className="modal__select" required>                            
                                            <option defaultValue="Hoạt động" className="modal__option">Hoạt động</option>
                                            <option defaultValue="Không hoạt động" className="modal__option">Không hoạt động</option>
                                        </select> */}
                                    
                                    </div>
                                </div>
                            </div>


                            {/* <!-- Preview image  --> */}
                            <label className="modal__label">Ảnh</label>
                            <div className="modal__preview">
                                <label htmlFor="AnhTB_New" className="modal__preview-label">
                                    <i className="modal__preview-icon ti-plus"></i>
                                </label>
                                <input type="file" name="AnhTB_New" id="AnhTB_New" className="modal__file js-modal-file-edit" hidden 
                                    defaultValue={hinhanhtbEdit}
                                    onChange={HandleModalFile}
                                    />
                                <div className="modal__preview-content">
                                    <img src={hinhanhtbEdit} alt="" className="modal__preview-img js-modal-preview-img-edit" style={{zIndex: 1}}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal__footer">
                        <button className="btn-admin modal__btn js-btn-submit" onClick={handleDeviceEdit}>Sửa</button>
                        <button className="btn-admin modal__btn js-btn-cancel" onClick={HandleModalCancel}>Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ModalDeviceEdit)