import '../../../assets/css/Staff/ContentStaff.css'
// import HeaderAdmin from './Content/HeaderAdmin'
// import HomeAdmin from './Content/HomeAdmin'
// import FooterAdmin from './Content/FooterAdmin'
// import BillsManagement from './Content/BillsManagement'
// import DevicesManagement from './Content/DevicesManagement'
// import RoomsManagement from './Content/RoomsManagement'
// import ServicesManagement from './Content/ServicesManagement'
// import StaffsManagement from './Content/StaffsManagement'
// import { Outlet } from 'react-router-dom'
// import logo from '../../assets/img/logo.PNG'
import InfoStaff from "./InfoStaff"
import RegisterServices from './RegisterServices'
import Bills from './Bills'
import TakeCareOf from './TakeCareOf'
import { Outlet } from 'react-router-dom'

function ContentStaff(){

    return (
        <div className="content-staff">
            {/* <!-- InfoStaff  --> */}
            {/* <InfoStaff></InfoStaff> */}

            {/* <!-- RegisterServices  --> */}
            {/* <RegisterServices></RegisterServices> */}

            {/* <!-- Bills  --> */}
            {/* <Bills></Bills> */}

            {/* <!-- TakeCareOf  --> */}
            {/* <TakeCareOf></TakeCareOf> */}
            <Outlet></Outlet>
        </div>
    )
}

export default ContentStaff