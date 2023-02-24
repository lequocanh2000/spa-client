import '../../../assets/css/Spa/InformationStaff.css'
import staff1 from '../../../assets/img/introduce/staff1.jpg'
import staff2 from '../../../assets/img/introduce/staff2.jpg'
import staff3 from '../../../assets/img/introduce/staff3.jpg'

function InformationStaff(){
    return (
        <div className="section bg-pink-light">
            <h3 className="section__heading">Spa QA</h3>
            <h1 className="section__title">Đội ngũ nhân viên</h1>

            <div className="staff">
                <div className="grid wide">
                    <div className="row no-gutters justify-content">           
                        <div className="col pc-3 mb-12">
                            <div className="staff_wrapper">
                                <div className="staff__heading">
                                    <img src={staff1} alt="" className="staff__img"/>
                                </div>
                                <div className="staff__body">
                                    <h2 className="staff__name">Susan Delacour</h2>
                                    <h4 className="staff__marjor">Chuyên gia chăm sóc da</h4>
                                    <p className="staff__time">Monday to Friday : 08:00 – 17:00 hrs</p>
                                </div>
                            </div>
                        </div>

                        <div className="col pc-3 mb-12">
                            <div className="staff_wrapper">
                                <div className="staff__heading">
                                    <img src={staff2} alt="" className="staff__img"/>
                                </div>
                                <div className="staff__body">
                                    <h2 className="staff__name">Su Hon Kim</h2>
                                    <h4 className="staff__marjor">Thai Massage</h4>
                                    <p className="staff__time">Monday to Friday : 08:00 – 17:00 hrs</p>
                                </div>
                            </div>                               
                        </div>

                        <div className="col pc-3 mb-12">
                            <div className="staff_wrapper">
                                <div className="staff__heading">
                                    <img src={staff3} alt="" className="staff__img"/>
                                </div>
                                <div className="staff__body">
                                    <h2 className="staff__name">Melwyn Mccarthy</h2>
                                    <h4 className="staff__marjor">Chuyên gia Spa thảo dược</h4>
                                    <p className="staff__time">Monday to Friday : 08:00 – 17:00 hrs</p>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
        </div>
    )
}

export default InformationStaff


