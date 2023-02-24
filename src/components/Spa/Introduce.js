import Breadcumb from './Introduce/Breadcrumb'
import About from './Introduce/About'
import InformationSpa from './Introduce/InformationSpa'
import InformationStaff from './Introduce/InformationStaff'
import Customer from './Introduce/Customer'

// import Services from './HomeSpa/Services'
// import ServicesFamous from './HomeSpa/ServicesFamous'
// import Invitation from './HomeSpa/Invitation'
// import Contact from './HomeSpa/Contact'
// import Blogs from './HomeSpa/Blogs'

function Introduce(){
    return (
    <div className="content">
        {/* <!-- Breadcumb -->*/}
        <Breadcumb></Breadcumb>
        {/* <!-- About --> */}
        <About></About>
        {/* <!-- InformationSpa--> */}
        <InformationSpa></InformationSpa>
        {/* <!-- InformationStaff --> */}
        <InformationStaff></InformationStaff>
        {/* <!-- Customer --> */}
        <Customer></Customer>
        {/* <!-- Blogs --> */}
    </div>
    )
}

export default Introduce