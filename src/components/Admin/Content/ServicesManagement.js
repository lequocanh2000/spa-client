// import '../../../assets/css/Admin/ServicesManagement.css'
import ModalServiceAdd from "./ModalServiceAdd"
import ModalServiceEdit from "./ModalServiceEdit"
import Axios from 'axios'
import {useState, useEffect} from 'react'
function ServicesManagement(){

    const [listService,setlistService] = useState([])
    const [showList,setshowList] = useState(false)
    const [madvEdit, setmadvEdit] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:3001/listService').then((response)=>{
            setlistService(response.data)
            console.log(typeof response.data[0].Gia)
        })
        
    }, [showList]);







    //Edit service
    const handleServiceEdit = (maDV) => {
        console.log('update',maDV)
        setmadvEdit(maDV)

        handleModalServiceEdit()
    }

    //Delete service
    const handleServiceDelete = (maDV) => {
        console.log(maDV)
        const del = window.confirm('Bạn có chắc muốn xóa')
        console.log(del)
        if(del){
            Axios.delete(`http://localhost:3001/deleteService/${maDV}`).then((response)=>{
                console.log(response.data)
                window.confirm('Xóa thành công')
                setlistService(listService.filter((service)=>{
                    return service.MaTB !== maDV
                }))
                setshowList(!showList)         
            })
        }
    }




    //Open modal add 
    function handleModalServiceAdd(e){
        const modalAdd = document.querySelector('.js-modal-add')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal add room')
        modalAdd.classList.add('open')
    }

    //Open modal edit 
    function handleModalServiceEdit(e){
        const modalEdit = document.querySelector('.js-modal-edit')
        // console.log(e.target)
        // console.log(modalDetail)
        // console.log('open modal edit')
        modalEdit.classList.add('open')
    }


    return (
        <div className="card-table">
            <div className="card-table__heading">
                <h3 className="card-table__heading-title">Dịch vụ</h3>
                <div className="card-table__btn">
                    <button className="btn-admin btn-add js-btn-add" onClick={handleModalServiceAdd}>Thêm</button>
                </div>
                
            </div>
            <div className="card-table__content">
                <table className="card-table__content-table">
                    <thead className="card-table__content-heading">
                        <tr>
                            <th className="card-table__content-title">Số</th>
                            <th className="card-table__content-title">Mã</th>
                            <th className="card-table__content-title">Dịch vụ</th>
                            <th className="card-table__content-title">Giá</th>
                            <th className="card-table__content-title">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="card-table__content-body">
                        {listService.map((service,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{service.MaDV}</td>
                                    <td>{service.TenDV}</td>
                                    <td>{service.Gia.toLocaleString()}</td>
                                    <td>
                                        <button className="btn-admin btn-edit js-btn-edit" onClick={(e)=>handleServiceEdit(service.MaDV)}>Sửa</button>
                                        <button className="btn-admin btn-delete" onClick={(e)=>handleServiceDelete(service.MaDV)}>Xóa</button>
                                    </td>
                                </tr>
                            )
                        })}
                        {/* <tr>
                            <td>1</td>
                            <td>DV01</td>
                            <td>Làm sáng da</td>
                            <td>200.000</td>
                            <td>
                                <button className="btn-admin btn-edit js-btn-edit" onClick={handleModalServiceEdit}>Sửa</button>
                                <button className="btn-admin btn-delete">Xóa</button>
                            </td>
                        </tr> */}

                        {/* <tr>
                            <td>2</td>
                            <td>DV02</td>
                            <td>Làm trắng da</td>
                            <td>200.000</td>
                            <td>
                                <button className="btn-admin btn-edit js-btn-edit">Sửa</button>
                                <button className="btn-admin btn-delete">Xóa</button>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>DV03</td>
                            <td>Tẩy da chết</td>
                            <td>200.000</td>
                            <td>
                                <button className="btn-admin btn-edit js-btn-edit">Sửa</button>
                                <button className="btn-admin btn-delete">Xóa</button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <ModalServiceAdd
                listService={listService}
                setlistService={setlistService}
                showList={showList}
                setshowList={setshowList}
            ></ModalServiceAdd>
            <ModalServiceEdit
                madvEdit={madvEdit} 
                listService={listService}
                setlistService={setlistService}
                showList={showList}
                setshowList={setshowList}
            ></ModalServiceEdit>
        </div>
    )
}

export default ServicesManagement