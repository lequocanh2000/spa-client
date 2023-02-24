import { useState,memo } from 'react'
import  Axios from 'axios'

function ModalStaffAdd({listStaff, setlistStaff, showList, setshowList}){
    const [showImgPreview, setshowImgPreview] = useState(false)
    const [tenNV, settenNV] = useState('');
    const [gioitinhNV, setgioitinhNV] = useState('Nam');
    const [namsinhNV, setnamsinhNV] = useState('');
    const [emailNV, setemailNV] = useState('');
    const [sdtNV, setsdtNV] = useState('');
    const [diachiNV, setdiachiNV] = useState('');
    const [matkhauNV, setmatkhauNV] = useState('');
    const [hinhanhNV, sethinhanhNV] = useState('');



    const addStaff = ()=>{
        Axios.get('http://localhost:3001/getFinalMaNV').then((response)=>{
            let socuoi 
            console.log(typeof response.data[0],response.data[0])
            if(response.data[0] === undefined){
                socuoi = 1
            }else{
                socuoi = (response.data[0].SoCuoiMaNV) + 1
            }
            const maNV = 'NV0' + socuoi
            return maNV
        }).then((maNV) => {
            const staff = {
                maNV,
                tenNV,
                gioitinhNV,
                namsinhNV,
                emailNV,
                sdtNV,
                diachiNV,
                matkhauNV,
                hinhanhNV
            }
            console.log(staff)
            if(tenNV!=='' && gioitinhNV!=='' && namsinhNV !==''&&
               emailNV!=='' && sdtNV!=='' && diachiNV!=='' && matkhauNV!==''){
                Axios.post('http://localhost:3001/addStaff',staff).then((response)=>{
                    console.log(response.data)
                    if(response.data==='Success'){
                        window.confirm('Thêm thành công')
                        HandleCloseModal()
                        settenNV('')
                        setgioitinhNV('Nam')
                        setnamsinhNV('')
                        setemailNV('')
                        setsdtNV('')
                        setdiachiNV('')
                        setmatkhauNV('')
                        setshowImgPreview(false)
                        setshowList(!showList)
                    }
                    // setlistStaff(listStaff=>[...listStaff,{
                    //     MaNV: maNV,
                    //     TenNV: tenNV,
                    //     GioiTinh: gioitinhNV,
                    //     NamSinh: namsinhNV,
                    //     Email: emailNV,
                    //     SDT: sdtNV,
                    //     DiaChiNV: diachiNV,
                    //     MatKhau: matkhauNV,
                    //     HinhAnh: hinhanhNV

                    // }])
                })
                
            }else{
                console.log('Enter again')
                window.confirm('Vui lòng nhập đầy đủ thông tin')
            }
        })
        
    }















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
        // const modalDialogDetail = document.querySelector('.js-modal-dialog')
        // console.log(modalDialogDetail)
        // console.log(e.target)
        // console.log('Click modal dialog')
        e.stopPropagation()

    }

    //Preview image
    const HandleFileStaffAdd = (e)=>{
        const modalImg = document.querySelector('.js-modal-preview-img')
        let file = e.target.files[0]
        console.log(file)
        let fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = (e) => {
            const url = e.target.result
            sethinhanhNV(url)
            setshowImgPreview(true)
            console.log(url)
            // modalImg.setAttribute('src',url)
            // modalImg.style.zIndex = "1"
        }
    }

    return (
        <div className="modal js-modal-add" onClick={HandleCloseModal}>
            <div className="modal__dialog js-modal-dialog" onClick={HandleModalDialog}>
                <div className="modal__content">
                    <div className="modal__heading">
                        <div className="modal__heading-title">
                            <h1 className="modal__heading-text">
                                Thêm nhân viên
                            </h1>
                        </div>
                    </div>
                    <div className="modal__body">
                        <form action="#" className="modal__form js-modal-form" method="get">
                            <div className="grid">
                                <div className="row">
                                    <div className="col pc-6 mb-6">
                                        {/* <label htmlFor="MaNV" className="modal__label">Mã</label>
                                        <input type="text" className="modal__control" id="MaNV" name="MaNV" defaultValue="" placeholder="Mã nhân viên" required/> */}

                                        <label htmlFor="TenNV" className="modal__label">Tên</label>
                                        <input type="text" className="modal__control" id="TenNV" name="TenNV" placeholder="Tên nhân viên" required
                                            value={tenNV}
                                            onChange={(e)=>{
                                                settenNV(e.target.value)
                                                console.log('set tenNV')
                                            }}
                                        />

                                        <label htmlFor="GioiTinhNV" className="modal__label">Giới tính</label>
                                        <select name="GioiTinhNV" id="GioiTinhNV" className="modal__select" required 
                                            onChange={(e)=>{
                                                setgioitinhNV(e.target.value)
                                                console.log('set gioitinhNV')
                                            }}
                                        >
                                            <option value="Nam" className="modal__option">Nam</option>
                                            <option value="Nữ" className="modal__option">Nữ</option>
                                        </select>

                                        <label htmlFor="NamSinhNV" className="modal__label">Năm sinh</label>
                                        <input type="text" className="modal__control" id="NamSinhNV" name="NamSinhNV"  placeholder="Nhập năm sinh" required
                                            value={namsinhNV}
                                            onChange={(e)=>{
                                                setnamsinhNV(e.target.value)
                                                console.log('set namsinhNV')
                                            }}
                                        />

                                        
                                    </div>

                                    <div className="col pc-6 mb-6">
                                        <label htmlFor="EmailNV" className="modal__label">Email</label>
                                        <input type="text" className="modal__control" id="EmailNV" name="EmailNV"  placeholder="abc@spaqa.com" required
                                            value={emailNV}
                                            onChange={(e)=>{
                                                setemailNV(e.target.value)
                                                console.log('set emailNV')
                                            }}
                                        />

                                        <label htmlFor="sdtNV" className="modal__label">SĐT</label>
                                        <input type="text" className="modal__control" id="sdtNV" name="sdtNV"  placeholder="Số điện thoại" required
                                            value={sdtNV}
                                            onChange={(e)=>{
                                                setsdtNV(e.target.value)
                                                console.log('set sdtNV')
                                            }}
                                        />

                                        <label htmlFor="matkhauNV" className="modal__label">Mật khẩu đăng nhập</label>
                                        <input type="text" className="modal__control" id="matkhauNV" name="matkhauNV"  placeholder="Mật khẩu đăng nhập" required
                                            value={matkhauNV}
                                            onChange={(e)=>{
                                                setmatkhauNV(e.target.value)
                                                console.log('set matkhauNV')
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <label htmlFor="diachiNV" className="modal__label">Địa chỉ</label>
                            <textarea type="text" className="modal__control" id="diachiNV" name="diachiNV" rows="2"   placeholder="Địa chỉ liên lạc" required
                                value={diachiNV}
                                onChange={(e)=>{
                                    setdiachiNV(e.target.value)
                                    console.log('set diachiNV')
                                }}
                            />

                            {/* <label htmlFor="MaNV" className="modal__label">Mã</label>
                            <input type="text" className="modal__control" id="MaNV" name="MaNV" defaultValue="" placeholder="Mã nhân viên" required/>

                            <label htmlFor="TenNV" className="modal__label">Tên</label>
                            <input type="text" className="modal__control" id="TenNV" name="TenNV" defaultValue="" placeholder="Tên nhân viên" required/>

                            <label htmlFor="EmailNV" className="modal__label">Email</label>
                            <input type="text" className="modal__control" id="EmailNV" name="EmailNV" defaultValue="" placeholder="abc@gmail.com" required/> */}
                            
                            {/* <!-- Preview image  --> */}
                            <label className="modal__label">Ảnh</label>
                            <div className="modal__preview">
                                <label htmlFor="AnhNV" className="modal__preview-label">
                                    <i className="modal__preview-icon ti-plus"></i>
                                </label>
                                <input type="file" name="AnhNV" id="AnhNV" className="modal__file js-modal-file" hidden onChange={HandleFileStaffAdd}/>
                                <div className="modal__preview-content">
                                    {showImgPreview && <img src={hinhanhNV} alt="" className="modal__preview-img js-modal-preview-img" style={{zIndex: 1}}/>}
                                </div>
                            </div>
                        </form>                     
                    </div>
                    <div className="modal__footer">
                        <button className="btn-admin modal__btn js-btn-submit" onClick={addStaff}>Thêm</button>
                        <button className="btn-admin modal__btn js-btn-cancel" onClick={HandleModalCancel}>Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalStaffAdd