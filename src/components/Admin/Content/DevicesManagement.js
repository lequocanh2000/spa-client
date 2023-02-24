// import '../../../assets/css/Admin/DevicesManagement.css'
import user1 from '../../../assets/img/user/user1.png'
import user2 from '../../../assets/img/user/user2.PNG'
import user3 from '../../../assets/img/user/user3.PNG'
import ModalDeviceAdd from './ModalDeviceAdd'
import ModalDeviceEdit from './ModalDeviceEdit'
import Axios from 'axios'
import {useState, useEffect} from 'react'
function DevicesManagement(){
    const [listDevice, setlistDevice] = useState([]);
    const [showList,setshowList] = useState(false)
    const [matbEdit, setmatbEdit] = useState('');

    useEffect(()=>{
        Axios.get('http://localhost:3001/listDevice').then((response)=>{
            setlistDevice(response.data)
            console.log(response)
        })
    },[showList])

    //Delete device
    const handleDeviceDelete = (maTB) =>{
        console.log(maTB)
        const del = window.confirm('Bạn có chắc muốn xóa')
        console.log(del)
        if(del){
            Axios.delete(`http://localhost:3001/deleteDevice/${maTB}`).then((response)=>{
                console.log(response.data)
                window.confirm('Xóa thành công')
                setlistDevice(listDevice.filter((device)=>{
                    return device.MaTB != maTB
                }))
                setshowList(!showList)         
            })
        }
    }



    // window.addEventListener('load',()=>{
    //     Axios.get('http://localhost:3001/listDevice').then((response)=>{
    //         console.log([response])
    //         setlistDevice(response.data)
    //     })       
    // })




    // console.log(listDevice)

    // (()=>{
    //     Axios.get('http://localhost:3001/listDevice').then((response)=>{
    //         console.log([response])
    //         setlistDevice(response.data)
    //     })
    // })()

    

    // console.log(getListDevice())











    //Open modal add
    function handleModalDeviceAdd(e){
        const modalAdd = document.querySelector('.js-modal-add')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal add')
        modalAdd.classList.add('open')
    }

    // const [matbEdit, setmatbEdit] = useState('');
    // const [tentbEdit, settentbEdit] = useState('');
    // const [hinhanhtbEdit, sethinhanhtbEdit] = useState('');
    // useEffect(()=>{
    //     Axios.get('http://localhost:3001/listDevice').then((response)=>{
    //         setlistDevice(response.data)
    //         console.log(response)
    //     })
    // },[])


    
    //Open modal edit
    const handleModalDeviceEdit = (maTB) => {
        const modalEdit = document.querySelector('.js-modal-edit')    
        // Axios.get(`http://localhost:3001/getDeviceEdit/${maTB}`).then((response)=>{
        //     // setlistDevice(response.data)
        //     console.log(response.data[0].MaTB)
        //     console.log(response.data[0].TenTB)
        //     console.log(response.data[0].HinhAnh)
        //     setmatbEdit(response.data[0].MaTB)
        //     settentbEdit(response.data[0].TenTB)
        //     sethinhanhtbEdit(response.data[0].HinhAnh)
        setmatbEdit(maTB)
        // })
        modalEdit.classList.add('open')
        
        // setmatbEdit(maTB)
        // dataMaTB.maTB=maTB
        // ref.current=maTB
        // console.log(ref.current)
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal edit')
    }
    

    

    return (
        <div className="card-table">
            <div className="card-table__heading">
                <h3 className="card-table__heading-title">Thiết bị</h3>
                <div className="card-table__btn">
                    <button className="btn-admin btn-add js-btn-add" onClick={handleModalDeviceAdd}>Thêm</button>
                </div>
            </div>
            <div className="card-table__content">
                <table className="card-table__content-table">
                    <thead className="card-table__content-heading">
                        <tr>
                            <th className="card-table__content-title">Số</th>
                            <th className="card-table__content-title">Mã</th>
                            <th className="card-table__content-title">Hình</th>
                            <th className="card-table__content-title">Tên</th>
                            <th className="card-table__content-title">Vị trí</th>
                            <th className="card-table__content-title">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="card-table__content-body">
                        {listDevice.map((device,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{device.MaTB}</td>
                                    <td>
                                        <img src={device.HinhAnh} className="card-table__content-body-img"/>
                                    </td>
                                    <td>{device.TenTB}</td>
                                    <td>
                                        <p className="decvices-status">{device.TenPhong}</p>
                                    </td>
                                    <td>
                                        <button className="btn-admin btn-edit js-btn-edit" onClick={(e)=>handleModalDeviceEdit(device.MaTB)}>Sửa</button>
                                        <button className="btn-admin btn-delete" onClick={(e)=>handleDeviceDelete(device.MaTB)}>Xóa</button>
                                    </td>
                                </tr>
                            )
                        })}

                        {/* <tr>
                            <td>1</td>
                            <td>TB01</td>
                            <td>
                                <img src={user1} className="card-table__content-body-img"/>
                            </td>
                            <td>Máy hơi sương</td>
                            <td>
                                <p className="decvices-status">Hoạt động</p>
                            </td>
                            <td>
                                <button className="btn-admin btn-edit js-btn-edit" onClick={handleModalDeviceEdit}>Sửa</button>
                                <button className="btn-admin btn-delete">Xóa</button>
                            </td>
                        </tr> */}

                        {/* <tr>
                            <td>2</td>
                            <td>TB02</td>
                            <td>
                                <img src={user2} className="card-table__content-body-img"/>
                            </td>
                            <td>Máy hơi nước</td>
                            <td>
                                <p className="decvices-status">Hoạt động</p>
                            </td>
                            <td>
                                <button className="btn-admin btn-edit js-btn-edit">Sửa</button>
                                <button className="btn-admin btn-delete">Xóa</button>
                            </td>
                        </tr> */}

                        {/* <tr>
                            <td>3</td>
                            <td>TB03</td>
                            <td>
                                <img src={user3} className="card-table__content-body-img"/>
                            </td>
                            <td>Máy lazer</td>
                            <td>
                                <p className="decvices-status">Hoạt động</p>
                            </td>
                            <td>
                                <button className="btn-admin btn-edit js-btn-edit">Sửa</button>
                                <button className="btn-admin btn-delete">Xóa</button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <ModalDeviceAdd 
                dataDevice={{listDevice: listDevice ,setlistDevice: setlistDevice}} 
                showList={showList} 
                setshowList={setshowList}>    
            </ModalDeviceAdd>
            <ModalDeviceEdit 
                matbEdit={matbEdit} 
                listDevice={listDevice} 
                setlistDevice={setlistDevice}
                showList={showList} 
                setshowList={setshowList}>
            </ModalDeviceEdit>
        </div>
    )
}

export default DevicesManagement
// dataDevice={{
//     matbEdit: matbEdit ,
//     tentbEdit: tentbEdit ,
//     hinhanhtbEdit: hinhanhtbEdit ,
//     setmatbEdit: setmatbEdit,
//     setmatbEdit: settentbEdit,
//     setmatbEdit: sethinhanhtbEdit
// }}