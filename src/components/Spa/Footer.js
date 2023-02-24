import '../../assets/css/Spa/Footer.css'
import logo from '../../assets/img/logo.PNG'

function Footer(){
    return (
        <footer className="footer">
            <div className="footer__heading">
                <div className="grid wide">
                    <div className="row no-gutters">
                        <div className="col pc-6 mgb-30">
                            <div className="footer__heading-logo">
                                <img  src={logo} className="footer__heading-img" alt=""/>
                            </div>
                            <p className="footer__heading-text">Hãy chăm sóc cơ thể của bạn, nơi duy nhất bạn phải sống! Đó là một ngôi đền sống. Hãy tôn trọng nó, chăm sóc nó và tận hưởng cuộc sống của bạn để phát huy hết khả năng của nó ... Mona Spa chỉ giúp bạn làm điều đó!</p>
                        </div>
                        <div className="col pc-6">
                            <h2 className="footer__heading-contact">Thông tin liên hệ</h2>
                            <div className="footer__heading-detail">
                                <p className="footer__heading-address">319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                                <a href="#" className="footer__heading-phone">076 922 0162</a>
                                <a href="#" className="footer__heading-email-link">demonhunterg@gmail.com</a>
                                <div className="footer__heading-social">
                                    <a href="#" className="footer__heading-social-link" >
                                        <i className="footer__heading-social-icon ti-facebook"></i>
                                    </a>
                                    <a href="#" className="footer__heading-social-link" >
                                        <i className="footer__heading-social-icon ti-instagram"></i>
                                    </a>
                                    <a href="#" className="footer__heading-social-link" >
                                        <i className="footer__heading-social-icon ti-twitter-alt"></i>
                                    </a>       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copycript">
                <p className="footer__copycript-text">© Copycript by LQA</p>
            </div>
        </footer>
    )
}

export default Footer