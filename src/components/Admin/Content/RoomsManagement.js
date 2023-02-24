// import '../../../assets/css/Admin/RoomsManagement.css'
import ModalRoomAdd from "./ModalRoomAdd"
import ModalRoomEdit from "./ModalRoomEdit"
import ModalRoomDetail from "./ModalRoomDetail"
import Axios from 'axios'
import {useState, useEffect} from 'react'

function RoomsManagement(){

    const [listRoom, setlistRoom] = useState([]);
    const [showList,setshowList] = useState(false)
    const [maphongEdit, setmaphongEdit] = useState('');
    const [maphongDetail, setmaphongDetail] = useState('');
    const [showListDetail,setshowListDetail] = useState(false)

    useEffect(()=>{
        Axios.get('http://localhost:3001/listRoom').then((response)=>{
            setlistRoom(response.data)
            console.log(response)
        })
        console.log('Đã gọi useEffect của RoomsManagement')

    },[showList])

    //Detail room
    const handleRoomDetail = (maPhong) => {
        console.log('detail',maPhong)
        setmaphongDetail(maPhong)
        handleModalRoomDetail()
    }

    //Edit room
    const handleRoomEdit = (maPhong) => {
        console.log('update',maPhong)
        setmaphongEdit(maPhong)
        handleModalRoomEdit()
    }

    //Delete room
    const handleRoomDelete = (maPhong) => {
        console.log('delete',maPhong)
        const del = window.confirm('Bạn có chắc muốn xóa')
        console.log(del)
        // getMaTBinRoom
        if(del){

            Axios.get(`http://localhost:3001/getDeviceInRoom/${maPhong}`).then((response)=>{
                console.log(response.data.length)
                if(response.data.length !== 0){
                    return response.data
                    // console.log(response.data)
                }else{
                    Axios.delete(`http://localhost:3001/deleteRoom/${maPhong}`).then((response)=>{
                        console.log(response.data)
                        window.confirm('Xóa thành công')
                        // setlistRoom(listRoom.filter((room)=>{
                        //     return room.MaPhong !== maPhong
                        // }))
                        setshowList(!showList)         
                    })
                }
            })
            .then((decvices)=>{

                decvices.forEach((decvice)=>{
                    const maTB = decvice.MaTB
                    const data = {
                        maPhong: 'MP00',
                        maTB
                    }
                    console.log(maTB)
                    Axios.post('http://localhost:3001/updateMaPhongOfDevice',data).then((response)=>{
                        console.log(response.data)
                        if(response.data==='Success'){
                            return maPhong
                        }
                    })
                    .then((maPhong)=>{
                        Axios.delete(`http://localhost:3001/deleteRoom/${maPhong}`).then((response)=>{
                            console.log(response.data)     
                        })
                    })
                })
                window.confirm('Xóa thành công')
                setshowList(!showList)
            })



            
        }
    }









    //Open modal add 
    function handleModalRoomAdd(e){
        const modalAdd = document.querySelector('.js-modal-add')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal add room')
        modalAdd.classList.add('open')
    }

    //Open modal edit 
    function handleModalRoomEdit(e){
        const modalEdit = document.querySelector('.js-modal-edit')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal edit')
        modalEdit.classList.add('open')
    }
    //Open modal detail 
    function handleModalRoomDetail(e){
        const modalDetail = document.querySelector('.js-modal-detail')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal detail')
        modalDetail.classList.add('open')
    }

    return (
        <div className="card-table">
            <div className="card-table__heading">
                <h3 className="card-table__heading-title">Phòng</h3>
                <div className="card-table__btn">
                    <button className="btn-admin btn-add js-btn-add" onClick={handleModalRoomAdd}>Thêm</button>
                </div>
                
            </div>
            <div className="card-table__content">
                <table className="card-table__content-table">
                    <thead className="card-table__content-heading">
                        <tr>
                            <th className="card-table__content-title">Số</th>
                            <th className="card-table__content-title">Mã</th>
                            <th className="card-table__content-title">Tên</th>
                            <th className="card-table__content-title">Trạng thái</th>
                            <th className="card-table__content-title">Chi tiết</th>
                            <th className="card-table__content-title">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="card-table__content-body">
                        
                        {listRoom.map((room,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{room.MaPhong}</td>
                                    <td>{room.TenPhong}</td>
                                    <td>
                                        <p className="decvices-status">{room.TrangThai}</p>
                                    </td>
                                    <td>
                                        <button className="btn-admin btn-detail js-btn-detail" onClick={()=>handleRoomDetail(room.MaPhong)}>Xem</button>
                                    </td>
                                    <td>
                                        <button className="btn-admin btn-edit js-btn-edit" onClick={()=>handleRoomEdit(room.MaPhong)}>Sửa</button>
                                        <button className="btn-admin btn-delete" onClick={()=>handleRoomDelete(room.MaPhong)}>Xóa</button>
                                    </td>
                                </tr>
                            )
                        })}

                        {/* <tr>
                            <td>1</td>
                            <td>P01</td>
                            <td>Phòng 1</td>
                            <td>
                                <p className="decvices-status">Hoạt động</p>
                            </td>
                            <td>
                                <button className="btn-admin btn-detail js-btn-detail" onClick={handleModalRoomDetail}>Xem</button>
                            </td>
                            <td>
                                <button className="btn-admin btn-edit js-btn-edit" onClick={handleModalRoomEdit}>Sửa</button>
                                <button className="btn-admin btn-delete">Xóa</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>P02</td>
                            <td>Phòng 2</td>
                            <td>
                                <p className="decvices-status">Hoạt động</p>
                            </td>
                            <td>
                                <button className="btn-admin btn-detail js-btn-detail">Xem</button>
                            </td>
                            <td>
                                <button className="btn-admin btn-edit js-btn-edit">Sửa</button>
                                <button className="btn-admin btn-delete">Xóa</button>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>P03</td>
                            <td>Phòng 3</td>
                            <td>
                                <p className="decvices-status">Hoạt động</p>
                            </td>
                            <td>
                                <button className="btn-admin btn-detail js-btn-detail" >Xem</button>
                            </td>
                            <td>
                                <button className="btn-admin btn-edit js-btn-edit">Sửa</button>
                                <button className="btn-admin btn-delete">Xóa</button>
                            </td>
                        </tr> */}
                    </tbody>

                </table>
            </div>

            <ModalRoomAdd
                listRoom={listRoom}
                setlistRoom={setlistRoom}
                showList={showList}
                setshowList={setshowList}
            ></ModalRoomAdd>
            <ModalRoomDetail
                maphongDetail={maphongDetail}
                showListDetail={showListDetail}
                setshowListDetail={setshowListDetail}
            ></ModalRoomDetail>
            <ModalRoomEdit
                maphongEdit={maphongEdit}
                showList={showList}
                setshowList={setshowList}
                showListDetail={showListDetail}
                setshowListDetail={setshowListDetail}
            ></ModalRoomEdit>

        </div>
    )
}

export default RoomsManagement