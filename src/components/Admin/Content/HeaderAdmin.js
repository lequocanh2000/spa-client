import { Link } from 'react-router-dom'
import '../../../assets/css/Admin/HeaderAdmin.css'
import admin from '../../../assets/img/user/admin.PNG'
import user1 from '../../../assets/img/user/user1.png'
import user2 from '../../../assets/img/user/user2.PNG'
import user3 from '../../../assets/img/user/user3.PNG'
import user4 from '../../../assets/img/user/user4.PNG'
import { useNavigate } from 'react-router-dom'

function HeaderAdmin(){
    const navigate = useNavigate()
    function handleLogout(e){
        const logout = document.querySelector('.header-admin__avatar-content')
        console.log(logout)
        navigate('/Login')
    }
    // const btnHeaderMobileMenu=document.querySelector('.js-header-admin-btn-moblie')
    
    // btnHeaderMobileMenu.addEventListener('click', (e)=>{     
    //     e.stopPropagation()
    //     console.log('click menu')
    //     console.log(sidebar)
    //     sidebar.classList.toggle('fadeIn') 
    // })

    function handleClickBtnMenuAdmin(e){
        const sidebar = document.querySelector('.js-sidebar')
        e.stopPropagation()
        console.log(e)
        console.log('click menu')
        console.log(sidebar)
        sidebar.classList.toggle('fadeIn')
    }

    

    return (
        <header className="header-admin">

            <div className="header-admin__btn header-admin__btn-mobile js-header-admin-btn-moblie" onClick={handleClickBtnMenuAdmin}>
                <button className="header-admin__btn-menu js-header-admin-btn-menu">
                    <i className="header-admin__btn-menu-icon ti-menu"></i>
                </button>
            </div>

            <div className="header-admin__search js-header-admin-search">
                <input type="text" className="header-admin__search-control" placeholder="Tìm kiếm ..."/>
                <button className="header-admin__search-btn">
                    <i className="header-admin__search-icon ti-search"></i>
                </button>
            </div>

            <div className="header-admin__wrapper">
                <div className="header-admin__notification">
                    <div className="header-admin__notification-warpper">
                        <i className="header-admin__notification-icon ti-bell"></i>

                        {/* <!-- notification dot --> */}
                        <span className="header-admin__notification-dot-bell"></span>

                        {/* <!-- notification list --> */}
                        <div className="header-admin__notification-list header-admin__notification-list--bell">
                            <div className="header-admin__notification-item">
                                <div className="header-admin__notification-avatar">
                                    <img src={user1} alt="user" className="header-admin__notification-avatar-img"></img>
                                </div>
                                <div className="header-admin__notification-content">
                                    <h3 className="header-admin__notification-content-username">Amily</h3>
                                    <p className="header-admin__notification-content-text">Hello world</p>
                                </div>
                            </div>

                            <div className="header-admin__notification-item">
                                <div className="header-admin__notification-avatar">
                                    <img src={user2} alt="user" className="header-admin__notification-avatar-img"></img>
                                </div>
                                <div className="header-admin__notification-content">
                                    <h3 className="header-admin__notification-content-username">Dumberdol</h3>
                                    <p className="header-admin__notification-content-text">Hello world</p>
                                </div>
                            </div>

                            <div className="header-admin__notification-item">
                                <div className="header-admin__notification-avatar">
                                    <img src={user3} alt="user" className="header-admin__notification-avatar-img"></img>
                                </div>
                                <div className="header-admin__notification-content">
                                    <h3 className="header-admin__notification-content-username">Dumbledore</h3>
                                    <p className="header-admin__notification-content-text">Hello Haryy Potter</p>
                                </div>
                            </div>
                            
                            <div className="header-admin__notification-item">
                                <div className="header-admin__notification-avatar">
                                    <img src={user4} alt="user" className="header-admin__notification-avatar-img"></img>
                                </div>
                                <div className="header-admin__notification-content">
                                    <h3 className="header-admin__notification-content-username">Harry Potter</h3>
                                    <p className="header-admin__notification-content-text">Good morning Mr.Dumbledore</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    

                    
                    <div className="header-admin__notification-warpper ">
                        <i className="header-admin__notification-icon ti-comments-smiley"></i>

                        {/* <!-- notification dot --> */}
                        <span className="header-admin__notification-dot-chat"></span>

                        {/* <!-- notification list --> */}
                        <div className="header-admin__notification-list header-admin__notification-list--chat">
                            <div className="header-admin__notification-item">
                                <div className="header-admin__notification-avatar">
                                    <img src={user1} alt="user" className="header-admin__notification-avatar-img"></img>
                                </div>
                                <div className="header-admin__notification-content">
                                    <h3 className="header-admin__notification-content-username">Amily</h3>
                                    <p className="header-admin__notification-content-text">Hello world</p>
                                </div>
                            </div>

                            <div className="header-admin__notification-item">
                                <div className="header-admin__notification-avatar">
                                    <img src={user2} alt="user" className="header-admin__notification-avatar-img"></img>
                                </div>
                                <div className="header-admin__notification-content">
                                    <h3 className="header-admin__notification-content-username">Dumberdol</h3>
                                    <p className="header-admin__notification-content-text">Hello world</p>
                                </div>
                            </div>

                            <div className="header-admin__notification-item">
                                <div className="header-admin__notification-avatar">
                                    <img src={user3} alt="user" className="header-admin__notification-avatar-img"></img>
                                </div>
                                <div className="header-admin__notification-content">
                                    <h3 className="header-admin__notification-content-username">Dumbledore</h3>
                                    <p className="header-admin__notification-content-text">Hello Haryy Potter</p>
                                </div>
                            </div>
                            
                            <div className="header-admin__notification-item">
                                <div className="header-admin__notification-avatar">
                                    <img src={user4} alt="user" className="header-admin__notification-avatar-img"></img>
                                </div>
                                <div className="header-admin__notification-content">
                                    <h3 className="header-admin__notification-content-username">Harry Potter</h3>
                                    <p className="header-admin__notification-content-text">Good morning Mr.Dumbledore</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="header-admin__avatar">
                    <img src={admin} alt="admin" className="header-admin__avatar-img"/>

                    <div className="header-admin__avatar-list">
                        <div className="header-admin__avatar-item">
                            <div className="header-admin__avatar-content">
                                <a href="#" className="header-admin__avatar-link">
                                    <i className="header-admin__avatar-icon ti-settings"></i>
                                    Cài đặt
                                </a>
                            </div>
                        </div>
                        <div className="header-admin__avatar-item">
                            <div className="header-admin__avatar-content" onClick={handleLogout}>
                                <a to="#" className="header-admin__avatar-link">
                                    <i className="header-admin__avatar-icon ti-shift-right"></i>
                                    Đăng xuất
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>       
    )
}

export default HeaderAdmin