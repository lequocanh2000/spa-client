// import '../../../assets/css/Admin/FooterAdmin.css'
import user1 from '../../../assets/img/user/user1.png'
import user2 from '../../../assets/img/user/user2.PNG'
import user3 from '../../../assets/img/user/user3.PNG'

import ModalStaffAdd from './ModalStaffAdd'
import ModalStaffDetail from './ModalStaffDetail'
import ModalStaffEdit from './ModalStaffEdit'
import Axios from 'axios'
import {useState, useEffect} from 'react'

function StaffsManagement(){
    const [listStaff, setlistStaff] = useState([]);
    const [showList,setshowList] = useState(false)
    const [manvEdit, setmanvEdit] = useState('');
    const [manvDetail, setmanvDetail] = useState('')


    useEffect(()=>{
        Axios.get('http://localhost:3001/listStaff').then((response)=>{
            setlistStaff(response.data)
            console.log(response)
        })
    },[showList])



    //Edit staff
    const handleStaffEdit = (maNV)=>{
        console.log('update',maNV)
        setmanvEdit(maNV)
        handleModalStaffEdit()
    }

    //Datail staff
    const handleStaffDetail = (maNV)=>{
        console.log('detail',maNV)
        setmanvDetail(maNV)
        handleModalStaffDetail()
    }

    //Delete staff
    const handleStaffDelete = (maNV) =>{
        console.log(maNV)
        const del = window.confirm('Bạn có chắc muốn xóa')
        console.log(del)
        if(del){
            Axios.delete(`http://localhost:3001/deleteStaff/${maNV}`).then((response)=>{
                console.log(response.data)
                window.confirm('Xóa thành công')
                setlistStaff(listStaff.filter((staff)=>{
                    return staff.MaNV !== maNV
                }))
                setshowList(!showList)         
            })
        }
    }
    









    //Open modal add 
    function handleModalStaffAdd(e){
        const modalAdd = document.querySelector('.js-modal-add')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal add room')
        modalAdd.classList.add('open')
    }

    //Open modal edit 
    function handleModalStaffEdit(e){
        const modalEdit = document.querySelector('.js-modal-edit')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal edit')
        modalEdit.classList.add('open')
    }
    //Open modal detail 
    function handleModalStaffDetail(e){
        const modalDetail = document.querySelector('.js-modal-detail')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal detail')
        modalDetail.classList.add('open')
    }


    return (
        <div className="card-table">
            <div className="card-table__heading">
                <h3 className="card-table__heading-title">Nhân viên</h3>
                <div className="card-table__btn">
                    <button className="btn-admin btn-add js-btn-add" onClick={handleModalStaffAdd}>Thêm</button>
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
                            <th className="card-table__content-title">Chi tiết</th>
                            <th className="card-table__content-title">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="card-table__content-body">
                        {listStaff.map((staff,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{staff.MaNV}</td>
                                    <td>
                                        <img src={staff.HinhAnh} alt='img' className="card-table__content-body-img"/>
                                    </td>
                                    <td>{staff.TenNV}</td>
                                    <td>
                                        <button className="btn-admin btn-detail js-btn-detail" onClick={()=>handleStaffDetail(staff.MaNV)}>Xem</button>
                                    </td>
                                    <td>
                                        <button className="btn-admin btn-edit js-btn-edit" onClick={()=>handleStaffEdit(staff.MaNV)}>Sửa</button>
                                        <button className="btn-admin btn-delete" onClick={()=>handleStaffDelete(staff.MaNV)}>Xóa</button>
                                    </td>
                                </tr>
                            )
                        })}
                        {/* <tr>
                            <td>1</td>
                            <td>NV01</td>
                            <td>
                                <img src={user1} className="card-table__content-body-img"/>
                            </td>
                            <td>Lê Văn A</td>
                            <td>
                                <button className="btn-admin btn-detail js-btn-detail" onClick={handleModalStaffDetail}>Xem</button>
                            </td>
                            <td>
                                <button className="btn-admin btn-edit js-btn-edit" onClick={handleModalStaffEdit}>Sửa</button>
                                <button className="btn-admin btn-delete">Xóa</button>
                            </td>
                        </tr> */}

                        {/* <tr>
                            <td>2</td>
                            <td>NV02</td>
                            <td>
                                <img src={user2} className="card-table__content-body-img"/>
                            </td>
                            <td>Trần Văn B</td>
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
                            <td>NV03</td>
                            <td>
                                <img src={user3} className="card-table__content-body-img"/>
                            </td>
                            <td>Nguyễn Thị B</td>
                            <td>
                                <button className="btn-admin btn-detail js-btn-detail">Xem</button>
                            </td>
                            <td>
                                <button className="btn-admin btn-edit js-btn-edit">Sửa</button>
                                <button className="btn-admin btn-delete">Xóa</button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <ModalStaffAdd
                listStaff={listStaff}
                setlistStaff={setlistStaff}
                showList={showList}
                setshowList={setshowList}
            ></ModalStaffAdd>
            <ModalStaffDetail
                manvDetail={manvDetail}
            ></ModalStaffDetail>
            <ModalStaffEdit
                manvEdit={manvEdit}
                listStaff={listStaff}
                setlistStaff={setlistStaff}
                showList={showList}
                setshowList={setshowList}
            ></ModalStaffEdit>
        </div>
    )
}

export default StaffsManagement