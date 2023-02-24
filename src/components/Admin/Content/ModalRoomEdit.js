import { useState, useEffect ,memo } from "react";
import Axios from 'axios'

function ModalRoomEdit({maphongEdit, showList, setshowList, showListDetail, setshowListDetail}){
    const [tenPhong, settenPhong] = useState('');
    const [trangthaiPhong, settrangthaiPhong] = useState('');
    const [thietbiPhong, setthietbiPhong] = useState([]);
    const [thietbiKho, setthietbiKho] = useState([]);
    const [showListEdit, setshowListEdit] = useState(false)

    useEffect(()=>{
        Axios.get(`http://localhost:3001/getRoom/${maphongEdit}`).then((response)=>{
            console.log(response.data)
            const room = response.data[0]
            settenPhong(room.TenPhong)
            settrangthaiPhong(room.TrangThai)
            return response.data[0]
        }).then((response)=>{
            if(response){
                Axios.get(`http://localhost:3001/getDeviceInRoom/${maphongEdit}`).then((response)=>{
                    console.log(response.data)
                    setthietbiPhong(response.data)
                })

                const maPhongKho = 'MP00'
                Axios.get(`http://localhost:3001/getDeviceInRoom/${maPhongKho}`).then((response)=>{
                    console.log(response.data)
                    setthietbiKho(response.data)
                })
            }
        })
        console.log('Đã gọi useEffect của RoomEdit')
    },[maphongEdit,showListEdit])






















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

    //Handle checkbox
    function HandleChecked(e){
        // const modalDialogDetail = document.querySelector('.js-modal-dialog')
        // console.log(modalDialogDetail)
        // console.log(e.target)
        // console.log(e.target.value)
        console.log('Click checkbox')
        e.stopPropagation()

    }

    function EditRoom(e){
        if(maphongEdit!=='MP00'){
            const checkBoxsDelete = document.getElementsByName('ThietBiEdit')
            const checkBoxsAdd = document.getElementsByName('ThietBiAdd')
            const listDevicesDelete = []
            const listDevicesAdd = []
            console.log(checkBoxsDelete)
            console.log(checkBoxsAdd)
            checkBoxsDelete.forEach((checkBox,index)=>{
                if(checkBox.checked){
                    listDevicesDelete.push(checkBox.getAttribute('value'))
                    console.log(checkBox.getAttribute('value'))
                }
            })
            checkBoxsAdd.forEach((checkBox,index)=>{
                if(checkBox.checked){
                    listDevicesAdd.push(checkBox.getAttribute('value'))
                    console.log(checkBox.getAttribute('value'))
                }
            })
            console.log(listDevicesDelete,listDevicesDelete.length)
            console.log(listDevicesAdd,listDevicesAdd.length)
            e.stopPropagation()

            if(listDevicesDelete.length !== 0 && listDevicesAdd.length !== 0){
                //update lại MaPhong của các thiết bị trong listDevicesDelete là MP00 ở bảng ThietBi
                listDevicesDelete.forEach((maTB)=>{
                    const device = {
                        maPhong: 'MP00',
                        maTB
                    }
                    Axios.post('http://localhost:3001/updateMaPhongOfDevice',device).then((response)=>{
                        console.log(response.data)
                    })
                })
                //update lại MaPhong của các thiết bị trong listDevicesAdd là maPhongEdit ở bảng ThietBi
                listDevicesAdd.forEach((maTB)=>{
                    const device = {
                        maPhong: maphongEdit,
                        maTB
                    }
                    Axios.post('http://localhost:3001/updateMaPhongOfDevice',device).then((response)=>{
                        console.log(response.data)
                    })
                })
                //update lại TenPhong, TrangThai của phòng có mã là maPhongEdit trong bảng Phong
                const room={
                    tenPhong,
                    trangthaiPhong
                }
                Axios.put(`http://localhost:3001/updateRoom/${maphongEdit}`,room).then((response)=>{
                    console.log(response.data)
                    if(response.data==='Update success'){
                        window.confirm('Cập nhật thành công')
                        HandleCloseModal()
                        setshowListEdit(!showListEdit)
                        setshowListDetail(!showListDetail)
                        setshowList(!showList)    
                    }else{
                        console.log(response.data)
                        window.confirm('Cập nhật thất bại')
                        setshowListEdit(!showListEdit)
                    }
                })
            }
            else if(listDevicesDelete.length !== 0 && listDevicesAdd.length === 0){
                    //update lại MaPhong của các thiết bị trong listDevicesDelete là MP00 ở bảng ThietBi
                    listDevicesDelete.forEach((maTB)=>{
                        const device = {
                            maPhong: 'MP00',
                            maTB
                        }
                        Axios.post('http://localhost:3001/updateMaPhongOfDevice',device).then((response)=>{
                            console.log(response.data)
                        })
                    })
                    //update lại TenPhong, TrangThai của phòng có mã là maPhongEdit trong bảng Phong
                    const room={
                        tenPhong,
                        trangthaiPhong
                    }
                    Axios.put(`http://localhost:3001/updateRoom/${maphongEdit}`,room).then((response)=>{
                        console.log(response.data)
                        if(response.data==='Update success'){
                            window.confirm('Cập nhật thành công')
                            HandleCloseModal()
                            setshowListEdit(!showListEdit)
                            setshowListDetail(!showListDetail)
                            setshowList(!showList)
                        }else{
                            console.log(response.data)
                            window.confirm('Cập nhật thất bại')
                            setshowListEdit(!showListEdit)
                        }
                    })

                }else if(listDevicesDelete.length === 0 && listDevicesAdd.length !== 0){
                            //update lại MaPhong của các thiết bị trong listDevicesAdd là maPhongEdit ở bảng ThietBi
                            listDevicesAdd.forEach((maTB)=>{
                                const device = {
                                    maPhong: maphongEdit,
                                    maTB
                                }
                                Axios.post('http://localhost:3001/updateMaPhongOfDevice',device).then((response)=>{
                                    console.log(response.data)
                                })
                            })
                            //update lại TenPhong, TrangThai của phòng có mã là maPhongEdit trong bảng Phong
                            const room={
                                tenPhong,
                                trangthaiPhong
                            }
                            Axios.put(`http://localhost:3001/updateRoom/${maphongEdit}`,room).then((response)=>{
                                console.log(response.data)
                                if(response.data==='Update success'){
                                    window.confirm('Cập nhật thành công')
                                    HandleCloseModal()
                                    setshowListEdit(!showListEdit)
                                    setshowListDetail(!showListDetail)
                                    setshowList(!showList)
                                    
                                }else{
                                    console.log(response.data)
                                    window.confirm('Cập nhật thất bại')
                                    setshowListEdit(!showListEdit)
                                }
                            })
                            
                        }else{
                            //update lại TenPhong, TrangThai của phòng có mã là maPhongEdit trong bảng Phong
                            const room={
                                tenPhong,
                                trangthaiPhong
                            }
                            Axios.put(`http://localhost:3001/updateRoom/${maphongEdit}`,room).then((response)=>{
                                console.log(response.data)
                                if(response.data==='Update success'){
                                    window.confirm('Cập nhật thành công')
                                    HandleCloseModal()
                                    setshowListEdit(!showListEdit)
                                    setshowListDetail(!showListDetail)
                                    setshowList(!showList)
                                    
                                }else{
                                    console.log(response.data)
                                    window.confirm('Cập nhật thất bại')
                                    setshowListEdit(!showListEdit)
                                }
                            })
                        }
        }else{
            //Nếu là kho thiết bị thì chỉ cập nhật TenPhong, TrangThai
            const room={
                tenPhong,
                trangthaiPhong
            }
            Axios.put(`http://localhost:3001/updateRoom/${maphongEdit}`,room).then((response)=>{
                console.log(response.data)
                if(response.data==='Update success'){
                    window.confirm('Cập nhật thành công')
                    HandleCloseModal()
                    setshowListEdit(!showListEdit)
                    setshowListDetail(!showListDetail)
                    setshowList(!showList)
                    
                }else{
                    console.log(response.data)
                    window.confirm('Cập nhật thất bại')
                    setshowListEdit(!showListEdit)
                }
            })
        }

    }

    return (
        <div className="modal js-modal-edit" onClick={HandleCloseModal}>
            <div className="modal__dialog js-modal-dialog" onClick={HandleModalDialog}>
                <div className="modal__content">
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                Thêm phòng
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <form action="#" className="modal__form js-modal-form" method="get">
                            <label htmlFor="MaPhong" className="modal__label">Mã phòng</label>
                            <input type="text" className="modal__control" id="MaPhong" name="MaPhong" placeholder="Mã phòng" disabled
                                value={maphongEdit} 
                            />

                            <label htmlFor="TenPhong" className="modal__label">Tên phòng</label>
                            <input type="text" className="modal__control" id="TenPhong" name="TenPhong"  placeholder="Tên phòng" required
                                value={tenPhong}
                                onChange={(e)=>{
                                    settenPhong(e.target.value)
                                    console.log('set tenPhong')
                                }}
                            />
                            
                            <label htmlFor="TrangThaiPhong" className="modal__label">Trạng thái</label>
                            <select name="TrangThaiPhong" id="TrangThaiPhong" className="modal__select" required
                                value={trangthaiPhong}
                                onChange={(e)=>{
                                    settrangthaiPhong(e.target.value)
                                    console.log('set trangthaiPhong')
                                }}
                            >
                                <option value="Hoạt động" className="modal__option">Hoạt động</option>
                                <option value="Không hoạt động" className="modal__option">Không hoạt động</option>
                            </select>

                            {maphongEdit !=='MP00' && 
                                (<>
                                    <label className="modal__label">Xóa thiết bị (thiết bị được check sẽ bị xóa ra khỏi phòng)</label>
                                        <div className="modal__checkbox">
                                            {thietbiPhong.map((thietbi,index)=>{
                                                return (
                                                    <div className="modal__checkbox-item" key={index}>
                                                        <input type="checkbox" className="modal__checkbox-control" id={thietbi.MaTB+'edit'} name="ThietBiEdit"  required 
                                                            value={thietbi.MaTB} 
                                                            onChange={HandleChecked}
                                                        />
                                                        <label htmlFor={thietbi.MaTB+'edit'} className="modal__label">{thietbi.TenTB}</label>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                </>)
                            }

                            {maphongEdit !=='MP00' && (
                            <>
                                <label className="modal__label">Thêm thiết bị (thiết bị được check sẽ được thêm vào phòng)</label>
                                <div className="modal__checkbox">
                                    {thietbiKho.map((thietbi,index)=>{
                                        return (
                                            <div className="modal__checkbox-item" key={index}>
                                                <input type="checkbox" className="modal__checkbox-control" id={thietbi.MaTB+'add'} name="ThietBiAdd"  required 
                                                    value={thietbi.MaTB} 
                                                    onChange={HandleChecked}
                                                />
                                                <label htmlFor={thietbi.MaTB+'add'} className="modal__label">{thietbi.TenTB}</label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>)
                            }
                            
                        </form>                     
                    </div>
                    <div className="modal__footer">
                        <button className="btn-admin modal__btn js-btn-submit" onClick={EditRoom}>Sửa</button>
                        <button className="btn-admin modal__btn js-btn-cancel" onClick={HandleModalCancel}>Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRoomEdit