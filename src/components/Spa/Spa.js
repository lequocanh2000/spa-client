import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Introduce from './Introduce'
import Modal from './HomeSpa/Modal'
import '../../assets/css/Spa/base.css'
import '../../assets/css/Spa/grid.css'
import '../../assets/css/Spa/responsive.css'
import '../../assets/fonts/icon/themify-icons/themify-icons.css'
import { Outlet } from 'react-router-dom'

function Spa(){
    return (
    <>    
       <div className="main">
        <Header></Header>
        <Outlet/>
        <Footer></Footer>
        <Modal></Modal>
       </div>
    </>
    )
}

export default Spa