import '../../../assets/css/Spa/ServicesFamous.css'
import img8 from '../../../assets/img/services/img8.jpg'
import img7 from '../../../assets/img/services/img7.jpg'
import img9 from '../../../assets/img/services/img9.jpg'

function ServicesFamous(){
    return (
        <div className="section">
            <h3 className="section__heading">Spa QA</h3>
            <h1 className="section__title">Dịch vụ nổi bật</h1>

            <div className="services-famous">
                <div className="grid wide">
                    <div className="row no-gutters">
                        <div className="col pc-4">
                            <div className="services-famous__heading">
                                <img src={img8} alt="img7" className="services-famous__img"/>
                            </div>
                            <h2 className="services-famous__name">1. Massage Therapy</h2>
                            <p className="services-famous__description">Chúng tôi hiểu rằng thư giãn thực sự là một hình thức nghệ thuật. Kết hợp một bài massage phù hợp với dịch vụ Chăm Sóc Da nói chung và Da Mặt nói riêng, hoặc các dịch vụ thẩm mỹ khác</p>
                            <button className="btn services-famous__btn">Xem ngay
                                <i className="ti-angle-right services-famous__icon"></i>
                            </button>
                        </div>

                        <div className="col pc-4">
                            <div className="services-famous__heading">
                                <img src={img7} alt="img7" className="services-famous__img"/>
                            </div>
                            <h2 className="services-famous__name">2. Skin Care</h2>
                            <p className="services-famous__description">Chúng tôi hiểu rằng thư giãn thực sự là một hình thức nghệ thuật. Kết hợp một bài massage phù hợp với dịch vụ Chăm Sóc Da nói chung và Da Mặt nói riêng, hoặc các dịch vụ thẩm mỹ khác</p>
                            <button className="btn services-famous__btn">Xem ngay
                                <i className="ti-angle-right services-famous__icon"></i>
                            </button>
                        </div>

                        <div className="col pc-4">
                            <div className="services-famous__heading">
                                <img src={img9} alt="img7" className="services-famous__img"/>
                            </div>
                            <h2 className="services-famous__name">3. Body Treatments</h2>
                            <p className="services-famous__description">Chúng tôi hiểu rằng thư giãn thực sự là một hình thức nghệ thuật. Kết hợp một bài massage phù hợp với dịch vụ Chăm Sóc Da nói chung và Da Mặt nói riêng, hoặc các dịch vụ thẩm mỹ khác</p>
                            <button className="btn services-famous__btn">Xem ngay
                                <i className="ti-angle-right services-famous__icon"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesFamous