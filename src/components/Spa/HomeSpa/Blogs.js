import '../../../assets/css/Spa/Blogs.css'
import blog1 from '../../../assets/img/services/blog1.jpg'
import blog2 from '../../../assets/img/services/blog2.jpg'
import blog3 from '../../../assets/img/services/blog3.jpg'


function Blogs(){
    return (
        <div className="section bg-pink-strong">
            <h3 className="section__heading">Spa QA</h3>
            <h1 className="section__title">Logs</h1>

            <div className="blogs">
                <div className="grid wide">
                    <div className="row no-gutters">
                        
                        <div className="col pc-4 mgb-30">
                            <div className="blogs__heading" style={{backgroundImage: `url(${blog1})`}}></div>
                            <div className="blogs__body">
                                <h5 className="blogs__title">5 tiêu chí lựa chọn phần mềm quản lý Spa hiệu quả</h5>
                                <p className="blogs__text">Hiện nay trên thị trường có rất nhiều đơn vị cung cấp phần mềm quản lý Spa. Hầu hết đều cố gắng quảng cáo sản phẩm của mình một cách ...</p>
                            </div>            
                        </div>

                        <div className="col pc-4 mgb-30">
                            <div className="blogs__heading" style={{backgroundImage: `url(${blog2})`}}></div>
                            <div className="blogs__body">
                                <h5 className="blogs__title">5 tiêu chí lựa chọn phần mềm quản lý Spa hiệu quả</h5>
                                <p className="blogs__text">Hiện nay trên thị trường có rất nhiều đơn vị cung cấp phần mềm quản lý Spa. Hầu hết đều cố gắng quảng cáo sản phẩm của mình một cách ...</p>
                            </div>            
                        </div>

                        <div className="col pc-4 mgb-30">     
                            <div className="blogs__heading" style={{backgroundImage: `url(${blog3})`}}></div>
                            <div className="blogs__body">
                                <h5 className="blogs__title">5 tiêu chí lựa chọn phần mềm quản lý Spa hiệu quả</h5>
                                <p className="blogs__text">Hiện nay trên thị trường có rất nhiều đơn vị cung cấp phần mềm quản lý Spa. Hầu hết đều cố gắng quảng cáo sản phẩm của mình một cách ...</p>
                            </div>            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Blogs