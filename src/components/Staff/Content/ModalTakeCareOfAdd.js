import {useState, useEffect} from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
function ModalTakeCareOfAdd({maKH, showList, setshowList}){

    const { maNV } = useParams()

    const [maPhong, setmaPhong] = useState('')
    const [sttGio, setsttGio] = useState('')
    const [ngaySD, setngaySD] = useState('')


    const [tenKH,settenKH] = useState('')
    const [gioitinhKH,setgioitinhKH] = useState('Nam')
    const [namsinhKH,setnamsinhKH] = useState('')
    const [emailKH,setemailKH] = useState('')
    const [sdtKH,setsdtKH] = useState('')
    const [diachiKH,setdiachiKH] = useState('')


    const [listPhong,setlistPhong] = useState([])
    const [listThoiGian,setlistThoiGian] = useState([])
    const [listDichVu,setlistDichVu] = useState([])
    
    
    // const [phong,setphong] = useState('')
    // const [thoiGian,setthoiGian] = useState('')
    const [dichVu,setdichVu] = useState('')

    useEffect(()=>{
        Axios.get(`http://localhost:3001/getListRoom`).then((response)=>{
            console.log(response)
            setlistPhong(response.data)
            // return response.data.length
            // setdichvuKH(response.data)
        })

        Axios.get(`http://localhost:3001/getListTime`).then((response)=>{
            console.log(response)
            setlistThoiGian(response.data)
        })

        Axios.get(`http://localhost:3001/getListService`).then((response)=>{
            console.log(response)
            setlistDichVu(response.data)
        })

        //Lấy thông thin khách hàng cần tư vấn có MaKH = maKH
        Axios.get(`http://localhost:3001/getCustomerNeedHelp/${maKH}`).then((response)=>{
            console.log(response)
            const customer = response.data[0]
            settenKH(customer.TenKH)
            setsdtKH(customer.SDT)
            setemailKH(customer.Email)
        })

    },[])




















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
        // const modalDialog = document.querySelector('.js-modal-dialog')
        // console.log(modalDialogDetail)
        // console.log(e.target)
        // console.log('Click modal dialog')
        e.stopPropagation()

    }

    function RegisterServicesAddFast(e){
        const ListService = document.getElementsByName('DichVu')
        const servicesAdd = []
        console.log(ListService)
        ListService.forEach((service,index)=>{
            if(service.checked){
                servicesAdd.push(service.getAttribute('value'))
            }
        })
        console.log(servicesAdd)
        e.stopPropagation()

        if(servicesAdd.length!==0){
            console.log('Thêm')
            //gọi API lấy số cuối của mã phiếu
            Axios.get('http://localhost:3001/getFinalMaPhieu').then((response)=>{
                let socuoi 
                console.log(typeof response.data.length,response.data.length)
                if(response.data.length === 0 ){
                    socuoi = 1
                }else{
                    socuoi = (response.data[0].SoCuoiMaPhieu) + 1
                }
                const maPhieu = 'PDK0' + socuoi
                console.log(maPhieu)
                return maPhieu
            }).then((maPhieu)=>{
                if(maPhieu){
                    const customer = {
                        maKH: maKH,
                        tenKH,
                        gioitinhKH,
                        namsinhKH,
                        emailKH,
                        sdtKH,
                        diachiKH,
                    }

                    if(tenKH !== '' && namsinhKH !== '' && sdtKH !== '' && maPhong !== '' && sttGio !== '' && ngaySD !== ''){
                        Axios.put('http://localhost:3001/updateCustomer',customer).then((response)=>{
                            console.log(response.data)
                            if(response.data==='Success'){
                                return response.data
                            }
                        }).then((success)=>{
                            if(success==='Success'){

                                const currentDay = new Date()
                                const day = currentDay.getDate()
                                const month = currentDay.getMonth() + 1
                                const year = currentDay.getFullYear()
                                const ngayLapPhieu = `${year.toString()}-${month.toString()}-${day.toString()}`
                                console.log(ngayLapPhieu)
                                console.log(ngaySD)

                                const registration = {
                                    maPhieu,
                                    maKH,
                                    maNV,
                                    maPhong,
                                    sttGio,
                                    ngaySD,
                                    ngayLapPhieu
                                }

                                Axios.post('http://localhost:3001/addRegistration',registration).then((response)=>{
                                    console.log(response.data)
                                    if(response.data==='Success'){
                                        return maPhieu
                                    }
                                }).then((maPhieu)=>{
                                    if(maPhieu){
                                        servicesAdd.forEach((service)=>{
                                            const regisAndService = {
                                                maPhieu,
                                                maDV: service
                                            }
                                            Axios.post('http://localhost:3001/addRegistrationAndService',regisAndService).then((response)=>{
                                                console.log(response.data)
                                                if(response.data==='Success'){
                                                    console.log('Đúng ròi nha')
                                                }else{
                                                    console.log('Saiiiii')
                                                }
                                            })
                                        })
                                    }
                                    window.confirm('Thêm phiếu thành công')
                                    setshowList(!showList)
                                    settenKH('')
                                    setgioitinhKH('Nam')
                                    setnamsinhKH('')
                                    setemailKH('')
                                    setsdtKH('')
                                    setdiachiKH('')
                                    setmaPhong('')
                                    setsttGio('')
                                    setngaySD('')
                                    HandleCloseModal()
                                })
                            }
                        })
                    }else{
                        window.confirm('Vui lòng điền đẩy đủ TÊN, NĂM SINH, SĐT của khách hàng, PHÒNG, GIỜ, NGÀY SỬ DỤNG không được để trống')
                    }  
                }  
            })
        }else{
            window.confirm('Vui lòng chọn dịch vụ')
        }
    }

    return (
        <div className="modal js-modal-add" onClick={HandleCloseModal}>
            <div className="modal__dialog js-modal-dialog" onClick={HandleModalDialog}>
                <div className="modal__content">
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                Lập phiếu đăng ký
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <form action="#" className="modal__form js-modal-form" method="get">

                            <div className="gird">
                                <div className="row">
                                    <div className="col pc-6 mb-6">
                                        {/* <label htmlFor="MaPhieu" className="modal__label">Mã phiếu</label>
                                        <input type="text" className="modal__control" id="MaPhieu" name="MaPhieu" defaultValue="" placeholder="Mã phiếu" required/>
                                        */}
                                        <label htmlFor="MaKH" className="modal__label">Mã khách hàng</label>
                                        <input type="text" className="modal__control" id="MaKH" name="MaKH"  placeholder="Mã khách hàng" required
                                            value={maKH} disabled
                                        />

                                        <label htmlFor="TenKH" className="modal__label">Tên khách hàng</label>
                                        <input type="text" className="modal__control" id="TenKH" name="TenKH" placeholder="Tên khách hàng" required
                                            value={tenKH}
                                            onChange={(e)=>{
                                                settenKH(e.target.value)
                                                console.log('set tenKH')
                                            }}
                                        />

                                        <label className="modal__label">Giới tính</label>
                                        <select name="GioiTinhKH" id="" className="modal__select" required
                                            onChange={(e)=>{
                                                setgioitinhKH(e.target.value)
                                                console.log('set gioitinhKH')
                                            }}
                                        >
                                            <option value="Nam" className="modal__option">Nam</option>
                                            <option value="Nữ" className="modal__option">Nữ</option>
                                        </select>

                                        <label htmlFor="NgaySinhKH" className="modal__label">Năm sinh</label>
                                        <input type="text" className="modal__control" id="NgaySinhKH" name="NgaySinhKH" placeholder="Nhập năm sinh" required
                                            value={namsinhKH}
                                            onChange={(e)=>{
                                                setnamsinhKH(e.target.value)
                                                console.log('set namsinhKH')
                                            }}
                                        />

                                        <label htmlFor="EmailKH" className="modal__label">Email</label>
                                        <input type="text" className="modal__control" id="EmailKH" name="EmailKH" placeholder="abc@gmail.com" required
                                            value={emailKH}
                                            onChange={(e)=>{
                                                setemailKH(e.target.value)
                                                console.log('set emailKH ')
                                            }}
                                        />

                                        <label htmlFor="SdtKH" className="modal__label">Số điện thoại</label>
                                        <input type="text" className="modal__control" id="SdtKH" name="SdtKH" placeholder="SĐT khách hàng" required
                                            value={sdtKH}
                                            onChange={(e)=>{
                                                setsdtKH(e.target.value)
                                                console.log('set sdtKH')
                                            }}
                                        />

                                        
                                    </div>

                                    <div className="col pc-6 mb-6">
                                        
                                        <label htmlFor="DiaChiKH" className="modal__label">Địa chỉ khách hàng</label>
                                        <textarea type="text" className="modal__control" id="DiaChiKH" name="DiaChiKH" rows={2} placeholder="Địa chỉ liên lạc" required
                                            value={diachiKH}
                                            onChange={(e)=>{
                                                setdiachiKH(e.target.value)
                                                console.log('set diachiKH')
                                            }}
                                        />

                                        <label className="modal__label">Phòng</label>
                                        <select name="Phong" id="Phong" className="modal__select" required 
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

                                        <label htmlFor="ngaySD" className="modal__label">Ngày sử dụng</label>
                                        <input type="text" className="modal__control" id="ngaySD" name="ngaySD" placeholder="yyyy-mm-dd" required
                                            value={ngaySD}
                                            onChange={(e)=>{
                                                setngaySD(e.target.value)
                                                console.log('set setngaySD')
                                            }}
                                        />

                                        <label className="modal__label">Giờ</label>
                                        <select name="Gio" id="Gio" className="modal__select" required
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

                                        <label className="modal__label">Dịch vụ</label>
                                        <div className="modal__checkbox">
                                            {listDichVu.map((dichvu,index)=>{
                                                return (
                                                    <div key={index} className="modal__checkbox-item">
                                                        <input type="checkbox" className="modal__checkbox-control" id={'dichvu'+index} name="DichVu"  required
                                                            value={dichvu.MaDV}
                                                        />
                                                        <label htmlFor={'dichvu'+index} className="modal__label">{dichvu.TenDV}</label>
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
                        <button className="btn-admin modal__btn js-btn-submit" onClick={RegisterServicesAddFast}>Lập</button>
                        <button className="btn-admin modal__btn js-btn-cancel" onClick={HandleModalCancel}>Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalTakeCareOfAdd