import { useState,memo } from 'react'
import  Axios from 'axios'
function ModalServiceAdd({listService, setlistService, showList, setshowList}){
    const [tenDV, settenDV] = useState('')
    const [giaDV, setgiaDV] = useState(0)



    //Add service
    const addService = ()=>{
        Axios.get('http://localhost:3001/getFinalMaDV').then((response)=>{
            let socuoi 
            console.log(typeof response.data[0],response.data[0])
            if(typeof response.data[0] === 'undefined'){
                socuoi = 1
            }else{
                socuoi = (response.data[0].SoCuoiMaDV) + 1
            }
            const maDV = 'DV0' + socuoi

            return maDV
        }).then((maDV) => {
            const service = {
                maDV: maDV,
                tenDV: tenDV,
                giaDV: giaDV
            }
            if(service.maDV!=='' && service.tenDV!=='' && service.giaDV!==''){
                Axios.post('http://localhost:3001/addService',service).then((response)=>{
                console.log('OK')
                HandleCloseModal()
                window.confirm('Thêm thành công')
                setlistService(listService=>[...listService,{
                    MaDV: maDV,
                    TenDV: tenDV,
                    Gia: giaDV
                }])
                setshowList(!showList)
            })
                
            }else{
                console.log('Enter again')
                window.confirm('Vui lòng nhập đầy đủ thông tin')
            }
        })
        settenDV('')
        setgiaDV('')
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

    return (
        <div className="modal js-modal-add" onClick={HandleCloseModal}>
            <div className="modal__dialog js-modal-dialog" onClick={HandleModalDialog}>
                <div className="modal__content">
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                Thêm dịch vụ
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <form action="#" className="modal__form js-modal-form" method="get">

                            <label id="TenDV" className="modal__label">Tên</label>
                            <input type="text" className="modal__control" id="modalPhone" name="TenDV" placeholder="Tên dịch vụ" required
                                value={tenDV}
                                onChange={(e)=>{
                                    settenDV(e.target.value)
                                    console.log('set tenDV')
                                }}
                            />

                            <label id="GiaDV" className="modal__label">Giá</label>
                            <input type="text" className="modal__control" id="GiaDV" name="GiaDV" placeholder="Giá dịch vụ" required
                                value={giaDV}
                                onChange={(e)=>{
                                    setgiaDV(e.target.value)
                                    console.log('set giaDV')
                                }}
                            />

                        </form>                     
                    </div>
                    <div className="modal__footer">
                        <button className="btn-admin modal__btn js-btn-submit" onClick={addService}>Thêm</button>
                        <button className="btn-admin modal__btn js-btn-cancel" onClick={HandleModalCancel}>Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ModalServiceAdd)