import '../../../assets/css/Spa/InformationSpa.css'
import ic1 from '../../../assets/img/introduce/ic1.png'
import ic2 from '../../../assets/img/introduce/ic2.png'
import ic3 from '../../../assets/img/introduce/ic3.png'
import ic4 from '../../../assets/img/introduce/ic4.png'

function InformationSpa(){
    return (
        <div className="section">
            <div className="quantity">
                <div className="grid wide">
                    <div className="row no-gutters">
                        <div className="col pc-3 mb-12">
                            <div className="quantity__warpper">
                                <img src={ic1} alt="eye" className="quantity__img"/>
                                <h1 className="quantity__number">150+</h1>
                                <p className="quantity__text">Điều trị</p>
                            </div>
                        </div>

                        <div className="col pc-3 mb-12">
                            <div className="quantity__warpper">
                                <img src={ic2} alt="eye" className="quantity__img"/>
                                <h1 className="quantity__number">2333+</h1>
                                <p className="quantity__text">Khách hàng vui vẻ</p>
                            </div>
                        </div>

                        <div className="col pc-3 mb-12">
                            <div className="quantity__warpper">
                                <img src={ic3} alt="eye" className="quantity__img"/>
                                <h1 className="quantity__number">32</h1>
                                <p className="quantity__text">Chi nhánh</p>
                            </div>
                        </div>

                        <div className="col pc-3 mb-12">
                            <div className="quantity__warpper">
                                <img src={ic4} alt="eye" className="quantity__img"/>
                                <h1 className="quantity__number">100</h1>
                                <p className="quantity__text">Nhân viên</p>         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationSpa


