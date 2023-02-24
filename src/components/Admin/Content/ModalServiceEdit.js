import { useState, useEffect ,memo } from "react";
import Axios from 'axios'

function ModalServiceEdit({madvEdit, listService, setlistService, showList, setshowList}){

    const [tendvEdit,settendvEdit] = useState('')
    const [giadvEdit,setgiadvEdit] = useState(0)

    useEffect(()=>{
        Axios.get(`http://localhost:3001/getServiceEdit/${madvEdit}`).then((response)=>{
            console.log(response.data[0].MaDV)
            console.log(response.data[0].TenDV)
            console.log(response.data[0].Gia)
            settendvEdit(response.data[0].TenDV)
            setgiadvEdit(response.data[0].Gia)
        })
    },[madvEdit])


    const handleServiceEdit = ()=>{
        const serviceEdit = {
            tendvEdit,
            giadvEdit
        }
        if(tendvEdit!==''&&giadvEdit!==''){
            Axios.put(`http://localhost:3001/updateService/${madvEdit}`,serviceEdit).then((response)=>{
                if(response.data!=='Error'){
                    console.log(response)
                    window.confirm('Cập nhật thành công')
                    HandleCloseModal()
                    setlistService(listService.map((service)=>{
                        return service.MaDV === madvEdit ? {MaDV: madvEdit, TenDV: tendvEdit, Gia: giadvEdit} : service
                    }))
                    setshowList(!showList)
                }
            })
            console.log(madvEdit)
            console.log(tendvEdit)
            console.log(giadvEdit)   
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
        // console.log(modalDialogDetail)
        // console.log(e.target)
        // console.log('Click modal dialog')
        e.stopPropagation()

    }

    return (
        <div className="modal js-modal-edit" onClick={HandleCloseModal}>
            <div className="modal__dialog js-modal-dialog" onClick={HandleModalDialog}>
                <div className="modal__content">
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                Sửa dịch vụ
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <form action="#" className="modal__form js-modal-form" method="get">
                            <div className="gird">
                                <div className="row mo-gutters">
                                    <div className="col pc-12 mb-12">

                                        <label htmlFor="MaDV" className="modal__label">Mã:</label>
                                        <input type="text" className="modal__control" id="MaNV" name="MaNV" placeholder="Mã dịch vụ" disabled 
                                            defaultValue={madvEdit}
                                        />

                                        <label htmlFor="TenDV" className="modal__label">Tên:</label>
                                        <input type="text" className="modal__control" id="TenDV" name="TenDV" placeholder="Tên dịch vụ" required
                                            value={tendvEdit}
                                            onChange={(e)=>{
                                                settendvEdit(e.target.value)
                                                console.log('set tendvEdit')
                                            }} 
                                        />

                                        <label htmlFor="GiaDV" className="modal__label">Giá:</label>
                                        <input type="text" className="modal__control" id="GiaDV" name="GiaDV" placeholder="Giá dịch vụ" required
                                            value={giadvEdit}
                                            onChange={(e)=>{
                                                setgiadvEdit(e.target.value)
                                                console.log('set giadvEdit')
                                            }}
                                        />
                                    
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal__footer">
                        <button className="btn-admin modal__btn js-btn-submit" onClick={handleServiceEdit}>Sửa</button>
                        <button className="btn-admin modal__btn js-btn-cancel" onClick={HandleModalCancel}>Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ModalServiceEdit)