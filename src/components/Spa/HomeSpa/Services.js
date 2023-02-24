import '../../../assets/css/Spa/Services.css'
import img1 from '../../../assets/img/services/img1.png'
import img2 from '../../../assets/img/services/img2.png'
import img3 from '../../../assets/img/services/img3.png'
import img4 from '../../../assets/img/services/img4.png'
import img5 from '../../../assets/img/services/img5.png'
import img6 from '../../../assets/img/services/img6.png'

function Services(){
    return (
        <div className="section bg-pink-light">
            <h3 className="section__heading">Spa QA</h3>
            <h1 className="section__title">DỊCH VỤ CHÍNH</h1>

            <div className="services">
                <div className="grid wide">
                    <div className="row no-gutters">
                        <div className="col pc-4">
                            <div className="services__heading">
                                <div className="services__circle">
                                    <img className="services__img" src={img1} alt="img1"/>
                                </div>
                            </div>               
                            <h2 className="services__name">Wardrobes</h2>
                            <p className="services__description">Hãy tôn trọng nó, chăm sóc nó và tận hưởng cuộc sống của bạn để phát huy hết khả năng của nó … Mona Spa chỉ giúp bạn làm điều đó!</p>
                        </div>

                        <div className="col pc-4">
                            <div className="services__heading">
                                <div className="services__circle">
                                    <img className="services__img" src={img2} alt="img1"/>
                                </div>
                            </div>               
                            <h2 className="services__name">Herbal Drink</h2>
                            <p className="services__description">Hãy tôn trọng nó, chăm sóc nó và tận hưởng cuộc sống của bạn để phát huy hết khả năng của nó … Mona Spa chỉ giúp bạn làm điều đó!</p>
                        </div>

                        <div className="col pc-4">
                            <div className="services__heading">
                                <div className="services__circle">
                                    <img className="services__img" src={img3} alt="img1"/>
                                </div>
                            </div>               
                            <h2 className="services__name">Health Drinks</h2>
                            <p className="services__description">Hãy tôn trọng nó, chăm sóc nó và tận hưởng cuộc sống của bạn để phát huy hết khả năng của nó … Mona Spa chỉ giúp bạn làm điều đó!</p>
                        </div>

                        <div className="col pc-4">
                            <div className="services__heading">
                                <div className="services__circle">
                                    <img className="services__img" src={img4} alt="img1"/>
                                </div>
                            </div>               
                            <h2 className="services__name">Medicine</h2>
                            <p className="services__description">Hãy tôn trọng nó, chăm sóc nó và tận hưởng cuộc sống của bạn để phát huy hết khả năng của nó … Mona Spa chỉ giúp bạn làm điều đó!</p>
                        </div>

                        <div className="col pc-4">
                            <div className="services__heading">
                                <div className="services__circle">
                                    <img className="services__img" src={img5} alt="img1"/>
                                </div>
                            </div>               
                            <h2 className="services__name">Ayurveda</h2>
                            <p className="services__description">Hãy tôn trọng nó, chăm sóc nó và tận hưởng cuộc sống của bạn để phát huy hết khả năng của nó … Mona Spa chỉ giúp bạn làm điều đó!</p>
                        </div>
                        
                        <div className="col pc-4">
                            <div className="services__heading">
                                <div className="services__circle">
                                    <img className="services__img" src={img6} alt="img1"/>
                                </div>
                            </div>               
                            <h2 className="services__name">Wardrobes</h2>
                            <p className="services__description">Hãy tôn trọng nó, chăm sóc nó và tận hưởng cuộc sống của bạn để phát huy hết khả năng của nó … Mona Spa chỉ giúp bạn làm điều đó!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Services