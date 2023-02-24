import '../../../assets/css/Spa/Customer.css'
import customer1 from '../../../assets/img/introduce/customer1.png'
import customer2 from '../../../assets/img/introduce/customer2.png'
import customer3 from '../../../assets/img/introduce/customer3.png'



function Customer(){
    return (
        <div className="section bg-pink-strong">
            <h3 className="section__heading">Spa QA</h3>
            <h1 className="section__title">Nhận xét khách hàng</h1>

            <div className="customer">
                <div className="grid wide">
                    <div className="row no-gutters justify-content">
                        <div className="col pc-7 mb-12">
                            <p className="customer__comment">Đi đến Spa là cách tốt nhất để vượt qua mọi hình thức căng thẳng. Mona Spa là hạnh phúc thuần túy. Tất cả những điều tốt đẹp đến từ hạnh phúc bên trong. Hãy đối xử tốt với bản thân bằng cách đến Spa ngay hôm nay!</p>
                        </div>
                    </div>
                    <div className="row no-gutters justify-content">
                        <div className="col pc-3 mb-12">
                            <div className="customer__body">
                                <img src={customer3} className="customer__img"/>
                                <h2 className="customer__name">Nguyễn Du</h2>
                                
                            </div>
                        </div>

                        <div className="col pc-3 mb-12">
                            <div className="customer__body">
                                <img src={customer2} className="customer__img"/>
                                <h2 className="customer__name">Thúy Vân</h2>
                            </div>
                        </div>

                        <div className="col pc-3 mb-12">
                            <div className="customer__body">
                                <img src={customer1} className="customer__img"/>
                                <h2 className="customer__name">Thúy Kiều</h2>
                                
                            </div>
                        </div>
                    </div>

                    <div className="row no-gutters justify-content">
                        <div className="col pc-3">
                            <div className="customer__body">
                                <p className="customer__text">Khách thường xuyên đến Spa</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Customer