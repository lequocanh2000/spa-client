import '../../../assets/css/Spa/About.css'
import introduce1 from '../../../assets/img/introduce/introduce1.jpg'
import introduce2 from '../../../assets/img/introduce/introduce2.jpg'


function About(){
    return (
        <div className="section bg-pink-light">
            <div className="about">
                <div className="grid wide">
                    <div className="row no-gutters">
                        <div className="col pc-3 mb-12">
                            <img src={introduce1} className="about__img"></img>
                        </div>
                        <div className="col pc-3 mb-12">
                            <img src={introduce2} className="about__img"></img>
                        </div>
                        <div className="col pc-6 mb-12">
                            <div className="about__wrapper">
                                <h3 className="about__heading">Spa Mona</h3>
                                <h1 className="about__title">Giới thiệu về chúng tôi</h1>
                                <p className="about__text">Hãy chăm sóc cơ thể của bạn, nơi duy nhất bạn phải sống! Đó là một ngôi đền sống. Hãy tôn trọng nó, chăm sóc nó và tận hưởng cuộc sống của bạn để phát huy hết khả năng của nó … Mona Spa chỉ giúp bạn làm điều đó!</p>
                                <p className="about__text">Hãy chăm sóc cơ thể của bạn, nơi duy nhất bạn phải sống! Đó là một ngôi đền sống. Hãy tôn trọng nó, chăm sóc nó và tận hưởng cuộc sống của bạn để phát huy hết khả năng của nó … Mona Spa chỉ giúp bạn làm điều đó!</p>
                            </div>                                
                        </div>
                    </div>
                </div>
            </div>               
        </div>
    )
}

export default About