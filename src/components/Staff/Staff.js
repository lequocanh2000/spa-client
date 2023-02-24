import HeaderStaff from './Content/HeaderStaff'
import ContentStaff from './Content/ContentStaff'
import Footer from '../Spa/Footer'
import '../../assets/css/Staff/base.css'
import '../../assets/css/Staff/grid.css'
import '../../assets/css/Staff/responsive.css'
import '../../assets/fonts/icon/themify-icons/themify-icons.css'


function Staff(){

    return (
        <div className="main-staff">
            {/* <!-- Header staff  --> */}
            <HeaderStaff></HeaderStaff>
            {/* <!-- Content  --> */}
            <ContentStaff></ContentStaff>
            {/* <!-- Footer  --> */}
            <Footer></Footer>
        </div>
    )
}

export default Staff