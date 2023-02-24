import HeaderNews from "./News/HeaderNews"
import BodyNews from "./News/BodyNews"
function News(){
    return (
    <div className="content">
        {/* <!-- HeaderNews -->*/}
        <HeaderNews></HeaderNews>
        {/* <!-- BodyNews --> */}
        <BodyNews></BodyNews>
    </div>
    )
}

export default News