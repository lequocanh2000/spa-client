import Sidebar from './Sidebar'
import ContentAdmin from './ContentAdmin'
// import Footer from './Footer'
// import Home from './Home'
// import Introduce from './Introduce'
// import Modal from './HomeSpa/Modal'
import '../../assets/css/Admin/base.css'
import '../../assets/css/Admin/grid.css'
import '../../assets/css/Admin/responsive.css'
import '../../assets/fonts/icon/themify-icons/themify-icons.css'


function Admin(){
  

    return (
        <div className="main-admin">
            {/* <!-- Sidebar  --> */}
            <Sidebar></Sidebar>
            {/* <!-- Content  --> */}
            <ContentAdmin></ContentAdmin>
        </div>
    )
}

export default Admin