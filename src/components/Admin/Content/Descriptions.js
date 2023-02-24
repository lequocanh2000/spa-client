import '../../../assets/css/Admin/Descriptions.css'

function Descriptions(){
    return (
        <div className="descriptions">
            <div className="grid">
                <div className="row no-gutters">
                    <div className="col pc-3 t-6 mb-12">
                        <div className="card">
                            <div className="card__heading">
                                <i className="card__heading-icon ti-support"></i>
                            </div>
                            <div className="card__body">
                                <div className="card__quantity">500</div>
                                <div className="card__title">Điều trị</div>
                            </div>
                        </div>
                    </div>

                    <div className="col pc-3 t-6 mb-12">
                        <div className="card">
                            <div className="card__heading">
                                <i className="card__heading-icon ti-face-smile"></i>
                            </div>
                            <div className="card__body">
                                <div className="card__quantity">6969</div>
                                <div className="card__title">Hài lòng</div>
                            </div>
                        </div>
                    </div>

                    <div className="col pc-3 t-6 mb-12">
                        <div className="card">
                            <div className="card__heading">
                                <i className="card__heading-icon ti-map-alt"></i>
                            </div>
                            <div className="card__body">
                                <div className="card__quantity">210</div>
                                <div className="card__title">Chi nhánh</div>
                            </div>
                        </div>
                    </div>

                    <div className="col pc-3 t-6 mb-12">
                        <div className="card">
                            <div className="card__heading">
                                <i className="card__heading-icon ti-user"></i>
                            </div>
                            <div className="card__body">
                                <div className="card__quantity">410</div>
                                <div className="card__title">Nhân viên</div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Descriptions


