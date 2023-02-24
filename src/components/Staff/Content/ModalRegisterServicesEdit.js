import {useState, useEffect} from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
function ModalRegisterServicesEdit({maPhieuEdit,setmaPhieuEdit, showListDetail, setshowListDetail,maKHedit,setmaKHedit,showList,setshowList}){

    const { maNV } = useParams()

    const [maPhong, setmaPhong] = useState('')
    const [sttGio, setsttGio] = useState('');
    const [ngaySD,setngaySD] = useState('')
    const [ngayLapPhieu,setngayLapPhieu] = useState('')

    const [tenKH,settenKH] = useState('')
    const [gioitinhKH,setgioitinhKH] = useState('')
    const [namsinhKH,setnamsinhKH] = useState('')
    const [emailKH,setemailKH] = useState('')
    const [sdtKH,setsdtKH] = useState('')
    const [diachiKH,setdiachiKH] = useState('')

    const [listPhong,setlistPhong] = useState([])
    const [listThoiGian,setlistThoiGian] = useState([])
    const [listDichVuRegistered,setlistDichVuRegistered] = useState([])
    const [listDichVu,setlistDichVu] = useState([])

    const [showAgain,setshowAgain] = useState(false)

    
    useEffect(()=>{
        //Lấy thông tin của phiếu khám từ maPhieuEdit
        Axios.get(`http://localhost:3001/getRegistration_Customer_Room_Time/${maPhieuEdit}`).then((pesponse)=>{
            console.log('Thông tin phiếu sửa')
            console.log(pesponse)
            const Registration = pesponse.data[0]
            settenKH(Registration.TenKH)
            setgioitinhKH(Registration.GioiTinh)
            setnamsinhKH(Registration.NamSinh)
            setemailKH(Registration.Email)
            setsdtKH(Registration.SDT)
            setdiachiKH(Registration.DiaChiKH)
            setmaPhong(Registration.MaPhong)
            setsttGio(Registration.STT)
            setngaySD(Registration.NgaySuDungMoi)
            setngayLapPhieu(Registration.NgayLapPhieu)
        })

        //Lấy các dịch vụ có MaPhieu = maPhieuEdit trong bảng PhieuDangKy_DichVu
        Axios.get(`http://localhost:3001/getRegistration_Services/${maPhieuEdit}`).then((pesponse)=>{
            console.log('Các dịch vụ có trong phiếu')
            console.log(pesponse)
            setlistDichVuRegistered(pesponse.data)

        })

        //Lấy các dịch vụ có không có trong MaPhieu = maPhieuEdit trong bảng PhieuDangKy_DichVu (Những dịch vụ mà trong phiếu đăng ký không có)
        Axios.get(`http://localhost:3001/getListSevice_NotIn_Registration/${maPhieuEdit}`).then((pesponse)=>{
            console.log('Các dịch vụ không được đăng kí trong phiếu')
            console.log(pesponse)
            setlistDichVu(pesponse.data)
        })

        //Lấy thông tin phòng
        Axios.get(`http://localhost:3001/getListRoom`).then((response)=>{
            console.log(response)
            setlistPhong(response.data)
            // return response.data.length
            // setdichvuKH(response.data)
        })
        // Lấy thông tin thời gian
        Axios.get(`http://localhost:3001/getListTime`).then((response)=>{
            console.log(response)
            setlistThoiGian(response.data)
        })


    },[maPhieuEdit,showAgain])


















    //Click btn Cancel
    function HandleModalCancel(e){
        const btnCancelModal = document.querySelector('.js-btn-cancel')
        const modalEdit = document.querySelector('.js-modal-edit')
        modalEdit.classList.remove('open')
        console.log('Click button cancel modal edit')
        e.stopPropagation()
    }

    //Click modal
    function HandleCloseModal(e){
        const modalEdit = document.querySelector('.js-modal-edit')
        modalEdit.classList.remove('open')
        console.log('Close modal edit')
    }

    //Click modal dialog
    function HandleModalDialog(e){
        const modalDialog = document.querySelector('.js-modal-dialog')
        console.log('Click modal dialog')
        e.stopPropagation()

    }

    const HandleRegisterServicesEdit = ()=>{
        const ListServiceDelete = document.getElementsByName('DichVuDelete')
        const ListServiceAdd = document.getElementsByName('DichVuAdd')
        const servicesDelete = []
        const servicesAdd = []
        console.log(ListServiceDelete)
        console.log(ListServiceAdd)

        ListServiceDelete.forEach((service,index)=>{
            if(service.checked){
                servicesDelete.push(service.getAttribute('value'))
            }
        })

        ListServiceAdd.forEach((service,index)=>{
            if(service.checked){
                servicesAdd.push(service.getAttribute('value'))
            }
        })
        console.log('Danh sách dịch vụ xóa:',servicesDelete,servicesDelete.length)
        console.log('Danh sách dịch vụ thêm:',servicesAdd,servicesAdd.length)
        console.log('tenKH',tenKH)
        console.log('gioitinhKH',gioitinhKH)
        console.log('namsinhKH',namsinhKH)
        console.log('emailKH',emailKH)
        console.log('sdtKH',sdtKH)
        console.log('diachiKH',diachiKH)
        console.log('maPhong',maPhong)
        console.log('sstGio',sttGio)
        console.log('ngaySD',ngaySD)
      
        if(servicesDelete.length!==0 && servicesAdd.length!==0){

            //Cập nhật lại thông tin khách hàng TenKH, GioiTinh, NamSinh, Email, SDT, DiaChiKH có MaKH = maKHedit
            if( tenKH !== '' && namsinhKH !== '' && sdtKH !== '' && maPhong !== '' && sttGio !== '' && ngaySD !== ''){
                const customer = {
                    maKH: maKHedit,
                    tenKH,
                    gioitinhKH,
                    namsinhKH,
                    emailKH,
                    sdtKH,
                    diachiKH,
                }

                Axios.put(`http://localhost:3001/updateCustomer`,customer).then((pesponse)=>{
                    console.log('Update khách hàng')
                    console.log(pesponse)
                    if(pesponse.data==='Success'){
                        return pesponse.data
                    }else{
                        window.confirm('Cập nhật thất bại')
                    }
                }).then((success)=>{
                    //Cập nhật lại thông tin phiếu đăng ký MaPhong, STT
                    if(success==='Success'){

                        const registration = {
                            maPhieu: maPhieuEdit,
                            maNV,
                            maPhong,
                            sttGio,
                            ngaySD
                        }

                        Axios.put(`http://localhost:3001/updateRegistration`,registration).then((pesponse)=>{
                            console.log('Update phiếu đăng ký')
                            console.log(pesponse)
                            if(pesponse.data==='Success'){
                                return pesponse.data
                            }else{
                                window.confirm('Cập nhật thất bại')
                            }
                        }).then((success)=>{

                            if(success==='Success'){
                                //Xóa các dịch vụ có MaPhieu = maPhieuEdit
                                servicesDelete.forEach((service)=>{
                                    Axios.delete(`http://localhost:3001/deleteRegistrationAndService/${maPhieuEdit}/${service}`).then((response)=>{
                                        console.log(response)
                                    })
                                })
                            
                                //Thêm các dịch vụ có MaPhieu = maPhieuEdit
                                servicesAdd.forEach((service)=>{
                                    const data = {
                                            maPhieu: maPhieuEdit,
                                            maDV: service
                                        }
                                    Axios.post(`http://localhost:3001/addRegistrationAndService`,data).then((response)=>{
                                        console.log(response)
                                    })
                                })

                                window.confirm('Cập nhật thành công')
                                setshowAgain(!showAgain)
                                setshowListDetail(!showListDetail)
                                setshowList(!showList)
                                HandleCloseModal()
                            }else{
                                window.confirm('Cập nhật thất bại')
                            }
                        })
                    }
                })
            }else{
                window.confirm('Vui lòng điền đẩy đủ TÊN, NĂM SINH, SĐT của khách hàng, PHÒNG, GIỜ và NGÀY SỬ DỤNG không được để trống')
            }
        
        }else 
            if(servicesDelete.length !== 0 && servicesAdd.length === 0){
                //Cập nhật lại thông tin khách hàng TenKH, GioiTinh, NamSinh, Email, SDT, DiaChiKH có MaKH = maKHedit
                if( tenKH !== '' && namsinhKH !== '' && sdtKH !== '' && maPhong !== '' && sttGio !== '' && ngaySD !== ''){
                    const customer = {
                        maKH: maKHedit,
                        tenKH,
                        gioitinhKH,
                        namsinhKH,
                        emailKH,
                        sdtKH,
                        diachiKH,
                    }

                    Axios.put(`http://localhost:3001/updateCustomer`,customer).then((pesponse)=>{
                        console.log('Update khách hàng')
                        console.log(pesponse)
                        if(pesponse.data==='Success'){
                            return pesponse.data
                        }else{
                            window.confirm('Cập nhật thất bại')
                        }
                    }).then((success)=>{
                        //Cập nhật lại thông tin phiếu đăng ký MaPhong, STT
                        if(success==='Success'){

                            const registration = {
                                maPhieu: maPhieuEdit,
                                maNV,
                                maPhong,
                                sttGio,
                                ngaySD
                            }

                            Axios.put(`http://localhost:3001/updateRegistration`,registration).then((pesponse)=>{
                                console.log('Update phiếu đăng ký')
                                console.log(pesponse)
                                if(pesponse.data==='Success'){
                                    return pesponse.data
                                }else{
                                    window.confirm('Cập nhật thất bại')
                                }
                            }).then((success)=>{

                                if(success==='Success'){
                                    //Xóa các dịch vụ có MaPhieu = maPhieuEdit
                                    servicesDelete.forEach((service)=>{
                                        Axios.delete(`http://localhost:3001/deleteRegistrationAndService/${maPhieuEdit}/${service}`).then((response)=>{
                                            console.log(response)
                                        })
                                    })
                                    window.confirm('Cập nhật thành công')
                                    setshowAgain(!showAgain)
                                    setshowListDetail(!showListDetail)
                                    setshowList(!showList)
                                    HandleCloseModal()
                                }else{
                                    window.confirm('Cập nhật thất bại')
                                }
                            })
                        }
                    })
                }else{
                    window.confirm('Vui lòng điền đẩy đủ TÊN, NĂM SINH, SĐT của khách hàng, PHÒNG ,GIỜ , NGÀY SỬ DỤNG không được để trống')
                }
            }else 
                if(servicesDelete.length === 0 && servicesAdd.length !== 0){
                    //Cập nhật lại thông tin khách hàng TenKH, GioiTinh, NamSinh, Email, SDT, DiaChiKH có MaKH = maKHedit
                    if( tenKH !== '' && namsinhKH !== '' && sdtKH !== '' && maPhong !== '' && sttGio !== '' && ngaySD !== ''){
                        const customer = {
                            maKH: maKHedit,
                            tenKH,
                            gioitinhKH,
                            namsinhKH,
                            emailKH,
                            sdtKH,
                            diachiKH,
                        }

                        Axios.put(`http://localhost:3001/updateCustomer`,customer).then((pesponse)=>{
                            console.log('Update khách hàng')
                            console.log(pesponse)
                            if(pesponse.data==='Success'){
                                return pesponse.data
                            }else{
                                window.confirm('Cập nhật thất bại')
                            }
                        }).then((success)=>{
                            //Cập nhật lại thông tin phiếu đăng ký MaPhong, STT
                            if(success==='Success'){

                                const registration = {
                                    maPhieu: maPhieuEdit,
                                    maPhong,
                                    maNV,
                                    sttGio,
                                    ngaySD
                                }

                                Axios.put(`http://localhost:3001/updateRegistration`,registration).then((pesponse)=>{
                                    console.log('Update phiếu đăng ký')
                                    console.log(pesponse)
                                    if(pesponse.data==='Success'){
                                        return pesponse.data
                                    }else{
                                        window.confirm('Cập nhật thất bại')
                                    }
                                }).then((success)=>{

                                    if(success==='Success'){
                                        //Thêm các dịch vụ có MaPhieu = maPhieuEdit
                                        servicesAdd.forEach((service)=>{
                                            const data = {
                                                    maPhieu: maPhieuEdit,
                                                    maDV: service
                                                }
                                            Axios.post(`http://localhost:3001/addRegistrationAndService`,data).then((response)=>{
                                                console.log(response)
                                            })
                                        })

                                        window.confirm('Cập nhật thành công')
                                        setshowAgain(!showAgain)
                                        setshowListDetail(!showListDetail)
                                        setshowList(!showList)
                                        HandleCloseModal()
                                    }else{
                                        window.confirm('Cập nhật thất bại')
                                    }
                                })
                            }
                        })
                    }else{
                        window.confirm('Vui lòng điền đẩy đủ TÊN, NĂM SINH, SĐT của khách hàng, PHÒNG, GIỜ , NGÀY SỬ DỤNG không được để trống')
                    }
                }else{
                    //Cập nhật lại thông tin khách hàng TenKH, GioiTinh, NamSinh, Email, SDT, DiaChiKH có MaKH = maKHedit
                    if( tenKH !== '' && namsinhKH !== '' && sdtKH !== '' && maPhong !== '' && sttGio !== '' && ngaySD !== ''){
                        const customer = {
                            maKH: maKHedit,
                            tenKH,
                            gioitinhKH,
                            namsinhKH,
                            emailKH,
                            sdtKH,
                            diachiKH,
                        }

                        Axios.put(`http://localhost:3001/updateCustomer`,customer).then((pesponse)=>{
                            console.log('Update khách hàng')
                            console.log(pesponse)
                            if(pesponse.data==='Success'){
                                return pesponse.data
                            }else{
                                window.confirm('Cập nhật thất bại')
                            }
                        }).then((success)=>{
                            //Cập nhật lại thông tin phiếu đăng ký MaPhong, STT
                            if(success==='Success'){

                                const registration = {
                                    maPhieu: maPhieuEdit,
                                    maPhong,
                                    maNV,
                                    sttGio,
                                    ngaySD
                                }

                                Axios.put(`http://localhost:3001/updateRegistration`,registration).then((pesponse)=>{
                                    console.log('Update phiếu đăng ký')
                                    console.log(pesponse)
                                    if(pesponse.data==='Success'){
                                        window.confirm('Cập nhật thành công')
                                        setshowAgain(!showAgain)
                                        setshowListDetail(!showListDetail)
                                        setshowList(!showList)
                                        HandleCloseModal()
                                    }else{
                                        window.confirm('Cập nhật thất bại')
                                    }
                                })
                            }
                        })
                    }else{
                        window.confirm('Vui lòng điền đẩy đủ TÊN, NĂM SINH, SĐT của khách hàng, PHÒNG, GIỜ, NGÀY SỬ DỤNG không được để trống')
                    }
                }
    }


    return (
        <div className="modal js-modal-edit" onClick={HandleCloseModal}>
            <div className="modal__dialog js-modal-dialog" onClick={HandleModalDialog}>
                <div className="modal__content">
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                Sửa phiếu
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <form action="#" className="modal__form js-modal-form" method="get">
                            <div className="gird">
                                <div className="row">
                                    <div className="col pc-6 mb-6">
                                        <label htmlFor="MaPhieu" className="modal__label">Mã phiếu</label>
                                        <input type="text" className="modal__control" id="MaPhieu" name="MaPhieu"  placeholder="Mã phiếu" required disabled
                                            value={maPhieuEdit}
                                        />

                                        <label htmlFor="TenKH" className="modal__label">Tên khách hàng</label>
                                        <input type="text" className="modal__control" id="TenKH" name="TenKH" placeholder="Tên khách hàng" required
                                            value={tenKH}
                                            onChange={(e)=>{
                                                settenKH(e.target.value)
                                                console.log('set tenKH edit')
                                            }}
                                        />

                                        <label className="modal__label">Giới tính</label>
                                        <select name="GioiTinhKHedit" id="GioiTinhKHedit" className="modal__select" required
                                            value={gioitinhKH}
                                            onChange={(e)=>{
                                                setgioitinhKH(e.target.value)
                                                console.log('set gioitinhKH edit')
                                            }}
                                        >
                                            <option value="Nam" className="modal__option">Nam</option>
                                            <option value="Nữ" className="modal__option">Nữ</option>
                                        </select>

                                        <label htmlFor="NgaySinhKHedit" className="modal__label">Năm sinh</label>
                                        <input type="text" className="modal__control" id="NgaySinhKHedit" name="NgaySinhKHedit" placeholder="dd/mm/yyyy" required
                                            value={namsinhKH}
                                            onChange={(e)=>{
                                                setnamsinhKH(e.target.value)
                                                console.log('set namsinhKH edit')
                                            }}
                                        />
                                    </div>

                                    <div className="col pc-6 mb-6">
                                        
                                    <label htmlFor="MaKHedit" className="modal__label">Mã khách hàng</label>
                                        <input type="text" className="modal__control" id="MaKHedit" name="MaKHedit"  placeholder="Mã khách hàng" required disabled
                                            value={maKHedit} 
                                        />


                                        <label htmlFor="EmailKHedit" className="modal__label">Email</label>
                                        <input type="text" className="modal__control" id="EmailKHedit" name="EmailKHedit" placeholder="abc@gmail.com" required
                                            value={emailKH}
                                            onChange={(e)=>{
                                                setemailKH(e.target.value)
                                                console.log('set emailKH edit')
                                            }}
                                        />

                                        <label htmlFor="SdtKHedit" className="modal__label">Số điện thoại</label>
                                        <input type="text" className="modal__control" id="SdtKHedit" name="SdtKHedit" placeholder="SĐT khách hàng" required
                                            value={sdtKH}
                                            onChange={(e)=>{
                                                setsdtKH(e.target.value)
                                                console.log('set sdtKH edit')
                                            }}
                                        />


                                        <label htmlFor="DiaChiKHedit" className="modal__label">Địa chỉ khách hàng</label>
                                        <textarea type="text" className="modal__control" id="DiaChiKHedit" name="DiaChiKHedit" rows={2} placeholder="Địa chỉ liên lạc" required
                                            value={diachiKH}
                                            onChange={(e)=>{
                                                setdiachiKH(e.target.value)
                                                console.log('set diachiKH')
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col pc-6 mb-6">
                                        <label className="modal__label">Phòng</label>
                                        <select name="PhongEdit" id="PhongEdit" className="modal__select" required 
                                            value={maPhong}
                                            onChange={(e)=>{
                                                setmaPhong(e.target.value)
                                                console.log(e.target.value)
                                            }}
                                        >
                                            {listPhong.map((Phong,index)=>{
                                                return (
                                                    Phong.MaPhong === 'KHDK' 
                                                        ? <option key={index} value={''} className="modal__option">{'--Chọn phòng--'}</option> 
                                                        : <option key={index} value={Phong.MaPhong} className="modal__option">{Phong.TenPhong}</option>
                                                )
                                            })}
                                        </select>

                                        <label className="modal__label">DV đã ĐK (check để xóa)</label>
                                        <div className="modal__checkbox">
                                            {listDichVuRegistered.map((dichvuRegistered,index)=>{
                                                return (
                                                    <div className="modal__checkbox-item" key={index}>
                                                        <input type="checkbox" className="modal__control" id={dichvuRegistered.MaDV + 'edit'} name="DichVuDelete" required 
                                                             value={dichvuRegistered.MaDV}
                                                        />
                                                        <label htmlFor={dichvuRegistered.MaDV + 'edit'} className="modal__label">{`${index+1}. ${dichvuRegistered.TenDV}`}</label>
                                                    </div>
                                                )
                                            })}                                        
                                        </div>
                                    </div>
                                    <div className="col pc-6 mb-6">

                                        <label htmlFor="ngaySDedit" className="modal__label">Ngày sử dụng: </label>
                                        <input type="text" className="modal__control" id="ngaySDedit" name="ngaySDedit" placeholder="yyyy-mm-dd" required
                                            value={ngaySD}
                                            onChange={(e)=>{
                                                setngaySD(e.target.value)
                                                console.log('set ngaySD edit')
                                            }}
                                        />

                                        <label className="modal__label">Giờ</label>
                                        <select name="GioEdit" id="GioEdit" className="modal__select" required
                                            value={sttGio}
                                            onChange={(e)=>{
                                                setsttGio(e.target.value)
                                                console.log(e.target.value)
                                            }}
                                        >
                                            {listThoiGian.map((thoigian,index)=>{
                                                return (
                                                    thoigian.STT === 0 
                                                    ? <option key={index}  value={''} className="modal__option">{'--Chọn giờ--'}</option>
                                                    : <option key={index}  value={thoigian.STT} className="modal__option">{thoigian.Gio}</option>
                                                )
                                            })}

                                        </select>

                                        <label className="modal__label">DV chưa ĐK (check để thêm)</label>
                                        <div className="modal__checkbox">
                                            {listDichVu.map((dichvu,index)=>{
                                                return (
                                                    <div className="modal__checkbox-item" key={index}>
                                                        <input type="checkbox" className="modal__control" id={dichvu.MaDV + 'edit'} name="DichVuAdd" required 
                                                             value={dichvu.MaDV}
                                                        />
                                                        <label htmlFor={dichvu.MaDV + 'edit'} className="modal__label">{`${index+1}. ${dichvu.TenDV}`}</label>
                                                    </div>
                                                )
                                            })}                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal__footer">
                        <button className="btn-admin modal__btn js-btn-submit" onClick={HandleRegisterServicesEdit}>Sửa</button>
                        <button className="btn-admin modal__btn js-btn-cancel" onClick={HandleModalCancel}>Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRegisterServicesEdit