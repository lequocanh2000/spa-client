import '../../../assets/css/Admin/FooterAdmin.css'
import ModalBillsAdd from './ModalBillsAdd'
import ModalBillsDetail from './ModalBillsDetail'
import ModalBillsEdit from './ModalBillsEdit'
import {useState, useEffect} from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
function Bills(){
    const { maNV } = useParams()

    // const [tenNV,settenNV] = useState('')
    // const [maKH,setmaKH] = useState('')
    // const [tenKH,settenKH] = useState('')
    // const [gioitinhKH,setgioitinhKH] = useState('')
    // const [namsinhKH,setnamsinhKH] = useState('')
    // const [emailKH,setemailKH] = useState('')
    // const [sdtKH,setsdtKH] = useState('')
    // const [diachiKH,setdiachiKH] = useState('')
    const [maHD,setmaHD] = useState('')
    const [maPhieu,setmaPhieu] = useState('')
    const [listBill, setlistBill] = useState([]);
    const [showList, setshowList] = useState([]);



    useEffect(()=>{
        Axios.get(`http://localhost:3001/getListBill/${maNV}`).then((response)=>{
            console.log(response)
            setlistBill(response.data)
            // return response.data.length
            // setdichvuKH(response.data)
        })
        console.log('useEffect của Bills')
    },[showList])


    const handleBillDetail = (maHD,maPhieu) =>{
        console.log('Detail',maHD,maPhieu)
        setmaHD(maHD)
        setmaPhieu(maPhieu)
        handleModalBillDetail()
    }








    //Open modal add 
    function handleModalBillAdd(e){
        const modalAdd = document.querySelector('.js-modal-add')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal add room')
        modalAdd.classList.add('open')
    }

    //Open modal edit 
    function handleModalBillEdit(e){
        const modalEdit = document.querySelector('.js-modal-edit')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal edit')
        modalEdit.classList.add('open')
    }
    //Open modal detail 
    function handleModalBillDetail(e){
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
                            Hóa đơn
                        </h3>
                    </div>
                    <div className="content__card-body">
                        <div className="content__card-body-wrapper">
                            <div className="content__card-body-heading">
                                <button className="btn btn-add js-btn-add" onClick={handleModalBillAdd}>Lập hóa đơn</button>
                            </div>
                            <table className="content__card-table">
                                <thead>
                                    <tr>
                                        <th>Số</th>
                                        <th>Mã hóa đơn</th>
                                        <th>Tên khách hàng</th>
                                        <th>Chi tiết</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listBill.map((bill,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{bill.MaHD}</td>
                                                <td>{bill.TenKH}</td>
                                                <td>
                                                    <button className="btn btn-detail js-btn-detail" onClick={()=>handleBillDetail(bill.MaHD,bill.MaPhieu)}>Xem</button>
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

            <ModalBillsAdd
                showList={showList}
                setshowList={setshowList}
            ></ModalBillsAdd>
            <ModalBillsDetail
                maHD={maHD}
                maPhieu={maPhieu}
            ></ModalBillsDetail>
        </>
    )
}

export default Bills