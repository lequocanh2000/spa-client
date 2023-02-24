import Slider from './HomeSpa/Slider'
import Services from './HomeSpa/Services'
import ServicesFamous from './HomeSpa/ServicesFamous'
import Invitation from './HomeSpa/Invitation'
import Contact from './HomeSpa/Contact'
import Blogs from './HomeSpa/Blogs'

function Home(){
    return (
    <div className="content">
        {/* <!-- Slider -->*/}
        <Slider></Slider>
        {/* <!-- Services --> */}
        <Services></Services>
        {/* <!-- Services famous--> */}
        <ServicesFamous></ServicesFamous>
        {/* <!-- Invitation  --> */}
        <Invitation></Invitation>
        {/* <!-- Contact --> */}
        <Contact></Contact>
        {/* <!-- Blogs --> */}
        <Blogs></Blogs>
    </div>
    )
}

export default Home