import '../../../assets/css/Spa/Breadcrumb.css'


function Breadcrumb(){
    return (
        <div className="breadcrumb">
            <div className="breadcrumb__wrapper">
                <div className="breadcrumb__wrapper-child">
                    <h3 className="breadcrumb__headding">Giới thiệu</h3>
                    <div className="breadcrumb__body">
                        <a href="./index.html" className="breadcrumb__link">Trang chủ /</a>
                        <a href="#" className="breadcrumb__link">Giới thiệu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb