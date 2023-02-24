import '../../../assets/css/Spa/Invitation.css'
import ic1 from '../../../assets/img/services/ic1.png'
import ic2 from '../../../assets/img/services/ic2.png'
import ic3 from '../../../assets/img/services/ic3.png'
import ic4 from '../../../assets/img/services/ic4.png'
import ic5 from '../../../assets/img/services/ic5.png'
import ic6 from '../../../assets/img/services/ic6.png'


function Invitation(){
    return (
        <div className="section bg-pink-strong">
            <h3 className="section__heading">Spa QA</h3>
            <h1 className="section__title">Hãy đến với Spa QA</h1>

            <div className="invitation">
                <div className="grid wide">
                    <div className="row no-gutters">
                        <div className="col pc-4">
                            <div className="invitation__heading">
                                <img src={ic1} alt="" className="invitation__img"/>
                            </div>
                            <h2 className="invitation__name">Break from Routine</h2>
                            <p className="invitation__description">Cách tốt nhất để thư giãn hoàn toàn và giảm căng thẳng cho chính mình.</p>
                        </div>

                        <div className="col pc-4">
                            <div className="invitation__heading">
                                <img src={ic2} alt="" className="invitation__img"/>
                            </div>
                            <h2 className="invitation__name">Break from Routine</h2>
                            <p className="invitation__description">Cách tốt nhất để thư giãn hoàn toàn và giảm căng thẳng cho chính mình.</p>
                        </div>

                        <div className="col pc-4">
                            <div className="invitation__heading">
                                <img src={ic3} alt="" className="invitation__img"/>
                            </div>
                            <h2 className="invitation__name">Break from Routine</h2>
                            <p className="invitation__description">Cách tốt nhất để thư giãn hoàn toàn và giảm căng thẳng cho chính mình.</p>
                        </div>

                        <div className="col pc-4">
                            <div className="invitation__heading">
                                <img src={ic4} alt="" className="invitation__img"/>
                            </div>
                            <h2 className="invitation__name">Break from Routine</h2>
                            <p className="invitation__description">Cách tốt nhất để thư giãn hoàn toàn và giảm căng thẳng cho chính mình.</p>
                        </div>

                        <div className="col pc-4">
                            <div className="invitation__heading">
                                <img src={ic5} alt="" className="invitation__img"/>
                            </div>
                            <h2 className="invitation__name">Break from Routine</h2>
                            <p className="invitation__description">Cách tốt nhất để thư giãn hoàn toàn và giảm căng thẳng cho chính mình.</p>
                        </div>

                        <div className="col pc-4">
                            <div className="invitation__heading">
                                <img src={ic6} alt="" className="invitation__img"/>
                            </div>
                            <h2 className="invitation__name">Break from Routine</h2>
                            <p className="invitation__description">Cách tốt nhất để thư giãn hoàn toàn và giảm căng thẳng cho chính mình.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invitation