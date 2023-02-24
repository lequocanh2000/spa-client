// import '../../../assets/css/Admin/FooterAdmin.css'
import ModalTakeCareOfAdd from "./ModalTakeCareOfAdd"
import ModalTakeCareOfDetail from "./ModalTakeCareOfDetail"
import {useState, useEffect} from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
function TakeCareOf(){

    const { maNV } = useParams()

    const [listCustomer,setlistCustomer] = useState([]) //Danh sách những khách hàng cần được tư vấn
    const [maPhieu,setmaPhieu] = useState('')
    const [showList,setshowList] = useState(false)
    const [maKH,setmaKH] = useState('')

    useEffect(()=>{
        //Lấy danh sách những khách hàng cần được tư vấn
        Axios.get(`http://localhost:3001/getCustomerNeedHelp`).then((response)=>{
            console.log(response)
            setlistCustomer(response.data)
        })
    },[showList])





    //Detail
    const handleTakeCareOfDetail = (maKH)=>{
        console.log('Detail',maKH)
        setmaKH(maKH)
        handleModalTakeCareOfDetail()
    }

    //Add
    const handleTakeCareOfAdd = (maKH)=>{
        console.log('Add',maKH)
        setmaKH(maKH)
        handleModalTakeCareOfAdd()
    }

    //Delete
    const handleTakeCareOfDelete = (maKH)=>{
        const del = window.confirm('Bạn có muốn xóa')
        if(del){
            console.log('Delete',maKH)
            //Xóa khách hàng có MaKH = maKH
            Axios.delete(`http://localhost:3001/deleteCustomer/${maKH}`).then((response)=>{
                console.log(response)
                if(response.data==='Success'){
                    window.confirm('Xóa thành công')
                    setshowList(!showList)
                }else{
                    window.confirm('Xóa thất bại')
                }
            })
        }    
    }
    









    //Open modal add 
    function handleModalTakeCareOfAdd(e){
        const modalAdd = document.querySelector('.js-modal-add')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal add room')
        modalAdd.classList.add('open')
    }

    //Open modal edit 
    function handleModalTakeCareOfEdit(e){
        const modalEdit = document.querySelector('.js-modal-edit')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal edit')
        modalEdit.classList.add('open')
    }
    //Open modal detail 
    function handleModalTakeCareOfDetail(e){
        const modalDetail = document.querySelector('.js-modal-detail')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal detail')
        modalDetail.classList.add('open')
    }

    return (
        <>
            <div className="grid wide">
                <div className="content__card">
                    <div className="content__card-title">
                        <h3 className="content__card-text">
                            Chăm sóc khách hàng
                        </h3>
                    </div>
                    <div className="content__card-body">
                        <div className="content__card-body-wrapper">
                            <table className="content__card-table">
                                <thead>
                                    <tr>
                                        <th>Số</th>
                                        <th>Mã khách hàng</th>
                                        <th>Tên khách hàng</th>
                                        <th>Chi tiết</th>
                                        <th>Thao tác</th>        
                                    </tr>
                                </thead>
                                <tbody>
                                    {listCustomer.map((customer,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{customer.MaKH}</td>
                                                <td>{customer.TenKH}</td>
                                                <td>
                                                    <button className="btn-admin btn-detail js-btn-detail" onClick={()=>handleTakeCareOfDetail(customer.MaKH)}>Xem</button>
                                                </td>
                                                <td>
                                                    <button className="btn-admin btn-add" onClick={()=>handleTakeCareOfAdd(customer.MaKH)}>Lập ngay</button>
                                                    <button className="btn-admin btn-delete" onClick={()=>handleTakeCareOfDelete(customer.MaKH)}>Xóa</button>
                                                </td>
                                            </tr>
                                        )
                                    })}

                            
                                </tbody>
                            </table>
                        </div>            
                    </div>
                </div>
            </div>

            <ModalTakeCareOfAdd
                maKH={maKH}
                showList={showList}
                setshowList={setshowList}
            ></ModalTakeCareOfAdd>
            <ModalTakeCareOfDetail
                maKH={maKH}
                showList={showList}
                setshowList={setshowList}
            ></ModalTakeCareOfDetail>
        </>
    )
}

export default TakeCareOf