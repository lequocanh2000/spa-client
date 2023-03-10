// import '../../../assets/css/Admin/FooterAdmin.css'
import ModalRegisterServicesAdd from './ModalRegisterServicesAdd'
import ModalRegisterServicesDetail from './ModalRegisterServicesDetail'
import ModalRegisterServicesEdit from './ModalRegisterServicesEdit'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Axios from 'axios'

function RegisterServices(){

    const { maNV } = useParams()
    console.log( maNV )
    // const [tenNV,settenNV] = useState('')
    // const [gioitinhNV,setgioitinhNV] = useState('')
    // const [namsinhNV,setnamsinhNV] = useState('')
    // const [emailNV,setemailNV] = useState('')
    // const [sdtNV,setsdtNV] = useState('')
    // const [matkhauNV,setmatkhauNV] = useState('')
    // const [diachiNV,setdiachiNV] = useState('')
    // const [hinhanhNV,sethinhanhNV] = useState('')

    // const [maPDK,setmaPDK] = useState('')
    const [maPhieuDetail,setmaPhieuDetail] = useState('')
    const [maPhieuEdit,setmaPhieuEdit] = useState('')
    const [maKHedit,setmaKHedit] = useState('')
    const [listRegistration,setlistRegistration] = useState([])
    const [showList,setshowList] = useState(false)
    const [showListDetail,setshowListDetail] = useState(false)
    



    useEffect(()=>{
        Axios.get(`http://localhost:3001/getStaff/${maNV}`).then((pesponse)=>{
            console.log(pesponse)
            // const staff = pesponse.data[0]
            // settenNV(staff.TenNV)
            // setgioitinhNV(staff.GioiTinh)
            // setnamsinhNV(staff.NamSinh)
            // setemailNV(staff.Email)
            // setsdtNV(staff.SDT)
            // setmatkhauNV(staff.MatKhau)
            // setdiachiNV(staff.DiaChiNV)
            // sethinhanhNV(staff.HinhAnh)
            
        })
        Axios.get(`http://localhost:3001/getRegistration_Customer_Staff`).then((pesponse)=>{
            console.log(pesponse)
            setlistRegistration(pesponse.data)
            // const staff = pesponse.data[0]
            // settenNV(staff.TenNV)
            // setgioitinhNV(staff.GioiTinh)
            // setnamsinhNV(staff.NamSinh)
            // setemailNV(staff.Email)
            // setsdtNV(staff.SDT)
            // setmatkhauNV(staff.MatKhau)
            // setdiachiNV(staff.DiaChiNV)
            // sethinhanhNV(staff.HinhAnh)
        })
        console.log('useEffect c???a RegisterServices')
    },[showList])




    //Detail 
    const handleRegisterServicesDetail = (maPhieu) => {
        console.log('Detail',maPhieu)
        setmaPhieuDetail(maPhieu)
        handleModalRegisterServicesDetail()
    }
    //Edit
    const handleRegisterServicesEdit = (maPhieu,maKH) => {
        console.log('Edit',maPhieu,maKH)
        setmaPhieuEdit(maPhieu)
        setmaKHedit(maKH)
        handleModalRegisterServicesEdit()
    }
    //Delete
    const handleRegisterServicesDelete = (maPhieu,maKH) => {
        console.log('Delete',maPhieu,maKH)
        const del = window.confirm('B???n c?? ch???c mu???n x??a kh??ng?')
        if(del){
            // X??a c??c m???u tin c?? MaPhieu = maPhieu trong b???ng PhieuDangKy_DichVu
            Axios.delete(`http://localhost:3001/deleteRegistrationAndService/${maPhieu}`).then((response)=>{
                console.log(response)
                return response.data
            }).then((success)=>{
                if(success==='Success'){
                    // X??a m???u tin c?? MaPhieu = maPhieu trong b???ng PhieuDangKy
                    Axios.delete(`http://localhost:3001/deleteRegistration/${maPhieu}`).then((response)=>{
                        console.log(response)
                        return response.data
                    }).then((success)=>{
                        if(success==='Success'){
                            // X??a kh??ch h??ng c?? MaKH = maKH
                            Axios.delete(`http://localhost:3001/deleteCustomer/${maKH}`).then((response)=>{
                                console.log(response)
                                if(response.data==='Success'){
                                    window.confirm('X??a th??nh c??ng')
                                    setshowList(!showList)
                                }
                            })
                        }
                    })
                }
            })
        }
    }







    //Open modal add 
    function handleModalRegisterServicesAdd(e){
        const modalAdd = document.querySelector('.js-modal-add')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal add room')
        modalAdd.classList.add('open')
    }

    //Open modal edit 
    function handleModalRegisterServicesEdit(e){
        const modalEdit = document.querySelector('.js-modal-edit')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal edit')
        modalEdit.classList.add('open')
    }
    //Open modal detail 
    function handleModalRegisterServicesDetail(e){
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
                            Phi???u ????ng k??
                        </h3>
                    </div>
                    <div className="content__card-body">
                        <div className="content__card-body-wrapper">
                            <div className="content__card-body-heading">
                                <button className="btn-admin btn-add js-btn-add" onClick={handleModalRegisterServicesAdd}>L???p phi???u</button>
                            </div>
                            <table className="content__card-table">
                                <thead>
                                    <tr>
                                        <th>S???</th>
                                        <th>M?? phi???u</th>
                                        <th>T??n KH</th>
                                        <th>Ng?????i l???p</th>
                                        <th>Chi ti???t</th>
                                        <th>Thao t??c</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listRegistration.map((regis,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{regis.MaPhieu}</td>
                                                <td>{regis.TenKH}</td>
                                                { regis.TenNV === 'Kh??ch h??ng' ? (<td style={{color: 'red'}}>{regis.TenNV}</td>) : <td>{regis.TenNV}</td>}
                                                {/* <td>{regis.TenNV}</td> */}
                                                <td>
                                                    <button className="btn-admin btn-detail js-btn-detail" onClick={()=>handleRegisterServicesDetail(regis.MaPhieu)}>Xem</button>
                                                </td>
                                                <td>
                                                    <button className="btn-admin btn-edit js-btn-edit" onClick={()=>handleRegisterServicesEdit(regis.MaPhieu,regis.MaKH)}>S???a</button>
                                                    <button className="btn-admin " onClick={()=>handleRegisterServicesDelete(regis.MaPhieu,regis.MaKH)}>X??a</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    {/* <tr>
                                        <td>1</td>
                                        <td>MP01</td>
                                        <td>L?? V??n Th??</td>
                                        <td>L?? V??n Th??</td>
                                        <td>
                                            <button className="btn-admin btn-detail js-btn-detail" onClick={handleModalRegisterServicesDetail}>Xem</button>
                                        </td>
                                        <td>
                                            <button className="btn-admin btn-edit js-btn-edit" onClick={handleModalRegisterServicesEdit}>S???a</button>
                                            <button className="btn-admin ">X??a</button>
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>            
                    </div>
                </div>
            </div>

            <ModalRegisterServicesAdd
                showList={showList}
                setshowList={setshowList}
            ></ModalRegisterServicesAdd>
            <ModalRegisterServicesDetail
                maPhieuDetail={maPhieuDetail}
                setmaPhieuDetail={setmaPhieuDetail}
                showListDetail={showListDetail}
                setshowListDetail={setshowListDetail}
            ></ModalRegisterServicesDetail>
            <ModalRegisterServicesEdit
                maPhieuEdit={maPhieuEdit}
                setmaPhieuEdit={setmaPhieuEdit}
                maKHedit={maKHedit}
                setmaKHedit={setmaKHedit}
                showList={showList}
                setshowList={setshowList}
                showListDetail={showListDetail}
                setshowListDetail={setshowListDetail}
            ></ModalRegisterServicesEdit>
        </>

    )
}

export default RegisterServices

// style={{color: 'red'}}