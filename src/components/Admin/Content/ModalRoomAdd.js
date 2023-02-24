import { useState,useEffect,memo,useRef } from 'react'
import  Axios from 'axios'

function ModalRoomAdd({listRoom, setlistRoom, showList, setshowList}){


    const [tenPhong, settenPhong] = useState('');
    const [devices, setdevices] = useState([]); //Danh sách các thiết bị có trong kho để thêm vào phòng
    // const [devicePhong, setdevicePhong] = useState([]); //Khi checkbox thì mã thiết bị sẽ được thêm vào đây
    const [showListDevice, setshowListDevice] = useState(false); //Dùng cái này để render lại mỗi khi thêm Phòng
    // const [success,setsuccess] = useState(false)
    const success = useRef(false)

    useEffect(()=>{
        Axios.get('http://localhost:3001/getDeviceToAddRoom').then((response)=>{
            setdevices(response.data)
            console.log(response)
        })
    },[showListDevice])
























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

        //Handle checkbox
        function HandleChecked(e){
            // const modalDialogDetail = document.querySelector('.js-modal-dialog')
            // console.log(modalDialogDetail)
            // console.log(e.target)
            console.log(e.target.value)
            // setdevicePhong(devicePhong => [...devicePhong,e.target.value])
            // console.log('Click checkbox')
            e.stopPropagation()
        }

        const AddRoom1 = ()=>{
            console.log('hello')
        }


        function AddRoom(e){
            const checkBoxs = document.querySelectorAll('.modal__checkbox-control')
            const devices = []
            // console.log(checkBoxs)
            checkBoxs.forEach((checkBox,index)=>{
                if(checkBox.checked){
                    devices.push(checkBox.getAttribute('value'))
                }
                // console.log(checkBox.getAttribute('value'))
            })
            console.log(devices)
            console.log(devices.length)
            // console.log('Click checkbox')
            // e.stopPropagation()

            Axios.get('http://localhost:3001/getFinalMaPhong').then((response)=>{
                let socuoi 
                console.log(typeof response.data[0],response.data[0])
                if(response.data[0] === undefined){
                    socuoi = 1
                }else{
                    socuoi = (response.data[0].SoCuoiMaPhong) + 1
                }
                const maPhong = 'MP0' + socuoi
                return maPhong
            }).then((maPhong) => {
               
                if(maPhong!==''&&tenPhong!==''){
                    const room = {
                        maPhong,
                        tenPhong                
                    }
                    if(devices.length===0){
                        Axios.post('http://localhost:3001/addRoom',room).then((response)=>{
                            console.log(response.data)
                            HandleCloseModal()
                            window.confirm('Thêm thành công')
                            // setlistRoom(listRoom=>[...listRoom,{
                            //     MaPhong: maPhong,
                            //     TenPhong: tenPhong
                            // }])
                            setshowList(!showList)
                        })
                    }else{
                        Axios.post('http://localhost:3001/addRoom',room).then((response)=>{
                            console.log(response.data)
                            if(response.data==='Success'){
                                return room.maPhong
                            }else{
                                console.log('Added room failed')
                            }
                            // HandleCloseModal()
                            // window.confirm('Thêm thành công')
                            // setlistRoom(listRoom=>[...listRoom,{
                            //     MaPhong: maPhong,
                            //     TenPhong: tenPhong
                            // }])
                    
                            // setshowList(!showList)
                        }).then((maPhong)=>{
                            
                            devices.forEach((maTB)=>{
                                const data = {
                                    maPhong,
                                    maTB
                                }

                                Axios.post('http://localhost:3001/updateMaPhongOfDevice',data).then((response)=>{
                                    console.log(response.data)
                                })
                            })
                            
                            HandleCloseModal()
                            window.confirm('Thêm thành công')
                            setshowList(!showList)
                            settenPhong('')
                            setshowListDevice(!showListDevice)                        
                        })
                    }      
                }else{
                    console.log('Enter again')
                    window.confirm('Vui lòng nhập lại')
                }
            })
        }



    return (
        <div className="modal js-modal-add" onClick={HandleCloseModal}>
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
                            {/* <label htmlFor="MaPhong" className="modal__label">Mã phòng</label>
                            <input type="text" className="modal__control" id="MaPhong" name="MaPhong" defaultValue="" placeholder="Mã phòng" required/> */}

                            <label htmlFor="TenPhong" className="modal__label">Tên phòng</label>
                            <input type="text" className="modal__control" id="TenPhong" name="TenPhong" placeholder="Tên phòng" required
                                value={tenPhong}
                                onChange={(e)=>{
                                    settenPhong(e.target.value)
                                    console.log('set tenPhong')
                                }}
                            />
                            
                            {/* <label htmlFor="TrangThaiPhong" className="modal__label">Trạng thái</label>
                            <select name="TrangThaiPhong" id="TrangThaiPhong" className="modal__select" required>
                                <option defaultValue="" className="modal__option">--Trạng thái--</option>
                                <option defaultValue="Hoạt động" className="modal__option">Hoạt động</option>
                                <option defaultValue="Không hoạt động" className="modal__option">Không hoạt động</option>
                            </select> */}

                            <label className="modal__label">Thiết bị</label>
                            <div className="modal__checkbox">
                                {devices.map((device,index)=>{
                                    return (
                                        <div className="modal__checkbox-item" key={index}>
                                            <input type="checkbox" className="modal__checkbox-control" id={device.MaTB} name={device.MaTB} required
                                                value={device.MaTB}  
                                                onChange={HandleChecked}/>
                                            <label htmlFor={device.MaTB} className="modal__label">{device.TenTB}</label>
                                        </div>
                                    )
                                })}
                                {/* <div className="modal__checkbox-item">
                                    <input type="checkbox" className="modal__checkbox-control" id="AddDichVu1" name="DichVu" defaultValue="Truyen MaDV vao day 'vd:DV01'" required onChange={HandleChecked}/>
                                    <label htmlFor="AddDichVu1" className="modal__label">Máy xong hơi</label>
                                </div>
                                
                                <div className="modal__checkbox-item">
                                    <input type="checkbox" className="modal__checkbox-control" id="AddDichVu2" name="DichVu" defaultValue="Truyen MaDV vao day 'vd:DV02'" required onChange={HandleChecked}/>
                                    <label htmlFor="AddDichVu2" className="modal__label">Máy lazer</label>
                                </div>

                                <div className="modal__checkbox-item">
                                    <input type="checkbox" className="modal__checkbox-control" id="AddDichVu3" name="DichVu" defaultValue="Truyen MaDV vao day 'vd:DV03'" required onChange={HandleChecked}/>
                                    <label htmlFor="AddDichVu3" className="modal__label">Máy lazer 2</label>
                                </div>      */}
                            </div>
                        </form>                     
                    </div>
                    <div className="modal__footer">
                        <button className="btn-admin modal__btn js-btn-submit" onClick={AddRoom}>Thêm</button>
                        <button className="btn-admin modal__btn js-btn-cancel" onClick={HandleModalCancel}>Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRoomAdd