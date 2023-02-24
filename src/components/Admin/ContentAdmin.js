import '../../assets/css/Admin/ContentAdmin.css'

import HeaderAdmin from './Content/HeaderAdmin'
import HomeAdmin from './Content/HomeAdmin'
import FooterAdmin from './Content/FooterAdmin'
import BillsManagement from './Content/BillsManagement'
import DevicesManagement from './Content/DevicesManagement'
import RoomsManagement from './Content/RoomsManagement'
import ServicesManagement from './Content/ServicesManagement'
import StaffsManagement from './Content/StaffsManagement'
import Revenue from './Content/Revenue'
import { Outlet } from 'react-router-dom'
// import logo from '../../assets/img/logo.PNG'

function Content(){

    return (
        <div className="content-admin">
            {/* <!-- Header --> */}
            <HeaderAdmin></HeaderAdmin>
            {/* <!-- Container --> */}
            <div className="container">
                <Outlet></Outlet>
            </div>
            {/* <!-- FooterAdmin --> */}
            <FooterAdmin></FooterAdmin>
        </div>
    )
}

export default Content