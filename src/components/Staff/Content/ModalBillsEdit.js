
function ModalBillsEdit(){
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
                                <div className="row mo-gutters">
                                    <div className="col pc-6 mb-6">
                                        <label htmlFor="MaPhieu" className="modal__label">Mã phiếu</label>
                                        <input type="text" className="modal__control" id="MaPhieu" name="MaPhieu" defaultValue="MP01" placeholder="Mã phiếu" required disabled/>

                                        <label htmlFor="MaKH" className="modal__label">Mã khách hàng</label>
                                        <input type="text" className="modal__control" id="MaKH" name="MaKH" defaultValue="" placeholder="Mã khách hàng" required disabled/>

                                        <label htmlFor="TenKH" className="modal__label">Tên khách hàng</label>
                                        <input type="text" className="modal__control" id="TenKH" name="TenKH" defaultValue="" placeholder="Tên khách hàng" required/>

                                        <label className="modal__label">Giới tính</label>
                                        <select name="GioiTinhKH" id="" className="modal__select" required>
                                            <option defaultValue="Nam" className="modal__option">Nam</option>
                                            <option defaultValue="Nữ" className="modal__option">Nữ</option>
                                        </select>

                                        <label htmlFor="NgaySinhKH" className="modal__label">Ngày sinh</label>
                                        <input type="text" className="modal__control" id="NgaySinhKH" name="NgaySinhKH" defaultValue="21/12/2021" placeholder="dd/mm/yyyy" required/>
                                    </div>

                                    <div className="col pc-6 mb-6">
                                        <label htmlFor="EmailKH" className="modal__label">Email</label>
                                        <input type="text" className="modal__control" id="EmailKH" name="EmailKH" defaultValue="" placeholder="abc@gmail.com" required/>

                                        <label htmlFor="SdtKH" className="modal__label">Số điện thoại</label>
                                        <input type="text" className="modal__control" id="SdtKH" name="SdtKH" defaultValue="" placeholder="SĐT khách hàng" required/>

                                        <label className="modal__label">Dịch vụ</label>
                                        <div className="modal__checkbox">
                                            <div className="modal__checkbox-item">
                                                <input type="checkbox" className="modal__control" id="DichVu1" name="DichVu" defaultValue="Truyen MaDV vao day 'vd:DV01'" required defaultChecked/>
                                                <label htmlFor="DichVu1" className="modal__label">Làm sáng da</label>
                                            </div>
                                            
                                            <div className="modal__checkbox-item">
                                                <input type="checkbox" className="modal__control" id="DichVu2" name="DichVu" defaultValue="Truyen MaDV vao day 'vd:DV02'" required defaultChecked/>
                                                <label htmlFor="DichVu2" className="modal__label">Tẩy da chết</label>
                                            </div>

                                            <div className="modal__checkbox-item">
                                                <input type="checkbox" className="modal__control" id="DichVu3" name="DichVu" defaultValue="Truyen MaDV vao day 'vd:DV03'" required defaultChecked/>
                                                <label htmlFor="DichVu3" className="modal__label">Làm trắng da</label>
                                            </div>
                                                                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal__footer">
                        <button className="btn-admin modal__btn js-btn-submit">Sửa</button>
                        <button className="btn-admin modal__btn js-btn-cancel" onClick={HandleModalCancel}>Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBillsEdit