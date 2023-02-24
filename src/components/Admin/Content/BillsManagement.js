import '../../../assets/css/Admin/BillsManagement.css'
import ModalBillDetail from './ModalBillDetail'
import {useState, useEffect} from 'react'
import Axios from 'axios'
function BillsManagement(){


    const [maHD,setmaHD] = useState('')
    const [maPhieu,setmaPhieu] = useState('')
    const [listBill, setlistBill] = useState([]);
    const [showList, setshowList] = useState(false);

    useEffect(()=>{
        Axios.get(`http://localhost:3001/ListBill`).then((response)=>{
            console.log(response)
            setlistBill(response.data)
            // return response.data.length
            // setdichvuKH(response.data)
        })
        console.log('useEffect của BillsManagement')
    },[showList])

    // Detail 
    const handleBillDetail = (maHD,maPhieu)=>{
        console.log('detail',maHD,maPhieu)
        setmaHD(maHD)
        setmaPhieu(maPhieu)
        handleModalBillDetail()
    }
    //Delete
    const handleBillDelete = (maHD,maPhieu,maKH)=>{
        console.log('delete',maHD,maPhieu,maKH)
        const del = window.confirm('Bạn có muốn xóa không?')
        if(del){
            Axios.delete(`http://localhost:3001/deleteBill/${maHD}`).then((response)=>{
                console.log(response.data)
                return response.data
            }).then((success)=>{
                if(success==='Success'){
                    // Xóa các mẫu tin có MaPhieu = maPhieu trong bảng PhieuDangKy_DichVu
                    Axios.delete(`http://localhost:3001/deleteRegistrationAndService/${maPhieu}`).then((response)=>{
                        console.log(response)
                        return response.data
                    }).then((success)=>{
                        if(success==='Success'){
                            // Xóa mẫu tin có MaPhieu = maPhieu trong bảng PhieuDangKy
                            Axios.delete(`http://localhost:3001/deleteRegistration/${maPhieu}`).then((response)=>{
                                console.log(response)
                                return response.data
                            }).then((success)=>{
                                if(success==='Success'){
                                    // Xóa khách hàng có MaKH = maKH
                                    Axios.delete(`http://localhost:3001/deleteCustomer/${maKH}`).then((response)=>{
                                        console.log(response)
                                        if(response.data==='Success'){
                                            window.confirm('Xóa thành công')
                                            setshowList(!showList)
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    }


        
    const handleModalBillDetail = (e)=>{
        const modalDetail = document.querySelector('.js-modal-detail')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal detail')
        modalDetail.classList.add('open')
    }

    return (
        <div className="card-table">
            <div className="card-table__heading">
                <h3 className="card-table__heading-title">Hóa đơn</h3>
            </div>
            <div className="card-table__content">
                <table className="card-table__content-table">
                    <thead className="card-table__content-heading">
                        <tr>
                            <th className="card-table__content-title">Số</th>
                            <th className="card-table__content-title">Mã</th>
                            <th className="card-table__content-title">Tên khách hàng</th>
                            <th className="card-table__content-title">Chi tiết</th>
                            <th className="card-table__content-title">Thao tác</th>                            
                        </tr>
                    </thead>
                    <tbody className="card-table__content-body">
                        {listBill.map((bill,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{bill.MaHD}</td>
                                    <td>{bill.TenKH}</td>
                                    <td>
                                        <button className="btn-admin btn-detail js-btn-detail" onClick={()=>handleBillDetail(bill.MaHD,bill.MaPhieu)} >Xem</button>
                                    </td>
                                    <td>
                                        <button className="btn-admin btn-delete" onClick={()=>handleBillDelete(bill.MaHD,bill.MaPhieu,bill.MaKH)}>Xóa</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
            <ModalBillDetail
                maHD = {maHD}
                maPhieu = {maPhieu}
            ></ModalBillDetail>
        </div>
    )
}

export default BillsManagement