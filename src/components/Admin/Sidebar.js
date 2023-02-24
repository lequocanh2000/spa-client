import '../../assets/css/Admin/Sidebar.css'
import logo from '../../assets/img/logo.PNG'

import {Link} from 'react-router-dom'
import {useEffect} from 'react'


function Sidebar(){
    // Load
    useEffect(() => {
        const loadPage = () => {
            const width = window.innerWidth
            const sidebar = document.querySelector('.js-sidebar')
            if(width <= 1024){
                sidebar.classList.add('fadeIn')
            }
        }

        window.addEventListener('load',loadPage)

        //Cleanup function
        return () => {
            window.removeEventListener('load',loadPage)
        };
    },[]);
    

    //Resize
    useEffect(() => {
        const resizePage = (e) => {
            const width = window.innerWidth
            const sidebar = document.querySelector('.js-sidebar')    
            if(width >= 1024){
                sidebar.classList.remove('fadeIn')
            }
            else{
                sidebar.classList.add('fadeIn')
            }
        }
        window.addEventListener('resize', resizePage)

        //Cleanup function
        return () => {
            window.removeEventListener('resize', resizePage)
        };
    }, []);
    
   
    

    //Window click close sidebar
    useEffect(() => {
        const clickWindow = (e)=>{
            const width = window.innerWidth
            const sidebar = document.querySelector('.js-sidebar')
            if(width < 1024){
                sidebar.classList.add('fadeIn')
                // console.log('click window close menu')
            }
        }

        window.addEventListener('click', clickWindow)

        //Cleanup function
        return () => {
            window.removeEventListener('click', clickWindow)
        };
    },[]);
    

    function handleClickBtnSidebarAdmin(e){
        const sidebar = document.querySelector('.js-sidebar')
        e.stopPropagation()
        console.log(e)
        console.log('click close in sidebar')
        console.log(sidebar)
        sidebar.classList.toggle('fadeIn')
    }

    function handleClickSidebarAdmin(e){
        e.stopPropagation()
        console.log('click sidebar')
    }
    


    return (

        <div className="sidebar js-sidebar" onClick={handleClickSidebarAdmin}>
            <div className="sidebar__button sidebar__button-mobile js-sidebar-button-mobile" onClick={handleClickBtnSidebarAdmin}>
                <button className="sidebar__button-close js-sidebar-button-close">
                    <i className="sidebar__button-icon ti-close"></i>
                </button>
            </div>

            <div className="sidebar__heading">
                <div className="sidebar__logo">
                    <img src={logo} alt="admin" className="sidebar__logo-img"></img>
                </div>
            </div>

            <div className="sidebar__body">
                <ul className="sidebar__nav">
                    <li className="sidebar__nav-item">
                        <h3 className="sidebar__nav-title">Trang chủ</h3>
                        <Link to="/Admin/home" className="sidebar__nav-link">
                            <i className="sidebar__nav-icon ti-home"></i>
                            Trang chủ
                        </Link>
                    </li>
                    <li className="sidebar__nav-item">
                        <h3 className="sidebar__nav-title">Quản lý</h3>
                        <Link to="/Admin/service" className="sidebar__nav-link">
                            <i className="sidebar__nav-icon ti-world"></i>
                            Dịch vụ
                        </Link>
                        <Link to="/Admin/staff" className="sidebar__nav-link">
                            <i className="sidebar__nav-icon ti-user"></i>
                            Nhân viên
                        </Link>
                        <Link to="/Admin/device" className="sidebar__nav-link">
                            <i className="sidebar__nav-icon ti-briefcase"></i>
                            Thiết bị
                        </Link>
                        <Link to="/Admin/room" className="sidebar__nav-link">
                            <i className="sidebar__nav-icon ti-layout-grid2"></i>
                            Phòng
                        </Link>
                        <Link to="/Admin/bill" className="sidebar__nav-link">
                            <i className="sidebar__nav-icon ti-printer"></i>
                            Hóa đơn
                        </Link>   
                    </li>
                    <li className="sidebar__nav-item">
                        <h3 className="sidebar__nav-title">Thống kê</h3>                
                        <Link to="/Admin/revenue" className="sidebar__nav-link">
                            <i className="sidebar__nav-icon ti-bar-chart"></i>
                            Doanh thu
                        </Link>
                    </li>
                </ul>
            </div>
        </div>       
    )
}

export default Sidebar